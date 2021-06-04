import React from 'react'
import {useLocation, Link} from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {Transition} from '@headlessui/react'
import queryString from 'query-string'

const Search = () => {
    const values = queryString.parse(useLocation().search)
    const [recipes, setRecipes] = useState()
    const [isLoaded, setLoaded] = useState(false)
    useEffect(() =>{
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${values.q}&apiKey=c8a9f32889154df290af379a63ceceee&number=30`)        
        .then(res =>{
            setRecipes(res.data)
            setLoaded(true)
            console.log('Hello')
        })
    }, [values.q])
    return (
        <div className="min-h-screen max-w-screen pt-28 lg:pt-32">
        <Transition appear={true} show={isLoaded} enter="transform transition-transform duration-700 ease-in-out" enterFrom="translate-y-full" enterTo="translate-y-0" leave="transform transition-transform duration-700 ease-in-out" leaveFrom="translate-y-0" leaveTo="translate-y-full">
            <div className="min-h-screen w-full bg-secondary lg:px-32 lg:pt-12">
                <div className="col-span-2 pl-6 capitalize border-b border-black">
                    <h4>Search</h4>
                    <div className="flex justify-between items-end">
                        <p className="font-secondary text-h9">{values.q}</p>
                        {
                            typeof(recipes) !== 'undefined' && recipes !== null ?
                            <p className="font-secondary text-h9">({recipes.number} Results)</p>:
                            ''
                        }
                    </div>
                </div>
                {
                typeof(recipes) !== 'undefined' && recipes !== null ?
                    <div className="grid grid-cols-2 mt-4 lg:grid-cols-3">
                        {recipes.results.map((recipe) =>(
                            <div key={recipe.id} className="flex flex-col justify-center items-center my-4">
                                <Link to={{pathname: "/recipe", state: {id: recipe.id}}} className="text-center flex flex-col items-center transition-transform transform duration-400 ease-in-out hover:scale-105 hover:text-primary">
                                    <div className="h-32 rounded-2xl overflow-hidden w-40 flex justify-center items-center xl:h-64 xl:w-80 shadow-xl">
                                        <img src={recipe.image} alt={recipe.title} className="h-full w-auto inline object-cover" />
                                    </div>
                                    <div className="h-18 overflow-ellipsis w-full">
                                        <p className="lg:text-h8 text-h10 font-secondary capitalize overflow-ellipsis">{recipe.title}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                : ''
                }  
            </div>
        </Transition>
    </div>
    )
}

export default Search
