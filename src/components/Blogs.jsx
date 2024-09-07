import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

function Blogs() {
  const {loading,posts}=useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[500px]'>
      {
        loading ? (<Spinner/>):
        (
          posts.length ===0 ? (<div>No Post found</div>):
          (
            posts.map((post)=>(
              <div key={post.id}>
                <p className='font-bold'>{post.title}</p>

                <p>by<span>{post.author}</span>on<span>{post.category}</span></p>

                <p>posted on <span>{post.date}</span></p>

                <p>{post.content}</p>

                <div>
                  {
                    post.tags.map((tag,index)=>{
                      return <span key={index}>{`#${tag}`}</span>
                    })
                  }
                </div>
              </div>
            ))
          )
        )
      }
    </div>
  )
}

export default Blogs