import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./mainboard.scss"
import Post from './Post'
import Rightmenuitem from './Rightmenuitem'
import Story from './Story'


export default function Mainboard(props) {
  const [posts, setPosts] = useState([]);
  const [postUrl,setPosturl] = useState("http://localhost:3003/mainmenu-posts");
  const [stories,setStories] = useState([]);
  const [storyUrl,setStoryUrl] = useState("http://localhost:3003/stories");
  const getStories = ()=>{
    axios.get(storyUrl)
    .then(e=>e.data)
    .then(data=>setStories(data))
    .catch(err=>console.log(err))
  }
  const getPosts = ()=>{
    fetch(postUrl)
      .then(res => res.json())
      .then(data => setPosts(data))

  }

  useEffect(() => {
    getStories();
    getPosts();
  }, [postUrl,storyUrl])

  return (
    <div> 

      <div className='mainboard'>
        <div className='uppertimeline'>
          <div className='timeline'>
            <div className='stories'>

              {
                stories.map(e=>(
                  <Story img={e.img} username={e.username} />
                  ))
                }

            </div>
            <div className='posts'>


              {posts.map((e)=>(
                <Post bookmarkedstatusprops={e.bookmarkedstatus} id={e.id} img={e.img} username={e.username} like={e.like} />
                ))}
            </div>
          </div>

          <div className='rightmenu'>
            <span>
              <span>Senin İçin Öneriler</span>
              <a href='#'>Tümünü gör</a>
            </span>
            <Rightmenuitem />
            <Rightmenuitem />
            <Rightmenuitem />
            <Rightmenuitem />
            <Rightmenuitem />
            <Rightmenuitem />
          </div>
        </div>
      </div>
    </div>
  )
}
