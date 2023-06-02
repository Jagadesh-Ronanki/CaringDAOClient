import React, { useState } from 'react'
import user from '../../../assets/images/user.png'

const style = {
  wrapper: `px-4 flex flex-row`,
  tweetBoxLeft: `mr-4`,
  tweetBoxRight: `flex-1`,
  profileImage: `height-12 w-12 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex pt-2`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-2`,
  submitGeneral: `px-6 py-2 rounded-md font-bold`,
  inactiveSubmit: `bg-black text-[#95999e]`,
  activeSubmit: `bg-black text-white`,
}

const Postbox = () => {
  const [postMessage, setPostMessage] = useState('')

  const submitPost = () => {
    console.log(postMessage)
    setPostMessage('')
    // fetch posts
  }

  return (
    <div className={style.wrapper}>
      <div className={style.tweetBoxLeft}>
        <img
          src={user}
          className={
            style.profileImage
          }
        />
      </div>
      <div className={style.tweetBoxRight}>
        <form>
          <textarea
            onChange={e => setPostMessage(e.target.value)}
            value={postMessage}
            placeholder="What's happening?"
            className={style.inputField}
          />
          <div className={style.formLowerContainer}>
            <button
              type='submit'
              onClick={event => submitPost()}
              disabled={!postMessage}
              className={`${style.submitGeneral} ${
                postMessage ? style.activeSubmit : style.inactiveSubmit
              }`}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Postbox