import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {Transition} from '@headlessui/react'

const Origins = () => {
    const countries = [
        {
            'name':'African',
            'flag':'https://flagpedia.net/data/flags/w580/za.png'
        },
        {
            'name':'German',
            'flag':'https://flagpedia.net/data/flags/w580/de.png'
        },
        {
            'name':'Mediterranean',
            'flag':'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Flag_of_the_Mediterranean_Sea_%28Proposal%29.png/640px-Flag_of_the_Mediterranean_Sea_%28Proposal%29.png'
        },
        {
            'name':'American',
            'flag':'https://flagpedia.net/data/flags/w580/us.png'
        },
        {
            'name':'Greeek',
            'flag':'https://flagpedia.net/data/flags/w580/gr.png'
        },
        {
            'name':'Mexican',
            'flag':'https://flagpedia.net/data/flags/w580/mx.png'
        },
        {
            'name':'British',
            'flag':'https://flagpedia.net/data/flags/w580/gb.png'
        },
        {
            'name':'Indian',
            'flag':'https://flagpedia.net/data/flags/w580/in.png'
        },
        {
            'name':'Middle Eastern',
            'flag':'https://flagpedia.net/data/flags/w580/sa.png'
        },
        {
            'name':'Cajun',
            'flag':'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Acadiana.svg/415px-Flag_of_Acadiana.svg.png'
        },
        {
            'name':'Irish',
            'flag':'https://flagpedia.net/data/flags/w580/ie.png'
        },
        {
            'name':'Nordic',
            'flag':'https://flagpedia.net/data/flags/w580/no.png'
        },
        {
            'name':'Caribbean',
            'flag':'https://flagpedia.net/data/flags/w580/do.png'
        },
        {
            'name':'Italian',
            'flag':'https://flagpedia.net/data/flags/w580/it.png'
        },
        {
            'name':'Southern',
            'flag':'https://flagpedia.net/data/flags/w580/tr.png'
        },
        {
            'name':'Chinese',
            'flag':'https://flagpedia.net/data/flags/w580/cn.png'
        },
        {
            'name':'Japanese',
            'flag':'https://flagpedia.net/data/flags/w580/jp.png'
        },
        {
            'name':'Spanish',
            'flag':'https://flagpedia.net/data/flags/w580/es.png'
        },
        {
            'name':'East European',
            'flag':'https://flagpedia.net/data/flags/w580/ua.png'
        },
        {
            'name':'Jewish',
            'flag':'https://flagpedia.net/data/flags/w580/il.png'
        },
        {
            'name':'Thai',
            'flag':'https://flagpedia.net/data/flags/w580/th.png'
        },
        {
            'name':'European',
            'flag':'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/640px-Flag_of_Europe.svg.png'
        },
        {
            'name':'Korean',
            'flag':'https://flagpedia.net/data/flags/w580/kr.png'
        },
        {
            'name':'Vietnamese',
            'flag':'https://flagpedia.net/data/flags/w580/vn.png'
        },
        {
            'name':'French',
            'flag':'https://flagpedia.net/data/flags/w580/fr.png'
        },
        {
            'name':'Latin American',
            'flag':'https://flagpedia.net/data/flags/w580/br.png'
        },
    ]

    const [isLoaded, setLoaded] = useState(false);
    useEffect(() =>{
        setLoaded(true)
    }, [])

    return (
        <div className="min-h-screen max-w-screen pt-28 lg:pt-32">
            <Transition appear={true} show={isLoaded} enter="transform transition-transform duration-700 ease-in-out" enterFrom="translate-y-full" enterTo="translate-y-0" leaveFrom="translate-y-0" leaveTo="translate-y-full">
                <div className="min-h-screen w-full bg-secondary lg:px-32 lg:pt-12">
                    <div className="col-span-2 pl-6 border-b border-black">
                        <h4>Origins</h4>
                    </div>
                    <div className="grid grid-cols-2 mt-4 lg:grid-cols-3">
                        {countries.map((country, i) =>(
                            <div key={i} className="flex flex-col justify-center items-center my-4">
                                <Link to={`/origin/${country.name}`} className="text-center transition-transform transform duration-400 ease-in-out hover:scale-105 hover:text-primary">
                                    <div className="h-36 rounded-full overflow-hidden w-36 flex justify-center items-center lg:h-64 lg:w-64 shadow-xl">
                                        <img src={country.flag} alt={country.name} className="h-full w-auto inline object-cover" />
                                    </div>
                                    <p className="text-h8 font-secondary capitalize ">{country.name}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Transition>
        </div>
    )
}

export default Origins
