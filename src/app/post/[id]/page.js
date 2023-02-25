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
          <p>{post.name}</p>
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
