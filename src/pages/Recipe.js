import { useEffect, useState, Fragment } from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import {Transition, Dialog} from '@headlessui/react'
import {XIcon} from '@heroicons/react/outline'
import axios from 'axios'
import parse from 'html-react-parser'

const Recipe = () => {
    const location = useLocation()
    const {id} = location.state
    const [isLoaded, setLoaded] = useState(false)
    const [openIngredients, setIngredients] = useState(false)
    const [openSteps, setSteps] = useState(false)
    const [recipe, setRecipe] = useState(null)
    const history = useHistory()

    useEffect(() =>{
        if(!recipe){
            axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=07bdd2c8adcb4c73aa88d4131730ec1c`)        
            .then(res =>{
                setRecipe(res.data)
                console.log(res.data)
                setLoaded(true)
            })
        }else{
            setLoaded(true)
        }
    }, [id, recipe])
    return (
        <>
        {recipe !== null ? 
        <>
            <Transition appear={true} show={isLoaded} enter="transform transition-transform duration-700 ease-in-out" enterFrom="translate-y-full" enterTo="translate-y-0" leave="transform transition-transform duration-700 ease-in-out" leaveFrom="translate-y-0" leaveTo="translate-y-full">
            <div className="pt-16 min-h-screen bg-secondary md:pt-24">
                <div className="grid min-w-full p-4">
                    <div className="min-w-full flex justify-end">
                        <XIcon className="h-8 hover:cursor-pointer hover:text-primary" onClick={() => history.goBack()}/>
                    </div>
                    <div className="min-w-full my-2 lg:text-center">
                        <h5 className="lg:text-h2">{recipe.title}</h5>
                    </div>
                    <div className="min-w-full my-2 lg:text-center lg:px-64">
                        <p className="font-secondary text-h11">{parse(recipe.summary)}</p>
                    </div>
                    <div className="w-full flex items-center my-2 lg:justify-center lg:h-200">
                        <img className="lg:h-full lg:w-auto lg:inline lg:object-cover " src={recipe.image}  alt="" />
                    </div>
                    <div className="grid grid-cols-4 gap-x-7 my-2 lg:px-80">
                        <div className="bg-lightestGray rounded-2xl py-5 text-center">
                            <p className="text-h9 font-secondary font-semibold">{recipe.servings}</p>
                            <p className="text-h13 font-secondary font-medium">Servings</p>
                        </div>
                        <div className="bg-lightestGray rounded-2xl py-5 text-center">
                            <p className="text-h9 font-secondary font-semibold">{recipe.readyInMinutes}</p>
                            <p className="text-h13 font-secondary font-medium">Minutes</p>
                        </div>
                        <div className="bg-lightestGray rounded-2xl py-5 text-center">
                            <p className="text-h9 font-secondary font-semibold">{`${recipe.pricePerServing}`}</p>
                            <p className="text-h13 font-secondary font-medium">Price</p>
                        </div>
                        <div className="bg-lightestGray rounded-2xl py-5 text-center">
                            <p className="text-h9 font-secondary font-semibold">{recipe.spoonacularScore}</p>
                            <p className="text-h13 font-secondary font-medium">Score</p>
                        </div>
                    </div>
                    <div className="w-full my-2 text-center hidden lg:block">
                        <button onClick={() => setIngredients(true)} className="w-full py-2 focus:outline-none lg:w-2/3 lg:py-4">Ingredients</button>
                    </div>
                    <div className="w-full my-2 text-center">
                        <button onClick={() => setSteps(true)} className="w-full py-2 focus:outline-none lg:w-2/3 lg:py-4">Steps</button>
                    </div>
                    
                    <div className="min-w-full my-2 lg:hidden">
                        <h6>Ingredients</h6>
                        <table>
                            <tbody>
                                {
                                    recipe.extendedIngredients.map(ingredient => (
                                        <tr key={ingredient.id}>
                                            <td><input type="checkbox"/></td>
                                            <td className="capitalize">{ingredient.name}</td>
                                            <td>{ingredient.measures.metric.amount} {ingredient.measures.metric.unitShort}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </Transition>

            <Transition appear show={openIngredients} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => setIngredients(false)}>
                    <div className="min-h-screen px-4 text-center">
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50"/>
                        <span className="inline-block h-screen align-middle"  aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                        <div className="inline-block w-auto max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title as="h3" className="text-h6 leading-6 text-black">
                                Ingredients
                            </Dialog.Title>
                            <div className="mt-2">
                            <table className="font-secondary text-h11">
                                <tbody>
                                    {
                                        recipe.extendedIngredients.map(ingredient => (
                                            <tr key={ingredient.id}>
                                                <td><input type="checkbox"/></td>
                                                <td className="capitalize">{ingredient.name}</td>
                                                <td>{ingredient.measures.metric.amount} {ingredient.measures.metric.unitShort}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            </div>

                            <div className="mt-4 flex justify-center">
                            <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-lightestGray bg-primaryLight border border-transparent rounded-md hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={() => setIngredients(false)}>
                                Got it, thanks!
                            </button>
                            </div>
                        </div>
                        </Transition.Child>
                    </div>
                </Dialog>

            </Transition>

            <Transition appear show={openSteps} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => setSteps(false)}>
                    <div className="min-h-screen px-4 text-center">
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50"/>
                        <span className="inline-block h-screen align-middle"  aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                        <div className="inline-block w-auto max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title as="h3" className="text-h6 leading-6 text-black">
                            Steps
                            </Dialog.Title>
                            <div className="mt-2">
                            <ol className="font-secondary list-decimal px-2">
                                {
                                    Object.values(recipe.analyzedInstructions)[0].steps.map(step => (
                                        <li key={step.number} className="text-h11 font-secondary">{step.step}</li>
                                    ))
                                }
                            </ol>
                            </div>

                            <div className="mt-4">
                            <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-lightestGray bg-primaryLight border border-transparent rounded-md hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={() => setSteps(false)}>
                                Got it, thanks!
                            </button>
                            </div>
                        </div>
                        </Transition.Child>
                    </div>
                </Dialog>

            </Transition>
        </>
        : ''}
        </>
    )
}

export default Recipe
