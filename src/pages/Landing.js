import {SearchIcon} from '@heroicons/react/outline'
import {useHistory, Link} from 'react-router-dom'
import {Transition} from '@headlessui/react'
import {useState, useEffect} from 'react'

const Landing = () => {
    const history = useHistory()
    const [show, setShow] = useState(false)
    useEffect(() =>{
        setShow(true)
    }, [])
    const redir = (e) =>{
        e.preventDefault();
        history.push(`/search?q=${e.target[0].value}`)
        e.target[0].value = ''
    }
    return (
            <Transition as="div" show={show} appear={true} enter="transition-opacity duration-1000" enterFrom="opacity-0" enterTo="opacity-100" className="min-w-screen min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-center text-h3 md:text-h1">Find a Recipe</h1>
                <div className="mt-2 md:w-2/5 relative rounded-full shadow-sm w-11/12">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <SearchIcon className="h-5 w-5 text-black"/>
                    </span>
                    <form onSubmit={redir}>
                        <input placeholder="Search Recipe" type="text" required={true} className="py-3 pl-10 pr-4 text-black w-full rounded-full text-h8 focus:outline-none shadow-md" />
                    </form>
                </div>
                <h6 className="mt-5 font-secondary text-h9 font-semibold">or</h6>
                <Link to='/random' className="mt-5 px-4 shadow-md text-lightestGray md:text-h5 text-h8 font-secondary font-semibold px-7 py-2 rounded-full transition-colors duration-200 transform bg-primaryLight hover:bg-primary">Random</Link>
            </Transition>
    )
}

export default Landing
