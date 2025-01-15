import React from 'react'
import HeroPhoto from './Assests/Pizza PNG -.jpeg'
import Cards from './Cards'
import Qualitysec from './Qualitysec'

function Heropage() {
    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                                    Delicious Pizza Delight
                                </h2>

                                <p className="mt-4 text-gray-700">
                                    Enjoy our exquisite pizza with fresh cherry tomatoes, basil leaves, melted cheese, and savory pepperoni on a golden-brown crust. Experience the ultimate pizza indulgence today!
                                </p>
                            </div>
                        </div>

                        <div>
                            <img
                                src={HeroPhoto}
                                className="rounded"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Cards/>
            <Qualitysec/>
        </>
    )
}

export default Heropage
