"use client"

import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const MemberHomePage = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/')
    }
  })
  return (
    <div>Member Home Page</div>
  )
}

export default MemberHomePage