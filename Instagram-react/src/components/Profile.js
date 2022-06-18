import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Showpost from './Showpost'
import "./profile.scss"
export default function Profile() {
  const [profileData, setProfileData] = useState([])
  const [isload,setIsload]=useState(false)
  const [showPost, setShowPost] = useState(false);
  const [inf,setinf] = useState({})
  useEffect(() => {
    axios.get("http://localhost:3003/my-profile")
    .then(res=>res.data[0])
    .then(set=>setProfileData(set))
    .then(()=>setIsload(e=>!e))

  }, [])

    const changepoststatus = (data)=>{
      setShowPost(e=>!e)
      setinf(data)
      console.log(data)
    }
  const post  = profileData.posts

  
  
  return (
    <div>
      <Header />
      {
        showPost
        ?
        <Showpost data={inf} closeShowPost={()=>setShowPost(e=>!e)}></Showpost>
        :
        <div></div>

      }
      <div className='profile-container'>
        <div className='deneme'>

          <div className='profile'>

            <img width="150px" height="150px" src={profileData.pp}></img>
            <div className='describe-profile'>
              <div className='first-div'><span>{profileData.username}  </span> <button>Profili Düzenle</button><svg aria-label="Seçenekler" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg></div>
              <span><b>5</b>  Gönderi</span> <span><b> {profileData.followers}</b> Takipçi</span> <span><b>{profileData.following}</b> Takip</span>
              <div className='last-div'><h4>{profileData.username}</h4><p>Describe</p></div>
            </div>

          </div>
          <div className='profile-posts'>
        
          
          {
            isload
            ?
            post.map((e,index)=>(
              <a onClick={()=>changepoststatus(e)} key={index}><div className='profile-post'><img  src={e.img}></img></div></a>
            ))
            :
            <div></div>
          }
             
       

            
            
          </div>





        </div>
      </div>

    </div>

  )
}
