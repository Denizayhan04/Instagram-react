import React, { useState } from 'react'
import "./app.scss"
import Header from './components/Header'
import Mainboard from './components/Mainboard'
import CreatePost from './components/CreatePost'

export default function App() {
  const [toggleCreatePost,setToggleCreatePost] = useState(false)
  const createPost = async ()=>{
    setToggleCreatePost(e=>!e)
  }
  //  async function createPost(){
  //  setToggleCreatePost(e=>!e)
  // }
  /*         mainsvg={mainsvg} setMainsvg={setMainsvg} messagesvg={messagesvg} setMessagesvg={setMessagesvg} createpostsvg={createpostsvg} setCreatepostsvg={setCreatepostsvg} exploresvg={exploresvg} setExploresvg={setExploresvg} likedsvg={likedsvg} setLikedsvg={setLikedsvg} formatAllsvg={formatAllsvg} setSelectedsvg={setSelectedsvg}
   */      
/*   const [mainsvg,setMainsvg]= useState(true)
  const [messagesvg,setMessagesvg]= useState(false)
  const [createpostsvg,setCreatepostsvg]= useState(false)
  const [exploresvg,setExploresvg]= useState(false)
  const [likedsvg,setLikedsvg]= useState(false)
  const formatAllsvg = (e)=>{
    setMainsvg(false);
    setMessagesvg(false);
    setCreatepostsvg(false);
    setExploresvg(false);
    setLikedsvg(false);
    e.preventDefault()
  }
  const setSelectedsvg = (parameter)=>{
    parameter(true)

  } */
  return (
    <div>
        <Header createPost={createPost}
  />
        {
          toggleCreatePost 
          ?
          <CreatePost createPost={createPost}></CreatePost>
          :
          <div></div>
        }
        <Mainboard />

    </div>
  )
}
