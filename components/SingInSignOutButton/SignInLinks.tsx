import { SignUpButton} from '@clerk/nextjs'
import { Button } from "@/components/ui/button"

const SignInLinks = () => {
    return (
        <div>
            <SignUpButton mode='modal'>
                <Button variant={'outline'}>Login</Button>
            </SignUpButton>
        </div>
    )
}

export default SignInLinks
