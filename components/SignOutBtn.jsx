import React from 'react'
import { signOut } from 'next-auth/react'

const SignOutBtn = () => {
  return (
    <button
      onClick={() => signOut()}
      className="rounded-lg bg-blue-500 text-white px-4 py-2"
    >
      Sign Out
    </button>
  )
}

export default SignOutBtn