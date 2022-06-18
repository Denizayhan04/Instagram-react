import React,{useState} from 'react'
import axios from 'axios'
import "./showpost.scss"
export default function Showpost(props) {
  const [liked, setLiked] = useState(false)
  const [bookmarked,setBookmarked] = useState(props.data.bookmarkedstatus)
  const changebookmark = ()=>{
    setBookmarked(e=>!e)
    
    bookmarked 
    ?
    axios.patch(`http://localhost:3003/mainmenu-posts/${props.data.id}`,{
      bookmarkedstatus:false
    })
    .then(axios.delete(`http://localhost:3003/bookmarked-posts/${props.data.id}`))
    .then("deleted")
    .catch(err=>console.log(err))
    :
    axios.patch(`http://localhost:3003/mainmenu-posts/${props.data.id}`,{
      bookmarkedstatus:true
      })
      .then(axios.post(`http://localhost:3003/bookmarked-posts`,{
        id:props.data.id,
        img:props.data.img,
        username:props.data.username,
        like:props.data.like,
        bookmarkedstatus:true
      }))
    console.log("yok");

  }
  const changelike = () => {
    setLiked(e => !e)
  }
  return (
    <div className='showpost'>
      <div className='close' onClick={props.closeShowPost} ><img src="https://img.icons8.com/ios/50/000000/delete-sign--v1.png" /></div>
      <div className='container'>
        <div className='content'>
          <div className='center'>
            <img src={props.data.img}></img>
          </div>

        </div>
        <div className='info'>
          <div className='user'>
            <div className='space'>

              <a className='img'><img src='https://randomwordgenerator.com/img/picture-generator/52e1d6444a55b10ff3d8992cc12c30771037dbf85254784a722d73dd904f_640.jpg' /></a>
              <a><span>{props.data.username}</span></a>
              <a className='follow'>Takip Et</a>
            </div>
            <svg aria-label="Diğer seçenekler" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>

          </div>
          <div className='comments'>
            <div className='ownercomment'>
              <img height="40px" width="40px" src='https://randomwordgenerator.com/img/picture-generator/52e1d6444a55b10ff3d8992cc12c30771037dbf85254784a722d73dd904f_640.jpg'></img>

              <p><span>{props.data.username}</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum finibus laoreet. Sed rhoncus condimentum viverra. Fusce varius interdum dui sed mollis. Nulla id velit vel dolor facilisis blandit. Ut.</p>
            </div>
            <div className='usercomments'>
              <div className='usercommentschild'>
                <img height="40px" width="40px" src="https://randomuser.me/api/portraits/women/27.jpg"></img>
                <p><span>Username</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum finibus laoreet. Sed rhoncus condimentum viverra.
                </p>
              </div>
              <div className='usercommentschild'>
                <img height="40px" width="40px" src="https://randomuser.me/api/portraits/women/27.jpg"></img>
                <p><span>Username</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum finibus laoreet. Sed rhoncus condimentum viverra.
                </p>
              </div>
              <div className='usercommentschild'>
                <img height="40px" width="40px" src="https://randomuser.me/api/portraits/women/27.jpg"></img>
                <p><span>Username</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum finibus laoreet. Sed rhoncus condimentum viverra.
                </p>
              </div>
              <div className='usercommentschild'>
                <img height="40px" width="40px" src="https://randomuser.me/api/portraits/women/27.jpg"></img>
                <p><span>Username</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum finibus laoreet. Sed rhoncus condimentum viverra.
                </p>
              </div>


            </div>
            <div className='interaction'>
              
              <div className='like-share'>
                <div>
                  {liked ?
                    <svg onClick={() => changelike()} aria-label="Beğenmekten Vazgeç" class="_8-yf5 " color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    : <svg onClick={() => changelike()} aria-label="Beğen" class="_8-yf5 " color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                  }
                  <svg aria-label="Yorum Yap" class="_8-yf5 " color="#black" fill="#black" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                  <svg aria-label="Gönderi Paylaş" class="_8-yf5 " color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                </div>
                {bookmarked ?
                  <svg onClick={() => changebookmark()} aria-label="Kaldır" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"></path></svg>
                  :
                  <svg onClick={() => changebookmark()} aria-label="Kaydet" class="_8-yf5 " color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                }

              </div>
              
              <div>Username and 542318 other likes</div>
              
              <div>14 September</div>
              
              <div> <input placeholder='write' type="text"></input><button>Share</button></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
