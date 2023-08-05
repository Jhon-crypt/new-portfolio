export default function HeaderHero(){

    return (

        <>
        
            <div className="relative container px-4 mx-auto">
                <div className="flex flex-wrap justify-between">
                    <div className="relative hidden lg:flex items-center top-0 left-0 -ml-32 pr-32 w-full lg:w-auto">
                        <div className="absolute flex" style={{transform: "rotate(-90deg)"}}><a className="mr-14 text-xs font-bold text-black" href="#">Facebook</a><a className="mr-14 text-xs font-bold text-black" href="#">Twitter</a><a className="text-xs font-bold text-black" href="#">Instagram</a></div>
                    </div>
                    <div className="w-full lg:w-5/12 md:flex lg:hidden items-center mb-8">
                        <ul className="max-w-lg mx-auto text-center flex justify-center md:justify-between">
                            <li className="mr-6"><a className="text-xs text-black font-bold" href="#">Twitter</a></li>
                            <li className="mr-6"><a className="text-xs text-black font-bold" href="#">Facebook</a></li>
                            <li><a className="text-xs text-black font-bold" href="#">Instagram</a></li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-5/12 mb-6">
                        <div className="flex flex-col items-center">
                            <div className="mb-9">
                                <img src="https://shuffle.dev/pstls-assets/images/headers/header-1-woman.jpg" alt=""/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12 flex items-center">
                        <div className="max-w-lg mx-auto">
                            <h1 className="text-5xl lg:text-6xl font-heading mb-6">
                                Created for ambitious businesses
                            </h1>
                            <p className="leading-8 md:max-w-md xl:max-w-sm mb-6">Pstls. Kit uses attractive colors and modern typography to make you look good, no matter what business you’re in.</p>
                            <div className="ml-auto"><a className="inline-block w-full md:w-auto text-center px-8 py-3 text-white font-bold bg-black hover:bg-gray-900 transition duration-200" href="#">Details</a></div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>

    )

}