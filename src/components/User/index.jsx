import React from 'react';
import Address from '../Adress';
import Car from '../Car';
import '../../index.css'

const User = ({ data }) => (
  <div className="card">
    <img src={data.image} alt={`${data.firstName} ${data.lastName}`} />
    <h2>{data.firstName} {data.lastName}</h2>
    <p><strong>Phone:</strong> {data.phone}</p>
    <p><strong>Email:</strong> {data.email}</p>
    
    <Address address={data.address} />
    <Car cars={data.cars} />
  </div>
);

export default User;
