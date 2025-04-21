import React from 'react'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const SingInSignOutLinks = () => {
  return (
   
    <div className="flex justify-center items-start min-h-screen pt-10">
      <Card className="w-[350px]">
        <CardHeader>
          <h1 className='text-center text-lg font-semibold'>Hello welcome to my website</h1>
        </CardHeader>
        <CardHeader>
          <div className="flex flex-col justify-center items-center space-y-2">
            <SignInLinks />
            <SignOutLinks />
          </div>
        </CardHeader>
      </Card>
    </div>
  )
}

export default SingInSignOutLinks
