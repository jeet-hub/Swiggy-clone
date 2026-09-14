import { useState } from 'react'
import { AiFillCaretDown, AiOutlineClose } from 'react-icons/ai'
import { FiLogIn, FiUserPlus } from 'react-icons/fi'

const navLinks = [
    { name: 'Login', href: '/login', Icon: FiLogIn },
    { name: 'Sign Up', href: '/signup', Icon: FiUserPlus },
]

const Header = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

    const showSideMenu = () => {
        setIsSideMenuOpen(true)
    }

    return (
        <>
          {/* overlay side navbar  */}
            <div
                className="black-overlay fixed inset-0 z-10 transition-opacity duration-500"
                style={{
                    opacity: isSideMenuOpen ? 1 : 0,
                    visibility: isSideMenuOpen ? 'visible' : 'hidden',
                }}
                onClick={() => setIsSideMenuOpen(false)}
            >
                <aside
                    className="h-full w-full max-w-[400px] bg-white p-6"
                    onClick={(event) => event.stopPropagation()}
                >
                    <button
                        type="button"
                        aria-label="Close menu"
                        className="mb-6 text-2xl"
                        onClick={() => setIsSideMenuOpen(false)}
                    >
                        <AiOutlineClose />
                    </button>
                    <p className="text-lg font-semibold">Select your location</p>
                </aside>
            </div>
                {/* top header  */}
            <header className="border-b border-gray-100 bg-white shadow-sm">
                <div className="mx-auto flex min-h-20 w-full max-w-[1200px] items-center gap-6 px-4">
                    {/* logo  */}
                    <div className="logo">
                        <a href="/" aria-label="Swiggy home">
                            <img
                                src="/Swiggy-logo.png"
                                alt="Swiggy"
                                className="h-14 w-[100px] object-contain"
                            />
                        </a>
                    </div>
                    {/* location selector */}
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                        <span className="border-b-2 border-gray-900 font-semibold text-gray-900">Delhi NCR</span>
                        <span className="hidden sm:inline">Noida, Gurgaon, Faridabad</span>
                        <button
                            type="button"
                            aria-label="Choose location"
                            className="flex items-center text-[#fc8019]"
                            onClick={showSideMenu}
                        >
                            <AiFillCaretDown />
                        </button>
                    </div>

                    {/* nav menus  */}
                    <nav className="ml-auto flex items-center gap-5 text-sm font-medium text-gray-700">
                        {navLinks.map(({ name, href, Icon }) => (
                            <a
                                key={name}
                                href={href}
                                className="flex items-center gap-2 whitespace-nowrap transition-colors hover:text-[#fc8019]"
                            >
                                <Icon className="text-lg" aria-hidden="true" />
                                <span>{name}</span>
                            </a>
                        ))} 
                    </nav>      
                </div>
            </header>
        </>
    );
}

export default Header
