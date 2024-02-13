import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import Notification from '@/lib/Notification';


function Index() {
  return (
    <>
      <button onClick={() => Notification.warning('text')}>Notify !</button>
    </>
  );
}

export default Index;
