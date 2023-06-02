import React, { useState, Dispatch, SetStateAction } from 'react'
import InitialState from './InitialState'
import ConfirmState from './ConfirmState'
import LoadingState from './LoadingState'
import FinishedState from './FinishedState'

const AppreciateHandler = (
  {postId, setModalOpen} : 
  {postId: number, setModalOpen: Dispatch<SetStateAction<boolean>>}) => {
  
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('initial')

  const handleConfirm = async () => {
    setStatus('loading')
    setStatus('confirm')
  }

  const handleTransact = async () => {
    setStatus('loading')
    setStatus('finished')
  }

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
          />
        )
      
      case 'loading':
        return <LoadingState />

      case 'finished':
        return <FinishedState setModalOpen={setModalOpen}/>

      default:
        break
    }
  }
  return <>{renderLogic()}</>
}

export default AppreciateHandler