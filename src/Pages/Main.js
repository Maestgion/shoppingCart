import React from 'react'
import Navbar from '../Components/Navbar'
import ShopCard from '../Components/ShopCard'
import shopData from "../Apis/shopData"

const Main = () => {
  return (
    <>
        <div className='flex flex-col gap-20 pb-20'>
            
            <Navbar/>

            <div className='flex flex-wrap justify-center items-center gap-10'>

            {
              shopData.map((x)=>{
                return <ShopCard title={x.name} price={x.price} desc={x.desc} img={x.img} key={x.id} />
              
              })
            }
            </div>
           

        </div>
    </>
  )
}

export default Main