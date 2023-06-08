import { Web3Storage } from 'web3.storage'

export const Upload = (setCID) => {
  const [token, setToken] = useState('')
  const [files, setFiles] = useState([])
  const [outputText, setOutputText] = useState('')
  const [linkUrl, setLinkUrl] = useState('')

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

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Web3.Storage Token:
        <input type="text" value={token} onChange={(e) => setToken(e.target.value)} />
      </label>
      <br />
      <label>
        Select File(s):
        <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
      </label>
      <br />
      <button type="submit">Upload</button>
      <br />
      <div>
        {outputText.split('\n').map((text, index) => (
          <div key={index}>{text}</div>
        ))}
        {linkUrl && <a href={linkUrl}>🔗 {linkUrl}</a>}
      </div>
    </form>
  )
}