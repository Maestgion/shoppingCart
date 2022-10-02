import React from 'react'
import {GrFormAdd, GrFormSubtract} from "react-icons/gr"

const ShopCard = ({title, price, desc, img}) => {
  return (
    <>
        <div className='w-[20vw] h-[50vh] border-2 border-black '>
            {/* img */}
            <div >
               <img src={img} alt={img} /> 
            </div>

            {/* desc */}


            <div className='flex flex-col gap-4 p-4'>
                {/* title */}


                <div>
                    <p className='font-bold text-xl'>{title}</p>
                </div>


                {/* details */}
                <div className="text-base">
                    <p>{desc}</p>
                </div>


                {/* price and quantity */}
                <div className='flex justify-between text-xl font-bold'>
                    <div>{price}</div>
                    <div className='flex gap-2'>
                    <button>
                            <GrFormSubtract/>
                        </button>
                        <p>
                            0
                        </p>

                        <button>
                            <GrFormAdd/>
                        </button>
                    </div>
                </div>


            </div>
            
        
        </div>
    </>
  )
}

export default ShopCard