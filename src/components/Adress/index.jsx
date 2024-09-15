import React from 'react';

const Address = ({ address }) => (
  <p><strong>Address:</strong> {address.region}, {address.zip}</p>
);

export default Address;
