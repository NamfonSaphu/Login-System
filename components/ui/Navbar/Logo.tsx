import { Button } from "@/components/ui/button"
import Link from "next/link"

const Logo = () => {
  return (
    
    <Button className="p-5" size='sm' asChild>
      <Link href='/' className="text-2xl font-semibold">NAMFON S</Link>
      </Button>
  )
}

export default Logo

