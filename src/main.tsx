import '@rainbow-me/rainbowkit/styles.css'
import { RainbowKitProvider, Theme, darkTheme } from '@rainbow-me/rainbowkit'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { WagmiConfig } from 'wagmi'
import './main.css'
import { App } from './App'
import { chains, config } from './wagmi'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <RainbowKitProvider 
        chains={chains}
        theme={darkTheme({
          accentColor: '#FAF3F3',
          accentColorForeground: 'black',
          borderRadius: 'large',
          fontStack: 'system',
          overlayBlur: 'large',
        })}
      >
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
)
