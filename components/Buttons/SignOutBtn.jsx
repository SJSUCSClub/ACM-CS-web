import React from 'react'
import { signOut } from 'next-auth/react'

const SignOutBtn = () => {
  return (
    // <button
    //   onClick={() => signOut()}
    //   className="rounded-lg bg-blue-500 text-white px-4 py-2"
    // >
    //   Sign Out
    // </button>
    <button onClick={() => signOut()} className="rounded-md border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200 px-4 py-2 font-normal text-sm">
      SIGN OUT
    </button>
  )
}

export default SignOutBtn