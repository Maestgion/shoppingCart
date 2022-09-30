import React from 'react'

const shopCard = ({title, desc, price}) => {
  return (
    <>
        <div className='flex flex-col gap-10 items-center'>
            {/* img */}
            <div></div>

            {/* desc */}
            <div className='flex flex-col gap-8'>
                {/* title */}


                <div>
                    <p className='font-bold text-xl'>{title}</p>
                </div>


                {/* details */}
                <div>
                    <p>{desc}</p>
                </div>


                {/* price and quantity */}
                <div>
                    <div>{price}</div>
                    <div></div>
                </div>


            </div>
            
        
        </div>
    </>
  )
}

export default shopCard