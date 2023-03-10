// post/[id].js
'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import getPost from '@/app/post/getPost';
import { useAuthContext } from '@/context/AuthContext';

function Page({ params }) {
  const [post, setPost] = useState({});
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    const getPostById = async () => {
      const post = await getPost('posts', params.id);
      setPost(post);
    };
    getPostById();
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    const post = await fetch(`/api/removePost?id=${params.id}`, {
      method: 'DELETE',
    });
    const data = await post.json();
    console.log('data', data);
    router.push('/viewPosts');
  };

  if (!user) {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1 className="mt-60 mb-30">home</h1>
          <div className="form">
            <p>You are not logged in</p>
            <button onClick={() => router.push('/signin')}>Sign in</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Post</h1>
        <div className="form">
          <h3>{post.name}</h3>
          <p>{post.content}</p>
          <button onClick={() => router.push(`/editPost/${post._id}`)}>
            Edit Post
          </button>
          <button onClick={handleDelete}>Delete Post</button>
        </div>
      </div>
    </div>
  );
}

export default Page;
