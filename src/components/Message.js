import React from 'react';

export default function Message ({ message }) {

  return (
    <li className="media">
      <div>
        <a href="#">
          <img className="media-object" src={message.author.image} alt="image" />
         </a>

      </div>
      <div>
        <h4>{message.author.name}</h4>
        {message.content}
      </div>
    </li>
  );
}
