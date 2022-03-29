import logo from "../images/logo.png";


const NavBar = () => {
    return (
        <nav className='grid md:justify-center justify-items-center p-4'>
            <div className='md:flex-[0.5] flex-initial  items-center'>
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
        </nav>
    )
}

export default NavBar