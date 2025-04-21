import { Button } from "@/components/ui/button"
import Link from "next/link"

const Logo = () => {
  return (

    <div className="p-5">
      <Button size='sm' asChild>
        <Link href='/' className="text-2xl font-semibold bg-stone-50">NAMFON S</Link>
      </Button>
    </div>
  )
}

export default Logo

