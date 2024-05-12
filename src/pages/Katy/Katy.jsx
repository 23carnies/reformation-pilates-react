import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Container } from 'react-bootstrap';

export const Katy = () => {
  const badge = `${process.env.PUBLIC_URL}/images/badge-8067.png`;
  const katy = `${process.env.PUBLIC_URL}/images/V.jpg`;
  const tealWater = `${process.env.PUBLIC_URL}/images/teal-water.jpeg`;
  // const badgeCard = {
  //   image: badge,
  //   title: 'Nationally Certified Pilates Teacher',
  //   text: 'TRX Certified',
  //   text2: 'GRID Trigger Point Certified',
  //   text3: 'Barre Above Certified',
  //   text4: 'PMA Member',
  // };
  return (
    <Container fluid className="bg-pink mb-5 fullHeight" id="katy">
      <h1 className="section-header">Katy Roelle</h1>
      <img src={katy} alt="Katy Roelle" />
      <div>
        <p className="text-left secondaryText my-2">
          After earning her BFA from FSU in 1985, Ms. Roelle studied the Pilates
          method for 10 years in California while pursuing a career in dance.
          Katy&#39;s experience as a professional ballet dancer/choreographer
          led her to touring the south pacific and the orient with Princess
          Cruise Lines. Katy has been a consultant for amateur and professional
          athletes across the United States.
        </p>
        <hr />
        <p className="text-left tertiaryText my-2">
          Her foundation and focus is in classical Pilates. Extensive
          understanding of biomechanics and functional movement, along with
          years of teaching experience, enables her to develop and teach
          techniques used in injury prevention and rehabilitation,
          sport-specific, geriatric, and special population training.
        </p>
      </div>
      <img src={tealWater} alt="" width="100%" height="10px" />
      <div>
        <p className="text-left secondaryText my-2">
          Katy has been creating and spearheading Pilates teacher training
          courses for nearly a decade in high-end health clubs and private
          Pilates studios, such as:
        </p>
        <ul className="indent">
          <li>Golden Door Spa in Escondido, CA</li>
          <li>The Concourse Athletic Club</li>
          <li>Athletic Club Northeast</li>
          <li>Peachtree Center Athletic Club</li>
          <li>Body Awareness Studio</li>
          <li>Body-N-Balance</li>
        </ul>
      </div>
      <div className="text-center my-3">
        <img src={badge} alt="Nationally Certified Pilates Teacher Badge" />
      </div>
      <p className="text-left tertiaryText my-2">
        Ms. Roelle currently dances with Lee Harper Dancers, and the Atlanta
        Symphony Orchestra.
      </p>
      <Footer />
    </Container>
  );
};
