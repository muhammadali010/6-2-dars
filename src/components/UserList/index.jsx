import React from 'react';
import User from '../User';
import data from '../../assets/data.json';
import '../../../src/index.css';

const UserList = () => (
  <div className="container">
    {data.map(userData => (
      <User key={userData.id} data={userData} />
    ))}
  </div>
);

export default UserList;
