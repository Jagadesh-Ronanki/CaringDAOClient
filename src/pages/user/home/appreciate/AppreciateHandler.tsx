// @ts-nocheck
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import InitialState from './InitialState'
import ConfirmState from './ConfirmState'
import LoadingState from './LoadingState'
import FinishedState from './FinishedState'
import { PostRegistry, PriceConversion } from '../../../../components/contracts'
import Error404 from '../../Error404.page'
import { useContractRead, useContractWrite, useAccount, useWaitForTransaction } from 'wagmi'
import { precision } from '../../../../utils/precision'

const AppreciateHandler = ({
  postId,
  setModalOpen,
}: {
  postId: number;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { address } = useAccount()
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('initial')
  const [latestPrice, setLatestPrice] = useState(0)
  const [conversionPrice, setConversionPrice] = useState(0)

  //====================================================================================================
  // Contract Calls
  //====================================================================================================

  const {
    data: GLatestPrice,
    isLoading: LLatestPrice,
    isSuccess: SLatestPrice,
    isError: ELatestPrice,
  } = useContractRead({
    ...PriceConversion,
    functionName: 'getLatestPrice',
    watch: true,
  })

  useEffect(() => {
    if (SLatestPrice && GLatestPrice) {
      const price = Number(GLatestPrice[0]) / 10 ** GLatestPrice[1]
      setLatestPrice(precision(price))
    }
  }, [GLatestPrice, SLatestPrice])

  const {
    data: GConversionPrice,
    isLoading: LConversionPrice,
    isSuccess: SConversionPrice,
    isError: EConversionPrice,
  } = useContractRead({
    ...PriceConversion,
    functionName: 'UsdtoEth',
    args: [value],
    watch: true,
  })

  useEffect(() => {
    if (SConversionPrice && GConversionPrice) {
      const priceWEI = Number(GConversionPrice)
      setConversionPrice(priceWEI)
    }
  }, [GConversionPrice, SConversionPrice])

  // write a contract call to postRegistry to call appreciate function args: postId, amount as wei (conversionPrice) as msg.value
  const {
    data: GAppreciate,
    write: appreciate,
    isLoading: LAppreciate,
    isSuccess: SAppreciate,
    isError: EAppreciate,
  } = useContractWrite({
    ...PostRegistry,
    functionName: 'appreciate',
  })

  const {
    data: appreciateTxData,
    isSuccess: appreciateTxSuccess,
    error: appreciateTxtxError,
  } = useWaitForTransaction({
    hash: GAppreciate?.hash,
    onError: (error) => {
      console.log('Deposit error: ', error)
      setStatus('initial') // Reset status in case of error
    },
    onSuccess: (transaction) => {
      if (transaction) {
        console.log('Appreciation done', transaction)
      }
    },
  })

  //====================================================================================================
  // Handlers
  //====================================================================================================

  const handleConfirm = async () => {
    if (SConversionPrice && GConversionPrice) {
      setStatus('confirm')
    } else {
      setStatus('loading')
    }
  }

  const handleTransact = () => {
    setStatus('loading')
    appreciate({
      args: [postId],
      from: address,
      value: conversionPrice,
    })
  }

  useEffect(() => {
    if(appreciateTxSuccess)
    setStatus('finished')
  }, [appreciateTxSuccess])

  //====================================================================================================
  // Render Logic
  //====================================================================================================

  const renderLogic = (modalStatus = status) => {
    switch (modalStatus) {
      case 'initial':
        return (
          <InitialState
            postId={postId}
            value={value}
            setValue={setValue}
            handleConfirm={handleConfirm}
            setModalOpen={setModalOpen}
          />
        )

      case 'confirm':
        return (
          <ConfirmState
            handleTransact={handleTransact}
            latestPrice={latestPrice}
            conversionPrice={conversionPrice}
          />
        )

      case 'loading':
        return <LoadingState />

      case 'finished':
        return <FinishedState setModalOpen={setModalOpen} />

      default:
        return null
    }
  }

  return <>{renderLogic()}</>
}

export default AppreciateHandler
