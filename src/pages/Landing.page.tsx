import React, { useEffect, useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useContractRead } from 'wagmi';
import { UserRegistry } from '../components/contracts';
import Button from '../components/Button';

const Landing = () => {
  const navigate = useNavigate();
  const { isConnected, address } = useAccount();
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [authenticate, setAuthenticate] = useState<boolean>(false);

  const { data: fetchUserStatus, isLoading, isError, isSuccess } = useContractRead({
    ...UserRegistry,
    functionName: 'isRegistered',
    args: [address!],
  });

  useEffect(() => {
    setIsRegistered(fetchUserStatus);
  }, [address]);

  const handleAuthClick = () => {
    setAuthenticate(!authenticate)
    navigate('/auth');
  };

  return (
    <div className="bg-white h-screen w-screen overflow-hidden">
      <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
        {/* image holder */}
        <div>
          <img src={logo} alt="logo" className="scale-[150%] pt-[80px] md:scale-[250%]" />
        </div>
        <div>
          <ConnectButton />
        </div>
        <div className="m-10">
          {isConnected && isRegistered ? (
            <div>
              <NavLink to="/user">
                <Button label={'Dashboard'} width="14rem" func={(() => {})}/>
              </NavLink>
            </div>
          ) : (
            <div>
              {isConnected && !authenticate && (
                <Button label={'Authenticate'} width="14rem" func={handleAuthClick} disabled={authenticate}/>
              )}
            </div>
          )}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Landing;
