import React from 'react';

const Subscription = () => {

  let subscriptionStyles = {
    offerStyle: {
      backgroundColor: 'yellow',
      color: 'red',
      padding: '10px',
      fontSize: '20px'
    },
    couponStyle: {
      backgroundColor: 'green',
      color: '#fff',
      padding: '10px',
      fontSize: '20px'
    }
  }

  return (
    <div>
      <h4 className="info">You are an Active Subscriber</h4>
      {/*  Inline Styling */}
      <p style={{color: 'white', backgroundColor: 'red'}}>Your Subscription Ends: 20/May/2021</p>
      
      {/* Internal Styling */}
      <p style={subscriptionStyles.offerStyle}>You can renew at 50% Discount - Offer ends today</p>
      <p style={subscriptionStyles.couponStyle}>Use COUPON: OFF50</p>
    </div>
  )
}

export default Subscription;
