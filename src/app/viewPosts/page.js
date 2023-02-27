'use client';
import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import getAllDocuments from '@/firebase/firestore/getAllData';

function Page() {
  // use api to get data from firestore and display it
  const [posts, setPosts] = React.useState([]);
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    async function getPosts() {
      setPosts(await getAllDocuments('posts', user.email));
    }

    getPosts();
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
  } else {
    return (
      <>
        <div className="wrapper">
          <div className="form-wrapper">
            <h1 className="mt-60 mb-30">home</h1>
            <div className="form">
              <p>You are logged in as {user.email}</p>
              <button onClick={() => router.push('/admin')}>
                Go to admin page
              </button>
              <p> create post</p>
              <button onClick={() => router.push('/createPost')}>
                Go to create post page
              </button>
              {null !== posts && undefined !== posts && posts.length > 0 ? (
                posts.map((post) => (
                  <div key={post.id} className="post">
                    <h3> Name: {post.name}</h3>
                    <p>Content:</p>
                    <p>{post.content}</p>
                    <button onClick={() => router.push(`/post/${post.id}`)}>
                      Go to post page
                    </button>
                    <button onClick={() => router.push(`/editPost/${post.id}`)}>
                      Go to edit post page
                    </button>
                    <button
                      onClick={() => router.push(`/deletePost/${post.id}`)}
                    >
                      Go to delete post page
                    </button>
                  </div>
                ))
              ) : (
                <p>no posts</p>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Page;
