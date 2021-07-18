import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ExpData() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC career paths !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/devops.png'
              text='Explore the DevOps journey'
              label='DevOps '
              path='/devops'
            />
            <CardItem
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
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExpData;
