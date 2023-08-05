
export default function Header(){

    return (

        <>
        
            <nav className="relative py-10" data-config-="">
                <div className="container px-4 mx-auto">
                    <div className="flex items-center justify-between relative">
                        <a className="inline-block" href="#">
                            <img src="https://shuffle.dev/pstls-assets/logos/pstls-logo-md.svg" alt="" width="116"/>
                        </a>
                        <button className="lg:hidden navbar-burger">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z" fill="#000"></path>
                            </svg>
                        </button>
                        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <ul className="inline-flex">
                                <li className="mr-8"><a className="inline-block font-bold hover:text-gray-900" aria-current="page" href="#">Home</a></li>
                                <li className="mr-8"><a className="inline-block font-bold hover:text-gray-900" href="#">Products</a></li>
                                <li className="mr-8"><a className="inline-block font-bold hover:text-gray-900" href="#">Resources</a></li>
                                <li><a className="inline-block font-bold hover:text-gray-900" href="#">Pricing</a></li>
                            </ul>
                        </div>
                        <div className="hidden lg:block ml-auto"><a className="inline-block mr-8 font-bold hover:text-gray-900" href="#">Log In</a><a className="inline-block px-8 py-3 text-white font-bold bg-black hover:bg-gray-900 transition duration-200" href="#">Sign Up</a></div>
                    </div>
                </div>
            </nav>
        
        </>

    )

}