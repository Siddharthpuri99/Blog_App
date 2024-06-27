
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// function Home() {

//   const [posts, setPosts] = useState([])

//   useEffect(() => {
//     axios.get('http://localhost:3001/getposts')
//     .then(posts => {
//       setPosts(posts.data)
//     })
//     .catch(err => console.log(err))
//   }, [])

//   return (
//     <div className='posts_container'>
//       {
//         posts.map(post => (
//           <Link to={`/post/${post._id}`} className='post'> 
        
//           <img src={`http://localhost:3001/Images/${post.file}`} alt="" />
//           <div  className='post_text'>
//             <h2>{post.title}</h2>
//             <p>{post.description}</p>
//           </div>
          
//           </Link>
//         ))
//       }
//     </div>
//   )
// }

// export default Home

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/getposts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // or show a loading spinner
  }

  if (error) {
    return <div>Error: {error}</div>; // or display a user-friendly error message
  }

  return (
    <div className='posts_container'>
      {
        posts.map(post => (
          <Link to={`/post/${post._id}`} className='post' key={post._id}>
            <img src={`http://localhost:3001/Images/${post.file}`} alt="" />
            <div className='post_text'>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </Link>
        ))
      }
    </div>
  );
}

export default Home;

