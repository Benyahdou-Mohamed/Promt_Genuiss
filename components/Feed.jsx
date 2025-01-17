"use client"
import { useState,useEffect } from "react"
import PromptCard from "./PromptCard"

const PromptCardList=({data,handleTagClick})=>{
  return(
    <div className="mt-16 prompt_layout">
      {data.map((post)=>(
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />

        
     ) )}
    </div>
  )
}
const Feed = () => {
  
  const [searchText,setSearchText]=useState('')
  const [allPosts, setAllPosts] = useState([]);
  const [searchedResults, setSearchedResults] = useState([]);
  const handleSearchChange= (e)=>{
    setSearchText(e.target.value)
    const regex = new RegExp(searchText, "i")
    
    allPosts.filter((post)=>{
      post.prompt=="filter"
    })
    const filtredPosts = allPosts.filter((item)=>regex.test(item.creator.username) ||
    regex.test(item.tag) ||
    regex.test(item.prompt))
    setSearchedResults(filtredPosts)
    
    
  }

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    
    const data = await response.json();
    console.log("data",data)
    setAllPosts(data);
  };
  useEffect(()=>{
    fetchPosts()
    
  },[])
  return (
   
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input type="text" className="search_input peer" placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>
      {searchText ?
      <PromptCardList data={searchedResults} handleTagClick={()=>{}}/>
    :
    <PromptCardList data={allPosts} handleTagClick={()=>{}}/>
    }
    </section>
    
    
  )
}

export default Feed