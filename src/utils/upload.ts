import React, { useState } from 'react'
import { Web3Storage } from 'web3.storage'

export const handleFormSubmit = (token, files, setLinkUrl, setOutputText, setCID) => {
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    setOutputText('> 📦 creating web3.storage client')

    try {
      const client = new Web3Storage({ token })

      setOutputText('> 🤖 chunking and hashing the files (in your browser!) to calculate the Content ID')
      const cid = await client.put(files, {
        onRootCidReady: (localCid) => {
          setOutputText(`> 🔑 locally calculated Content ID: ${localCid}`)
          setOutputText('> 📡 sending files to web3.storage')
        },
        onStoredChunk: (bytes) => setOutputText(`> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`)
      })

      setOutputText(`> ✅ web3.storage now hosting ${cid}`)
      setLinkUrl(`https://dweb.link/ipfs/${cid}`)

      setOutputText('> 📡 fetching the list of all unique uploads on this account')
      let totalBytes = 0
      for await (const upload of client.list()) {
        setOutputText(`> 📄 ${upload.cid}  ${upload.name}`)
        totalBytes += upload.dagSize || 0
      }
      setOutputText(`> ⁂ ${totalBytes.toLocaleString()} bytes stored!`)
      setCID(cid)
    } catch (error) {
      console.error('Error:', error)
      setOutputText(`Error: ${error.message}`)
    }
  }
}