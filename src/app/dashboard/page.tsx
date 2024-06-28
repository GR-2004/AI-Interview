import React from 'react'
import Header from './_components/Header'
import AddNewInterview from './_components/AddNewInterview'

const DashboardPage = () => {
  return (
    <div>
      <Header/>
      <div className="mx-5 md:mx-20 lg:mx-36">
        <div className='p-5'>
        <h2 className='font-bold text-2xl'>Dashboard</h2>
        <h2 className='text-gray-500'>Create and Start your AI Mockup Interview</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
          <AddNewInterview/>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default DashboardPage
