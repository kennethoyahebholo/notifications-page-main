import React from 'react'
import Details from './Details'

const index = ({ NotificationDetails, setNotificationDetails }) => {
  return (
   <>
   {NotificationDetails.map((not) => {
    return (
     <Details key={not.id} iD={not.id} {...not} setNotificationDetails={setNotificationDetails}/>
    )
   })}
   </>    
   )
}

export default index