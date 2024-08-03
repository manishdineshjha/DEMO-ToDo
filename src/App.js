import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chatbot from './component/ChatBot/Chatbot';



function App() {
  

  return (
    <>
      <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        <div className='container py-5'>
          <h1 className='text-center mb-4' style={{ color: '#343a40' }}>Chat Application</h1>
          <Chatbot/>
        </div>
      </div>
    </>
  );
}

export default App;
