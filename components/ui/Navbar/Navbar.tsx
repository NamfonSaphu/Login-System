import DropdownListMene from "./DropdownListMene"
import Logo from "./Logo"

const Navbar = () => {
    return (
        <div className="container flex justify-between">
            <Logo />
            <div className="flex gap-4">
                {/* <h1>Darkmode</h1> */}
                <DropdownListMene />
            </div>
        </div>
    )
}

export default Navbar
