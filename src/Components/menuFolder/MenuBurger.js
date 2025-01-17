import React from 'react'
import MenuCard from './MenuCard'

function MenuBurger() {
    return (

        <>
            <header className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our burgers</h1>

                            <p className="mt-1.5 text-sm text-gray-500">
                            Our burgers are juicy, flavorful, and topped with the freshest ingredients.
                            </p>
                        </div>
                    </div>
            </header>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8" style={{ width: "100%", justifyContent: "space-evenly" }}>
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
            </div>
        </>
    )
}

export default MenuBurger
