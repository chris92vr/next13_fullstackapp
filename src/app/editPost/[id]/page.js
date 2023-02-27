'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuthContext } from '@/context/AuthContext';

function Page({ params }) {
  const [post, setPost] = useState({});
  const { user } = useAuthContext();
  const router = useRouter();
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [state, setState] = useState({ name: '', content: '' });

  useEffect(() => {
    // get post by id using api and set it to state

    const getPostById = async () => {
      const post = await fetch(`/api/getPostbyId?id=${params.id}`);
      const data = await post.json();
      setPost(data.post);
      setState({ name: data.post.name, content: data.post.content });
    };
    getPostById();
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();
    const post = await fetch(`/api/editPost?id=${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        content,
      }),
    });
    const data = await post.json();
    console.log('data', data);
    router.push('/admin');
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
        <h1 className="mt-60 mb-30">Add data</h1>
        <form onSubmit={handleEdit} className="form">
          <label htmlFor="namePost">
            <p>Name post</p>
            <input
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              name="namePost"
              id="namePost"
              defaultValue={state.name}
            />
          </label>
          <label htmlFor="contentPost">
            <p>Content post</p>
            <input
              onChange={(e) => setContent(e.target.value)}
              required
              type="text"
              name="contentPost"
              id="contentPost"
              defaultValue={state.content}
            />
          </label>
          <button type="submit">Add data</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
