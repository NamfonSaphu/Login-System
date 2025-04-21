import React from 'react'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'

const SingInSignOutLinks = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-2">
      <SignInLinks />
      <SignOutLinks />
    </div>
  )
}

export default SingInSignOutLinks
