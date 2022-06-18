import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Header'
import "./saved.scss"
import Showpost from './Showpost'
export default function Saved() {
  const [showPostStatus, setShowPostStatus] = useState(false);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [changebookmarked, setchangebookmarked] = useState("http://localhost:3003/bookmarked-posts")
  const [bookmarkeddata, setbookmarkeddata] = useState({})
  const getbookmposts = () => {
    axios.get(changebookmarked)
      .then(e => e.data)
      .then(data => setBookmarkedPosts(data))
      .catch(e => console.log(e))
  }

  useEffect(() => {
    getbookmposts();
  }, [changebookmarked])

  const sendData = (e) => {
    setbookmarkeddata({ bookmarkeddata: e })

  }
  const showPost = () => {
    setShowPostStatus(e => !e)

  }
  return (
    <div className='saved'>
      <Header />
      {
        showPostStatus ?
          <div className='secret-div'>
            <Showpost data={bookmarkeddata.bookmarkeddata} closeShowPost={showPost} />
          </div>
          :
          <div></div>

      }
      <div className='container'>
        <div className='content'>

          <h3>Tüm gönderiler</h3>
          <div className='posts'>
            {
              bookmarkedPosts.map((e) => (
                <div onClick={() => { showPost(); sendData(e) }} className='post'><img src={e.img} /></div>
              ))
            }


          </div>
        </div>
      </div>
    </div>
  )
}
