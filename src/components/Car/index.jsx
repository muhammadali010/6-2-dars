import React from 'react';

const Car = ({ cars }) => (
  <p><strong>Cars:</strong> {cars.length > 0 ? cars.join(', ') : 'No cars'}</p>
);

export default Car;
