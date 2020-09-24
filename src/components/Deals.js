import React, { useState, useEffect } from 'react';

export default function Deals (props) {
  return (
    <div>
    {
      props.deals.map( deal =>{
        return (
          <div key={deal.id} className="deal">
            <h3>{deal.title}</h3>
             <p> {deal.content}</p>
             <small>{deal.author}</small>
          </div>
        )
      })
    }
  </div>
  )
};