import React from 'react'
import { IoAdd } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='mt-20 p-10 flex flex-wrap gap-8 justify-center'>
        
      <Link to="/managecategories" className=' border flex-col  w-44 px-2 text-center flex items-center justify-center text-lg rounded-md h-24'> <span>Manage Categories</span></Link>
      <Link to="" className='border flex-col  w-44 px-2 text-center flex items-center justify-center text-lg rounded-md h-24'> <span>Manage Projects</span></Link>
      
    </div>
  )
}

export default Dashboard
