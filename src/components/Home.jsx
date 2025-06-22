import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Prompt from './Prompt'


const Home = () => {

    const [isLoading, setIsLoading] = useState(false)

  return (
    <div className='flex items-start'>
        {/* Sidebar */}
        <Sidebar/>
        {/* Prompt */}
        <Prompt isLoading={isLoading} setIsLoading={setIsLoading}/>
    </div>
  )
}

export default Home