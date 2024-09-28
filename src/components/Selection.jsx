import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Selection() {
  const navigate = useNavigate();
  const [likes, setLikes] = useState(0);

  // Function to navigate to Dashboard
  const goToDashboard = () => {
    navigate('/dashboard');
  };

  // Function to navigate to Juice component
  const goToJuice = () => {
    navigate('/juice');
  };

  // Function to navigate to Comments component
  const goToComments = () => {
    navigate('/');
  };

  // Function to increment likes
  const incrementLikes = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  return (
    <div className="selection">
      <div className="icons" id="cake" onClick={goToDashboard}> 
        <img src="/src/assets/material-symbols_cake-outline cake-icon.png" alt="" style={{height: '30px', width: '30px', cursor: 'pointer'}} />
      </div>
      <div className="icons" id="drink" onClick={goToJuice}>
        <img src="/src/assets/Vector-drink-icon.png" alt="" style={{height: '30px', width: '30px', cursor: 'pointer'}} />
      </div>
      <div className="icons" id="comment" onClick={goToComments}>
        <img src="/src/assets/Vector-chat-icon.png" alt="" style={{height: '30px', width: '30px', cursor: 'pointer'}} />
      </div>
      <div className="icons" id="likes" onClick={incrementLikes} style={{ position: 'relative' }}>
        <img src="/src/assets/heroicons-outline_thumb-up thumbUp-icon.png" alt="" style={{height: '30px', width: '30px', cursor: 'pointer'}} />
        {likes > 0 && (
          <span style={{
            position: 'absolute',
            top: '-2px',
            right: '0px',
            background: 'blue',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 5px',
            fontSize: '12px'
          }}>
            {likes}
          </span>
        )}
      </div>
    </div>
  );
}

export default Selection;
