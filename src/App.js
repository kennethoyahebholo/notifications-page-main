import './App.css';
import NotificationHead from './components/NotificationHead'
import NotificationBody from './components/NotificationBody'
import icon from "./assets/images/avatar-mark-webber.webp"
import icon1 from "./assets/images/avatar-angela-gray.webp"
import icon2 from "./assets/images/avatar-jacob-thompson.webp"
import icon3 from "./assets/images/avatar-rizky-hasanuddin.webp"
import icon4 from "./assets/images/avatar-kimberly-smith.webp"
import icon5 from "./assets/images/avatar-nathan-peterson.webp"
import icon6 from "./assets/images/avatar-anna-kim.webp"
import likedImg from "./assets/images/image-chess.webp"
import { useEffect, useState } from 'react';

function App() {

  const [notificationDetails, setNotificationDetails] = useState([
  {
   id: 1,
   profilePicture: icon,
   name: 'Mark Webbar',
   activity: 'reacted to your recent post',
   message: 'My first tournament today!',
   time: '1m',
   read: false,
   messageContent: ""
  },

  {
   id: 2,
   profilePicture: icon1,
   name: 'Angela Gray',
   activity: 'followed you',
   message: '',
   time: '5m',
   read: false,
   messageContent: ""
  },

  {
   id: 3,
   profilePicture: icon2,
   name: 'Jacob Thompson',
   activity: 'has joined your group',
   message: 'Chess Club',
   time: '1 day',
   read: false,
   messageContent: ""
  },

  {
   id: 4,
   profilePicture: icon3,
   name: 'Rikzy Hasannuddin',
   activity: 'sent you a private message',
   message: '',
   time: '5 days',
   read: true,
   messageContent: `Lorem ipsum dolor sit ame`
  },

  {
   id: 5,
   profilePicture: icon4,
   name: 'Kimberly Smith',
   activity: 'commented on your picture',
   message: '',
   likedImg: likedImg,
   time: '1 week',
   read: true,
   messageContent: ""
  },

  {
   id: 6,
   profilePicture: icon5,
   name: 'Nathan Peterson',
   activity: 'reacted to your recent post',
   message: '5 end-game strategies to increase your win rate',
   time: '2 weeks',
   read: true,
   messageContent: ""
  },

  {
   id: 7,
   profilePicture: icon6,
   name: 'Anna Kim',
   activity: 'left the group',
   message: 'Chess Club',
   time: '2 weeks',
   read: true,
   messageContent: ""
  },
 ])

 const readNot = notificationDetails.filter((nots) => !nots.read)

  return (
    <div className='App md:flex md:items-center md:justify-center md:py-[5rem]'>
      <div className='px-5 py-5 max-w-[70rem] bg-white md:rounded-[16px] md:px-8 md:shadow-lg'>
      <NotificationHead readNot={readNot} NotificationDetails={notificationDetails} setNotificationDetails={setNotificationDetails}/>
      <NotificationBody NotificationDetails={notificationDetails} setNotificationDetails={setNotificationDetails}/>
      </div>
    </div>
  );
}

export default App;
