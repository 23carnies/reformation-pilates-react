import React from 'react';
import { Container, Card } from 'react-bootstrap';
import '../../index.css';

export const Instructors = () => {
  const katyImg = `${process.env.PUBLIC_URL}/images/Katy.jpg`; // Import the 'logo' image
  const badge = `${process.env.PUBLIC_URL}/images/badge-8067.png`; // Import the 'logo' image

  const katy = {
    image: katyImg,
    title: 'Katy Roelle',
    text: 'Nationally Certified Pilates Teacher, TRX Certified, GRID Trigger Point Certified, Barre Above Certified, PMA Member',
  };
  const badgeCard = {
    image: badge,
    title: 'Nationally Certified Pilates Teacher',
    text: 'TRX Certified',
    text2: 'GRID Trigger Point Certified',
    text3: 'Barre Above Certified',
    text4: 'PMA Member',
  };
  console.log(katy);
  return (
    <Container fluid className="bg-mint fullHeight m-2 p-2" id="instructors">
      <h2 className="section-header">Instructors</h2>
      <div className="d-flex flex-wrap-sm">
        <Card style={{ width: '30rem' }} className="p-1 m-3">
          <Card.Img variant="top" src={katy.image} />
          <Card.Body>
            <Card.Title>{katy.title}</Card.Title>
            <Card.Text>{katy.text}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '30rem' }} className="p-1 m-3">
          <Card.Img variant="top" src={badgeCard.image} />
          <Card.Body>
            <Card.Title>{badgeCard.title}</Card.Title>
            <Card.Text>{badgeCard.text}</Card.Text>
            <Card.Text>{badgeCard.text2}</Card.Text>
            <Card.Text>{badgeCard.text3}</Card.Text>
            <Card.Text>{badgeCard.text4}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <p className="text-left">
        After earning her BFA from FSU in 1985, Ms. Roelle studied the Pilates
        method for 10 years in California while pursuing a career in dance.
        Katy&#39;s experience as a professional ballet dancer/choreographer led
        her to touring the south pacific and the orient with Princess Cruise
        Lines. Katy has been a consultant for amateur and professional athletes
        across the United States.
      </p>
      <p className="text-left">
        Her foundation and focus is in classical Pilates. Extensive
        understanding of biomechanics and functional movement, along with years
        of teaching experience, enables her to develop and teach techniques used
        in injury prevention and rehabilitation, sport-specific, geriatric, and
        special population training.
      </p>
      <p className="text-left">
        Katy has been creating and spearheading Pilates teacher training courses
        for nearly a decade in high-end health clubs and private Pilates
        studios, such as:
      </p>
      <ul className="indent">
        <li>Golden Door Spa in Escondido, CA</li>
        <li>The Concourse Athletic Club</li>
        <li>Athletic Club Northeast</li>
        <li>Peachtree Center Athletic Club</li>
        <li>Body Awareness Studio</li>
        <li>Body-N-Balance</li>
      </ul>
      <p className="text-left">
        Reformation Pilates trained instructors currently teach in Georgia,
        Tennessee, Texas, Florida, Colorado, California, Brazil, Italy and Peru
        at LA Fitness&#39;, YMCAs, Churches, Pilates studios, and dance studios.
      </p>
      <p className="text-left">
        Ms. Roelle currently dances with Lee Harper Dancers, and the Atlanta
        Symphony Orchestra.
      </p>
      <h2>Reformation Pilates Studio Staff</h2>
      <p>
        All instructors have participated in an in depth formal Pilates training
        program including the traditional method of Pilates as well as the
        contemporary approach. A minimum of 3 years of Pilates experience
        combined with anatomy of movement and apprenticeship under the
        Reformation style of Pilates taught by Katy Roelle.
      </p>
      <h2>Teacher Training & Continuing Education</h2>
      <p>
        Pilates is a highly disciplined and analytical method of exercise.
        Because of the form-intensive nature of the exercises, it is important
        to learn from and apprentice under trainers who are skilled in the
        Joseph Pilates&#39; original method, and who understand functional
        anatomy and the biomechanics of exercise. Reformation Pilates Studio is
        pleased to provide such a program. Group fitness instructors, personal
        trainers, yoga instructors and Pilates students are all great candidates
        for Pilates certification. Call for information or to be placed on the
        waitlist. <br /> <i className="fa fa-phone m-0"></i>{' '}
        <a href="tel:+17704010203">770-401-0203</a> Or contact us below.
      </p>
      <img
        src={`${process.env.PUBLIC_URL}/images/duoVreformer.jpg`}
        className="img-fluid"
        alt="Pilates class and instructor"
      />
    </Container>
  );
};
