"use client"

import { SignOutButton } from '@clerk/nextjs'
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const SignOutLinks = () => {
    return (
        <div>
            <SignOutButton redirectUrl='/'>
                <Button className='bg-zinc-100 hover:bg-red-500' onClick={() => toast('Logout Successfully!!!')}>Logout</Button>
            </SignOutButton>
        </div>
    )
}

export default SignOutLinks
