import React from 'react';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

// Configure the message placement
message.config({
  top: 20, // Adjust the top position as needed
  duration: 2, // Set the duration for the message
  maxCount: 1, // Limit to only one message at a time
});

export const SidebarToggleButton = () => {
  return (
    <button
      data-drawer-target="cta-button-sidebar"
      data-drawer-toggle="cta-button-sidebar"
      aria-controls="cta-button-sidebar"
      type="button"
      className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span className="sr-only">Open sidebar</span>
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>
  );
};

const Sidebar = () => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Governance Token
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Proposals
        </a>
      ),
    },
  ];
  
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
    <aside id="cta-button-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-2 border-cyan" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-white-50 dark:bg-white-500">
          <ul className="space-y-2 font-medium">
            <li>
                <Link to={'dashboard'} className="flex items-center p-2 text-black-200 rounded-lg dark:text-black-200 hover:bg-gray-100 dark:hover:bg-slate-300">
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                  <span className="ml-3">Dashboard</span>
                </Link>
            </li>
            <li>
              <Link to={'feed'}  className="flex items-center p-2 text-black-200 rounded-lg dark:text-black-200 hover:bg-gray-100 dark:hover:bg-slate-300">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Feed</span>
                  {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </Link>
            </li>
            <li>
            <Dropdown menu={{ items }} placement="bottom" >
              <div className="flex items-center p-2 text-black-200 rounded-lg dark:text-black-200 hover:bg-gray-100 dark:hover:bg-slate-300">
              <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Governance</span></div>
            </Dropdown>
            </li>
          </ul>
          <div id="dropdown-cta" className="p-4 mt-6 mb-6 rounded-lg bg-slate-200 border-t pt-2 border-cyan dark:bg-slate-200 fixed justify-end bottom-0" role="alert">
            <div className="flex items-center mb-3">
                      
            </div>
            <p className="mb-3 text-sm text-black-800 dark:text-black-800">
                Proposal to set variables to x,y,z
            </p>
            
            <div className=' flex flex-row items-center space-between pt-4 pb-4'>
              <Button className=' bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2 py-0.5 rounded dark:bg-green-200 dark:text-slate-900 dark:hover:bg-green-150'> Agree </Button> <br/>
              <Button  className='bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-1 py-0.5 rounded dark:bg-grey-200 dark:text-grey-900'> Abstain </Button> <br/>
              <Button  className='bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-900'> Against </Button> <br/>
            </div>

            {/* <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
              <span className="sr-only">Close</span>
              <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button> */}
          </div>
      </div>
    </aside>
    </>
  )
}

export default Sidebar;