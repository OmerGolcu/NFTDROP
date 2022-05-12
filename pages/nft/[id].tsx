import React from 'react'
import {useAddress, useDisconnect, useMetamask} from "@thirdweb-dev/react"

function NFTDropPage() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect()
  console.log(address)

  return (
    <div className="flex flex-col h-screen lg:grid lg:grid-cols-10">

        {/* Left Side */}
        <div className="bg-gradient-to-br from-cyan-800 to-rose-500 
        py-2 flex flex-col items-center justify-center lg:min-h-screen 
        lg:col-span-4">
            <div className="bg-gradient-to-br from-yellow-400 to-purple-600 rounded-xl p-2">
                <img
                className="w-44 object-cover rounded-xl lg:h-96 lg:w-72" 
                src="https://links.papareact.com/8sg"
                alt="la la la"
                />
            </div>

            <div className="text-center space-y-2 p-5">
              <h1 className="text-4xl font-bold text-white"> PAPAFAAM</h1>
              <h2 className="text-xl text-gray-300 ">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>

            </div>
           
        </div>
        {/* Right Side*/}
      
        <div className='flex flex-col p-12 col-span-6'>
          {/* Header */}
          <header className="flex justify-between item-center">
            <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>The{' '}<span className='font-bold underline decoration-pink-600/50'>PAPAFAM</span>{' '}NFT MARKET PLACE</h1>
            <button
            onClick={()=> address ? disconnect() : connectWithMetamask()}
            className="bg-rose-400 text-white rounded-full px-4 py-2 text-xs font-semibold
            lg:px-5 lg:py-3 lg:text-base
            ">{address ? 'Sign Out' : 'Sign In'}</button>

          </header>
          <hr className="my-4 border"/>
          {address && <p className='text-center text-sm text-rose-400 font-semibold'>You're Logged in with wallet {address.substring(0,5)}...{address.substring(address.length-5)}</p>}

          {/* Content */}
          <div className="mt-10 flex flex-1 flex-col  items-center space-y-6 lg:space-y-0 lg:justify-center text-center">
            <img
                  className="rounded-md w-80 object-cover lg:h-40 pb-10" 
                  src="https://links.papareact.com/bdy"
                  alt="la la la"
                  />
                  <h1 className=' text-3xl font-bold lg:text-4xl lg:font-extrabold'> The PAPAFAM Ape Coding Club | NFT Drop</h1>

                  <p className='pt-2 text-xl text-green-400'>13 / 21 NFT's claimed</p>
          </div>

          {/* Mint Button */}
          <button
          className='bg-red-500 w-full rounded-full h-16 text-white mt-5 font-bold text-lg '
          >Mint NFT (0.01 ETH)</button>
         
          

        </div>
    </div>
  )
}

export default NFTDropPage