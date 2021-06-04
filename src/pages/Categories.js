import {Link} from 'react-router-dom'
import {Transition} from '@headlessui/react'
import {useState, useEffect} from 'react'

const Categories = () => {
    const categories = [
        {
            'name': 'main course',
            'image': 'https://cdnimg.webstaurantstore.com/uploads/blog/2020/10/12course_whatis.jpg'
        },
        {
            'name': 'bread',
            'image': 'https://www.cookingclassy.com/wp-content/uploads/2020/04/bread-recipe-1-500x500.jpg'
        },
        {
            'name': 'marinade',
            'image': 'https://assets.wsimgs.com/wsimgs/ab/images/dp/recipe/202118/0004/img19l.jpg'
        },
        {
            'name': 'side dish',
            'image': 'https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/korean-side-dishes-bba62f.jpg'
        },
        {
            'name': 'breakfast',
            'image': 'https://simply-delicious-food.com/wp-content/uploads/2018/10/breakfast-board-500x500.jpg'
        },
        {
            'name': 'fingerfood',
            'image': 'https://i.pinimg.com/originals/17/80/ae/1780aecc71d36aefe3396268940ba6fd.jpg'
        },
        {
            'name': 'dessert',
            'image': 'https://thebakingexplorer.com/wp-content/uploads/2019/03/IMG_2228-Copy-500x500.jpg'
        },
        {
            'name': 'soup',
            'image': 'https://myfoodstory.com/wp-content/uploads/2017/12/Homemade-Creamy-Vegetable-Soup-2-1-500x500.jpg'
        },
        {
            'name': 'snack',
            'image': 'https://sipandspice.com/wp-content/uploads/2019/07/Epic-Snack-Dinner-Sip-and-Spice-3-500x500.jpg'
        },
        {
            'name': 'appetizer',
            'image': 'https://amandascookin.com/wp-content/uploads/2010/11/mexican-appetizers-quesados-SQ-500x500.jpg'
        },
        {
            'name': 'beverage',
            'image': 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/w-punta-de-mita-piwiwi-cocktail-preview-1548176063.jpeg?crop=1xw:1xh;center,top&resize=500:*'
        },
        {
            'name': 'drink',
            'image': 'https://grandbaby-cakes.com/wp-content/uploads/2019/12/New-Orleans-Hurricane-Drink-2-500x500.jpg'
        },
        {
            'name': 'salad',
            'image': 'https://www.twopeasandtheirpod.com/wp-content/uploads/2019/06/Easy-Green-Salad-4-500x500.jpg'
        },
        {
            'name': 'sauce',
            'image': 'https://www.budgetbytes.com/wp-content/uploads/2011/08/Thick-Rich-Pizza-Sauce-finished-500x500.jpg'
        },
    ]

    const [isLoaded, setLoaded] = useState(false);
    useEffect(() =>{
        setLoaded(true)
    }, [])
    return (
        <div className="min-h-screen max-w-screen pt-28 lg:pt-32">
            <Transition appear={true} show={isLoaded} enter="transform transition-transform duration-700 ease-in-out" enterFrom="translate-y-full" enterTo="translate-y-0" leave="transform transition-transform duration-700 ease-in-out" leaveFrom="translate-y-0" leaveTo="translate-y-full">
                <div className="min-h-screen w-full bg-secondary lg:px-32 lg:pt-12">
                    <div className="col-span-2 pl-6 border-black border-b">
                        <h4>Categories</h4>
                    </div>
                    <div className="grid grid-cols-2 mt-4 lg:grid-cols-3">
                        {categories.map((category, i) =>(
                            <div key={i} className="flex flex-col justify-center items-center my-4">
                                <Link to={`/category/${category.name}`} className="text-center transition-transform transform duration-400 ease-in-out hover:scale-105 hover:text-primary">
                                    <img src={category.image} alt={category.name} className="max-h-40 rounded-full lg:max-h-64 shadow-xl" />
                                    <p className="text-h8 font-secondary capitalize ">{category.name}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Transition>
        </div>
    )
}

export default Categories
