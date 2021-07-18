import React from 'react';
import './aboutus.css';
import CardItem from './about';

function Aboutus() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC career paths !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/amitsingh.jpg'
              text='My name is Amit Singh, And i have around 5 years of experience in IT as a full stack engineer. 
                    I am a graduate from Mumbai University and i love  Coding and playing Basketball'
              label='Amit Singh  '
              path='/devops'
            />
            {/* <CardItem
              src='images/itmonitoring.png'
              text='IT Monitoring Eye'
              label='Monitoring'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/full stack.png'
              text='Explore the hell '
              label='Full-Stack Developer'
              path='/services'
            />
            <CardItem
              src='images/frontend.png'
              text='Making a beautiful website, that everyone loves'
              label='FrontEnd Developer'
              path='/products'
            />
            <CardItem
              src='images/backend.png'
              text='Broker between server and client , which make a data transfer deal'
              label='BackEnd Developer'
              path='/sign-up'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
