import {Transition, Popover} from '@headlessui/react'
import {SearchIcon, XIcon} from '@heroicons/react/outline'
import { Fragment } from 'react'
import {Link, useHistory} from 'react-router-dom'

const NavBar = ({location}) => {
    const history = useHistory();
    const redir = (e) =>{
        e.preventDefault();
        history.push(`/search?q=${e.target[0].value}`)
        e.target[0].value = ''
    }
    return (
        <Popover className="fixed z-50 top-0 w-full bg-lightestGray sm:bg-opacity-70 shadow-lg">
            {({open}) => (
                <>
                    <div className="container px-2 py-3 mx-auto">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Link to="/">
                                        <img 
                                            src="/foddies_logo.png" 
                                            alt="logo" 
                                            className="h-10 w-auto sm:h-10"
                                        />
                                    </Link>
                                </div>

                                <div className="flex md:hidden">
                                    <Popover.Button type="button" className="text-black hover:text-primary focus:outline-none bg-transparent" aria-label="toggle menu">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                        </svg>
                                    </Popover.Button>
                                </div>
                            </div>

                            <div className=" hidden items-center md:flex md:w-1/2">
                                <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                                    <Link to="/" className={`my-1 text-h8 font-secondary font-semibold hover:text-primary md:mx-4 md:my-0 ${location.pathname === "/" ? "text-primary":""}`}>Home</Link>
                                    <Link to="/categories" className={`my-1 text-h8 font-secondary font-semibold hover:text-primary md:mx-4 md:my-0 ${location.pathname === "/categories" ? "text-primary":""}`}>Categories</Link>
                                    <Link to="/origins" className={`my-1 text-h8 font-secondary font-semibold hover:text-primary md:mx-4 md:my-0 ${location.pathname === "/origins" ? "text-primary":""}`}>Origins</Link>
                                </div>
                            </div>

                            <div className="items-center hidden md:flex">
                                <div className="hidden mx-10 md:block">
                                        <div className="relative">
                                            <form onSubmit={redir}>
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <SearchIcon className="h-5 w-5 text-black"/>
                                                </span>
                                                <input placeholder="Search Recipe" type="text" className="w-full py-2 pl-10 pr-4 text-black rounded-full text-h10 focus:outline-none " />
                                            </form>
                                        </div>
                                </div>
                                <div className="flex items-center py-2 -mx-1 md:mx-0">
                                    <Link to='/random' className="nlock w-full px-3 py-2 mx-1 text-h10 font-medium leading-5 text-center text-lightestGray transition-colors duration-200 transform bg-primaryLight rounded-full hover:bg-primary md:mx-2 md-w-auto" >Random</Link>
                                </div>
                                <div className="flex items-center py-2 -mx-1 md:mx-0">
                                    <a href={window.location.pathname} className="nlock w-full px-3 py-2 mx-1 text-h10 font-medium leading-5 text-center hover:text-primary transition-colors duration-200 transform rounded-full md:mx-2 md-w-auto" >
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="w-8 h-auto" role="img" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel focus static className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-lightestGray divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img 
                                                src="/foddies_logo.png" 
                                                alt="logo" 
                                                className="h-8 w-auto"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:primaryLight">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">
                                            <Popover.Button as="div">
                                                <Link to="/" className={`my-1 text-h8 font-secondary font-semibold hover:text-primary ml-3 ${location.pathname === "/" ? "text-primary":""}`}>Home</Link>
                                            </Popover.Button>
                                            <Popover.Button as="div">
                                                <Link to="/categories" className={`my-1 text-h8 font-secondary font-semibold hover:text-primary ml-3 ${location.pathname === "/categories" ? "text-primary":""}`}>Categories</Link>
                                            </Popover.Button>
                                            <Popover.Button as="div">
                                                <Link to="/origins" className={`my-1 text-h8 font-secondary font-semibold hover:text-primary ml-3 ${location.pathname === "/origins" ? "text-primary":""}`}>Origins</Link>
                                            </Popover.Button>
                                        </nav>
                                    </div>
                                </div>
                                <div className="px-5 space-y-6">
                                    <div>
                                        <div className="relative">
                                            <form onSubmit={redir}>
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <SearchIcon className="h-5 w-5 text-black"/>
                                                </span>
                                                <input required={true} placeholder="Search Recipe" type="text" className=" border-2 border-darkGray w-full py-2 pl-10 pr-4 text-black rounded-full focus:outline-none" />
                                            </form>
                                        </div>
                                        <Popover.Button as="div" className="flex items-center py-2 -mx-1">
                                            <Link to='/random' className="nlock w-full px-3 py-2 mx-1 text-h10 font-medium leading-5 text-center text-lightestGray transition-colors duration-200 transform bg-primaryLight rounded-full hover:bg-primary md:mx-2 md-w-auto" >Random</Link>
                                        </Popover.Button>
                                        <div className="flex items-center py-2 -mx-1">
                                            <a href={window.location.pathname} className="nlock w-full px-3 py-2 mx-1 text-h10 font-medium leading-5 text-center hover:text-primary transition-colors duration-200 transform rounded-full md:mx-2 md-w-auto" >
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="w-8 h-auto" role="img" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Popover.Panel>

                    </Transition>
                </>
            )}
            
        </Popover>
    )
}

export default NavBar
