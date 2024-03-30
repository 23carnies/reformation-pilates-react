import React from 'react';
import { Container } from 'react-bootstrap';

export const Coupon = () => {
  const coupon = `${process.env.PUBLIC_URL}/images/coupon2024.png`;
  return (
    <Container fluid className="bg-mint text-center">
      <Container fluid className='p-5 pb-0'>
        <img
          src={coupon}
          alt="$10 off first time client coupon"
          className="img-fluid img-shadow"
          width="100%"
          height="400"
        />
      </Container>
      <p className="secondaryText px-4">
        Show this coupon to get $10 off your first session! First time customers
        only.
      </p>
    </Container>
  );
};
