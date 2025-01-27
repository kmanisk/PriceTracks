// 'use client'
// import { signIn } from 'next-auth/react'
//
// export default function Login() {
// 	return (
// 		<div className="flex justify-center items-center min-h-screen">
// 			<button
// 				onClick={() => signIn('google')}
// 				className="bg-primary text-white px-6 py-3 rounded-lg"
// 			>
// 				Sign in with Google
// 			</button>
// 		</div>
// 	)
// }
//
'use client';

import { signIn } from 'next-auth/react';

export default function Login() {
  const handleLogin = async () => {
    await signIn('credentials', {
      redirect: true,
      callbackUrl: '/', // Redirect to the home page
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={handleLogin}
        className="bg-primary text-white px-6 py-3 rounded-lg"
      >
        Login
      </button>
    </div>
  );
}
