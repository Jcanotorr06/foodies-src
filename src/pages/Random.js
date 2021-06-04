import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Transition} from '@headlessui/react'
import axios from 'axios'

const Random = () => {
    const [recipes, setRecipes] = useState()
    const [isLoaded, setLoaded] = useState(false)
    useEffect(() =>{
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=9e6530ab942648f28cda4a68187a6133&number=30`)        
        .then(res =>{
            setRecipes(res.data.recipes)
            setLoaded(true)
        }) 
    }, [])
    return (
        <div className="min-h-screen max-w-screen pt-28 lg:pt-32">
        <Transition appear={true} show={isLoaded} enter="transform transition-transform duration-700 ease-in-out" enterFrom="translate-y-full" enterTo="translate-y-0" leave="transform transition-transform duration-700 ease-in-out" leaveFrom="translate-y-0" leaveTo="translate-y-full">
            <div className="min-h-screen w-full bg-secondary lg:px-32 lg:pt-12">
                <div className="col-span-2 pl-6 capitalize border-b border-black">
                    <h4>Random</h4>
                    {
                        typeof(recipes) !== 'undefined' && recipes !== null ?
                        <p className="font-secondary text-h9">(30 Results)</p>:
                        ''
                    }
                </div>
                {
                typeof(recipes) !== 'undefined' && recipes !== null ?
                    <div className="grid grid-cols-2 mt-4 lg:grid-cols-3">
                        {recipes.map((recipe) =>(
                            <div key={recipe.id} className="flex flex-col justify-center items-center my-4">
                                <Link to={{pathname: "/recipe", state: {id: recipe.id}}} className="text-center flex flex-col items-center transition-transform transform duration-400 ease-in-out hover:scale-105 hover:text-primary">
                                    <div className="h-32 rounded-2xl overflow-hidden w-40 flex justify-center items-center xl:h-64 xl:w-80 shadow-xl">
                                        <img src={recipe.image} alt={recipe.title} className="h-full w-auto inline object-cover" />
                                    </div>
                                    <div className="h-18 overflow-ellipsis w-full">
                                        <p className="lg:text-h8 text-h10 font-secondary capitalize overflow-ellipsis ">{recipe.title}</p>
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

export default Random
