
import React from 'react'

const Balconies = () => {
    function handleChange(): void {
        
    }

    return (
        <div>
            <div>
    <div className="border-blue-200 border-2 mr-16 rounded-lg">
        <h1 className="p-1 bg-blue-100 mb-2 flex-none rounded-tr-lg rounded-tl-lg text-xs">Specify Balconies Sizes - For Example 12 x 10 ft</h1>
        <div className='ml-24 space-x-8 font-semibold flex'>
            <h1>Length</h1>
            <h1>Breadth</h1>
        </div>
        <div className="mb-4">
            <div className="mb-2">
                <div className="mb-2 flex items-center">
                    <h2 className="text-sm mb-2 mt-2 ml-1">Balconies 1</h2>
                    <div className='flex space-x-4 m-2'>
                        <input
                            type="number"
                            className="border border-gray-300 w-16 ml-2"
                            placeholder=""
                            onChange={() => handleChange()}
                        />
                        <input
                            type="number"
                            className="border border-gray-300 w-16"
                            placeholder=""
                            onChange={() => handleChange()}
                        />
                        <h2>ft</h2>
                    </div>
                </div>

                <div className="mb-2 flex items-center -mt-2">
                    <h2 className="text-sm ml-1 mb-2 mt-1">Balconies 2</h2>
                    <div className='flex space-x-4 m-2'>
                        <input
                            type="number"
                            className="border border-gray-300 w-16 ml-2"
                            placeholder=""
                            onChange={() => handleChange()}
                        />
                        <input
                            type="number"
                            className="border border-gray-300 w-16"
                            placeholder=""
                            onChange={() => handleChange()}
                        />
                        <h2>ft</h2>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
</div>

        </div>
    )
}

export default Balconies
