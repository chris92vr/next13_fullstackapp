'use client';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/AuthContext';

function Page({ params }) {
  // remove post by id using api
  const { user } = useAuthContext();
  const router = useRouter();

  const handleDelete = async (e) => {
    e.preventDefault();
    const post = await fetch(`/api/removePost?id=${params.id}`, {
      method: 'DELETE',
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
        <h1 className="mt-60 mb-30">Delete Post</h1>
        <div className="form">
          <button onClick={handleDelete}>Delete Post</button>
        </div>
      </div>
    </div>
  );
}

export default Page;
