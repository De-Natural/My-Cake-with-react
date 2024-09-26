import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/comments.css';
import Selection from './Selection';

function Comments() {
  const [text, setText] = useState('');
  const navigate = useNavigate(); 

  // Handle send button click
  const handleSendClick = () => {
    alert('Thanks for your comments, we will get back to you as soon as possible');
    setText('');
  };

  // Handle cancel button click
  const handleCancelClick = () => {
    navigate('/dashboard'); 
  };

  return (
    <div className='comments'>
      <h1>Feel free to tell us what you think</h1>
      <textarea
        placeholder='Add your reviews'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="below">
        <button onClick={handleCancelClick} id='butt'>Cancel</button> 
        <button onClick={handleSendClick} id='btn'>Send</button> 
      </div>

      <Selection />
    </div>
  );
}

export default Comments;
