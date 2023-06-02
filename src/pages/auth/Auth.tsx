// @ts-nocheck comment
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount, useContractWrite } from 'wagmi'
import { UserRegistry } from '../../components/contracts'
import Button from '../../components/Button'

const Auth = () => {
  const navigate = useNavigate();
  const { isConnected } = useAccount()

  const { data: registerDetails, write: register, isLoading: isRegistering, isSuccess: registered, isError: registerError } = useContractWrite({
    ...UserRegistry,
    functionName: 'registerUser'
  })

  useEffect(() => {
    console.log("mintData:", registerDetails);
    console.log("isMintLoading:", isRegistering);
    console.log("isMintStarted", registered);
    console.log("mintError:", registerError);
    console.log("___________");
  }, [registerDetails, isRegistering, registered]);

  const registerHandler = () => {
    register()
    registered && (
      navigate('/user')
    )
  }
  
  return (
    <div className='mb-3'>
      <input className="flex focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md ring-1 px-8 ring-slate-200 shadow-sm " type="text" aria-label="Username" placeholder="Username..." />
      <Button label={'Register'} width='14rem' disabled={isRegistering} func={registerHandler} />
    </div>
  )
}

export default Auth