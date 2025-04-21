"use client"

import { SignOutButton } from '@clerk/nextjs'
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const SignOutLinks = () => {
    return (
        <div>
            <SignOutButton redirectUrl='/'>
                <Button variant={'outline'} onClick={() => toast('Logout Successfully!!!')}>Logout</Button>
            </SignOutButton>
        </div>
    )
}

export default SignOutLinks
