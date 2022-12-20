import React from 'react'

const Index = ({ readNot, setNotificationDetails }) => {

  const handleIsRead = (id) => {
    setNotificationDetails((prev)=> {
      return prev.map(item => {
          return {...item, read:true}
      })
    })
  }

  return (
    <div className='flex items-center justify-between pb-6 pt-4 flex-wrap'>
     <div className='flex items-center flex-wrap'>
      <h2 className='font-bold text-2xl mr-2'>Notifications</h2>
      <span className='bg-sky-800 py-[1px] px-[13px] rounded-[8px] text-white text-[18px] font-bold'>
        {readNot.length}
      </span>
     </div>
     <small onClick={handleIsRead} className='text-gray-500 font-semibold text-[15px] cursor-pointer hover:text-blue-900'>Mark all as read</small>
    </div>
  )
}

export default Index