/* import { useState, useEffect } from 'react'
import { getContract } from 'wagmi/actions'
import { PriceConversion } from '../components/contracts'
import { client } from './client'

export const inUsd = async (wei) => {
  const [usd, setUsd] = useState()

  useEffect(() => {
    const fetchLatestPrice = async () => {
      const latestPrice = await client.readContract({
        ...PriceConversion,
        functionName: 'getLatestPrice',
        watch: true,
      })

      setUsd(Number(latestPrice[0]) / (10 ** latestPrice[1]))
    }

    fetchLatestPrice()
  }, [])

  return Number(wei) / (10 ** 18) * usd
} */

export const inUsd = (wei, latestPrice) => {
  const usd = Number(latestPrice[0]) / (10 ** latestPrice[1])
  return Number(wei) / (10 ** 18) * usd
}
