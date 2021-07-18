import React from 'react';
import './UserCards.css';
import CardItem from './UserItem';

function Users() {
  return (
    <div className='cards'>
      <h1>Let me know you ?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/student.jpg'
              text='Choose career that fits'
              label='Student '
              path='/stuoptions'
            />
            <CardItem
              src='images/exp.png'
              text='Looking for career change'
              label='Experienced'
              path='/expoptions'
            />
           
          </ul>
          {/* <ul className='cards__items'>
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
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Users;
