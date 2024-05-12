import React from 'react';
import { Container } from 'react-bootstrap';
import { GoToTopButton } from '../GoToTopButton/GoToTopButton';

export const Coupon = () => {
  const coupon = `${process.env.PUBLIC_URL}/images/coupon2024.png`;
  return (
    <Container fluid className="bg-mint text-center" id="coupon">
      <Container fluid className="p-5 pb-0 mb-2">
        <img
          src={coupon}
          alt="$10 off first time client coupon"
          className="img-fluid img-shadow"
          id="couponImg"
        />
      </Container>
      <p className="secondaryText px-4">
        Show this coupon to get $10 off your first session! First time customers
        only.
      </p>
      <GoToTopButton />
    </Container>
  );
};
