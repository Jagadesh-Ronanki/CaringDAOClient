import { createPublicClient, http } from 'viem'
import { sepolia,foundry } from 'viem/chains'

/* export const client = createPublicClient({
  chain: foundry,
  transport: http(),
}) */

export const client = createPublicClient({
  chain: sepolia,
  transport: http(),
})