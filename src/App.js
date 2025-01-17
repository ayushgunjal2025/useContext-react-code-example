import React, { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'


export const App = () => {

  const {fetchBlogPosts}=useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  },[]);

  return (
    <div className='w-full h-screen  gap-y-1 justify-center items-center'>
      <Header/>
      <Blogs/>
      <Pagination/>
    
    </div>
  )
}

export default App