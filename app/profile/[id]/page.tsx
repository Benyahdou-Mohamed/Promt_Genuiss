"use client"
import { useEffect, useState } from "react"

import Profile from "@components/Profile"
const profileDetails = ({params}) => {
  const [userPosts,setUserPosts]=useState([])
  const [userName,setUserName]=useState('')
  useEffect(()=>{
    const fetchUserPosts= async()=>{
        const response = await fetch(`/api/users/${params.id}/posts`)
        const data= await response.json()
        setUserPosts(data)
        setUserName(data[0].creator.username)
        
    }
    fetchUserPosts()
  },[])
  

  return (
    <Profile name={userName}
       desc={` Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
       data={userPosts}
       handleEdit={()=>{}}
       handleDelete={()=>{}} 
    />
  )
}

export default profileDetails