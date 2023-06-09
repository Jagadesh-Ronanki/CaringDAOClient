import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, sepolia } from 'wagmi'
import { foundry, goerli, mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const walletConnectProjectId = '264585abe07a44b0c0d2e8645c740ef6'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [{/*mainnet*/} sepolia, ...(import.meta.env?.MODE === 'development' ? [sepolia] : []), ...(import.meta.env?.MODE === 'development' ? [foundry] : [])],
  [
    publicProvider(),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'My wagmi + RainbowKit App',
  chains,
  projectId: walletConnectProjectId,
})

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export { chains }
