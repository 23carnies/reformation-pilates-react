import React, { useMemo, useState } from 'react';
import { HomeCard } from '../../components/HomeCard/HomeCard';
import { Container } from 'react-bootstrap';

export const Cards = () => {
  const [data, setData] = useState([]);

  useMemo(() => {
    fetch(`${process.env.PUBLIC_URL}/text/data.json`)
      .then((response) => response.json())
      .then((data) => setData(data.cards));
  }, []);

  return (
    <>
      <div className="text-center py-3 bg-mint">
        <h1>Reformation Pilates Difference</h1>
      </div>
      <Container className="d-flex flex-wrap justify-content-center">
        {data.map((item) => (
          <HomeCard key={item.id} {...item} />
        ))}
      </Container>
    </>
  );
};
