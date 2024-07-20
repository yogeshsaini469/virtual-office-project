import Head from 'next/head'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


export default function Hero() {
    return (
        <div className="min-h-88vh hero-section flex justify-center items-center">
            <div className="container mx-auto px-0 sm:px-6 lg:px-8">
                <Head>
                    <title>Discover the Ultimate Workspace Solution</title>
                    <meta name="description" content="Find your perfect workspace, from a single desk to a whole building." />
                </Head>
                <main className="container mx-auto px-4 py-8 max-w-5xl text-white">
                    <p className="text-center mb-4">
                        From a single desk to a whole building. The choice is yours.
                    </p>
                    <h1 className="text-3xl md:text-4xl text-center mb-8 font-medium">
                        Discover the Ultimate Workspace Solution
                    </h1>
                    <div className="bg-white rounded-2xl shadow-md p-4 mb-8  relative m-auto search-bar lg:w-2/3">
                        <form className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Search your city"
                                className="flex-grow p-2 border rounded"
                            />
                            <a href="#" className="underline text-blue-500 text-sm mt-2 block absolute right-[180px] bottom-[34px]">
                                Search Nearby
                            </a>
                            <button className="bg-blue-500 text-white py-4 text-sm px-6 rounded flex items-center justify-center">
                                <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                                SEARCH
                            </button>
                        </form>
                    </div>
                    <div className='mx-auto lg:w-2/3'>
                        <h2 className="text-xl font-semibold mb-4 ps-4">Trending cities</h2>
                        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {[
                                { name: 'New Delhi', image: '/image 1.png' },
                                { name: 'Noida', image: '/Rectangle 2.png' },
                                { name: 'Bangalore', image: '/bangalore 1.png' },
                                { name: 'Mumbai', image: '/image 3.png' },
                                { name: 'Hyderabad', image: '/image 2.png' },
                                { name: 'Chennai', image: '/image 3.png' }
                            ].map((city) => (
                                <div key={city.name} className="flex flex-col items-center ">
                                    <img src={city.image} alt={city.name} className="w-16 h-16 mb-2 bg-white rounded p-2" />
                                    <span className="text-sm">{city.name}</span>
                                </div>
                            ))}
                        </div>


                    </div>
                </main>
            </div>
        </div>

    )
}