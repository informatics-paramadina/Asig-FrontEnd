import React from 'react'

export default function Schedule() {
    return (
        <div className="container mx-auto w-4/5">
            <div className="flex justify-start w-auto">
                <h2 className="text-2xl font-semibold text-purple-700 my-10">Gaming Gear</h2>
            </div>
            <div className="grid grid-rows-3 grid-cols-8 gap-5">
                <div className="row-span-3 col-span-4">
                    <img src="/images/content/game-gear-1.jpg" className="object-cover" alt="" />
                    <div className="mt-4">
                        <h3 className="text-white font-medium text-xl my-3">Gaming Combat Equipment that you must have to become a professional gamer</h3>
                        <p className="text-gray-500">it doesnt feel like the year-end holidays have arrived, if people usually spedn taht time traveling</p>
                    </div>
                </div>
                <div className="row-span-1 col-span-2">
                    <img src="/images/content/game-gear-3.jpg" className="object-cover" alt="" />
                    <div className="mt-4">
                        <h3 className="text-white font-teal text-lg my-3">The Most Powerfull CPU the Specifications</h3>
                    </div>
                </div>
                <div className="row-span-1 col-span-2">
                    <img src="/images/content/game-gear-2.jpg" className="object-cover" alt="" />
                    <div className="mt-4">
                        <h3 className="text-white font-teal text-lg my-3">The Newest Type of Joysctick</h3>
                    </div>
                </div>
                <div className="row-span-1 col-span-2">
                    <img src="/images/content/game-gear-4.jpg" className="object-cover" alt="" />
                    <div className="mt-4">
                        <h3 className="text-white font-teal text-lg my-3">RGB Color and Wireless Mechanical Keyboard</h3>
                    </div>
                </div>
                <div className="row-span-1 col-span-2">
                    <img src="/images/content/game-gear-5.jpg" className="object-cover" alt="" />
                    <div className="mt-4">
                        <h3 className="text-white font-teal text-lg my-3">Experience Using a Headset for Gaming</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
