import React from 'react'

const Details = ({ name, profilePicture, message, activity, time, likedImg, read, iD, messageContent, setNotificationDetails}) => {

  const handleIsRead = (id) => {
    setNotificationDetails((prev)=> {
      return prev.map(item => {
        if(item.id === id){
          return {...item, read:!item.read}
        }else{
          return { ...item };
        }
      })
    })
  }
  return (
    <>
    <div onClick={(id) => handleIsRead(iD)} className={`flex items-center ${read? '' : 'bg-slate-400/10'} py-4 px-3 rounded-[8px] flex-wrap mb-[12px] justify-between cursor-pointer`}>
     <div className='flex items-center flex-wrap mb-[12px] md:mb-0'>
      <div className='max-w-[50px] mr-6'>
      <img src={profilePicture} alt="" />
     </div>
     <div className='max-w-[500px]'>
      <div className='flex items-center justify-between'>
      <h6 className='font-bold text-1xl hover:text-blue-900 mr-1'>{name} <small className='font-semibold text-gray-500 text-[14px]'>{activity}</small> <span className='font-bold text-gray-500 text-[14px] hover:text-blue-900'>{message}</span>{" "}</h6>
      {!read && <div className='h-[5px] w-[5px] rounded-full bg-red-500 object-contain'></div>}
      </div>
      <span className='text-gray-400 text-[14px]'>{time} ago</span>
     </div>
     </div>
       {likedImg && <div className='max-w-[50px] mr-6'>
      <img src={likedImg} alt="" />
     </div>}      
     </div>

     {messageContent && <div className={`flex justify-end py-4 px-3 -mt-[30px] cursor-pointer`}><span className={`flex justify-start border border-inherit py-4 px-3 rounded-[8px] flex-wrap w-[31rem] text-[15px] text-gray-500 hover:bg-slate-400/30`}>{messageContent}</span></div> }

     
    </>
  )
}

export default Details