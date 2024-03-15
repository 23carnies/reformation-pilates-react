import React, { useMemo, useState } from "react";
import Hero from "../../components/Hero/Hero";
import { HomeCard } from "../../components/Cards/HomeCard";
import { Container } from "react-bootstrap";

const Home = () => {
  const [data, setData] = useState([]);

  useMemo(() => {
    fetch(`${process.env.PUBLIC_URL}/text/data.json`)
      .then((response) => response.json())
      .then((data) => setData(data.cards));
  }, []);

  return (
    <>
      <Hero />

      <div class="text-center py-3">
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

export default Home;
