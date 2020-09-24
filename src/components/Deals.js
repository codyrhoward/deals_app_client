import React, { useState, useEffect } from 'react';

export default function Deals (props) {
  return (
    <div>
    {
      props.deals.map( deal =>{
        return (
          <div key={deal.id} className="deal">
            <h3>{deal.restaurant}</h3>
             <p> {deal.category}</p>
             <small>{deal.content}</small>
          </div>
        )
      })
    }
  </div>
  )
};