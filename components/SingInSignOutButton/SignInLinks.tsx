import { SignUpButton} from '@clerk/nextjs'
import { Button } from "@/components/ui/button"

const SignInLinks = () => {
    return (
        <div>
            <SignUpButton mode='modal'>
                <Button className='bg-zinc-100 hover:bg-sky-500/75'>Login</Button>
            </SignUpButton>
        </div>
    )
}

export default SignInLinks
