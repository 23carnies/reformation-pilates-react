import React from 'react';
import { Container, Card } from 'react-bootstrap';
import '../../index.css';
import { FaPhoneVolume } from 'react-icons/fa6';
import { Footer } from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

export const Instructors = () => {
  const katyImg = `${process.env.PUBLIC_URL}/images/Katy.jpg`;
  const navigate = useNavigate();

  const katy = {
    image: katyImg,
    title: 'Katy Roelle',
    text: 'Nationally Certified Pilates Teacher, TRX Certified, GRID Trigger Point Certified, Barre Above Certified, PMA Member',
  };

  const handleCardClick = () => {
    navigate(`${process.env.PUBLIC_URL}/katy`);
  };

  return (
    <>
      <Container fluid className="bg-mint m-2 p-2 mb-5" id="instructors">
        <h2 className="section-header">Instructors</h2>
        <div className="text-center">
          <Card className="card-width" onClick={handleCardClick}>
            <Card.Img variant="top" src={katy.image} />
            <Card.Body>
              <Card.Title>{katy.title}</Card.Title>
              <Card.Text>{katy.text}</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <p className="text-left secondaryText my-2">
            Reformation Pilates trained instructors currently teach in Georgia,
            Tennessee, Texas, Florida, Colorado, California, Brazil, Italy and
            Peru at LA Fitness&#39;, YMCAs, Churches, Pilates studios, and dance
            studios.
          </p>
        </div>
        <h2 className="section-header">Reformation Pilates Studio Staff</h2>
        <p className="tertiaryText">
          All instructors have participated in an in depth formal Pilates
          training program including the traditional method of Pilates as well
          as the contemporary approach. A minimum of 3 years of Pilates
          experience combined with anatomy of movement and apprenticeship under
          the Reformation style of Pilates taught by Katy Roelle.
        </p>
        <h2 className="section-header">
          Teacher Training & Continuing Education
        </h2>
        <p className="tertiaryText">
          Pilates is a highly disciplined and analytical method of exercise.
        </p>
        <p className="secondaryText">
          Because of the form-intensive nature of the exercises, it is important
          to learn from and apprentice under trainers who are skilled in the
          Joseph Pilates&#39; original method, and who understand functional
          anatomy and the biomechanics of exercise.
        </p>
        <hr />
        <p className="tertiaryText">
          Reformation Pilates Studio is pleased to provide such a program. Group
          fitness instructors, personal trainers, yoga instructors and Pilates
          students are all great candidates for Pilates certification. Call for
          information or to be placed on the waitlist. <FaPhoneVolume />
          <a href="tel:+17704010203" className="link text-dark">
            770-401-0203
          </a>{' '}
          Or contact us{' '}
          <a
            href={`${process.env.PUBLIC_URL}/#contact`}
            className="link text-dark"
          >
            here
          </a>
          .
        </p>
        <div className="text-center mb-5">
          <img
            src={`${process.env.PUBLIC_URL}/images/duoVreformer.jpg`}
            className="img-fluid text-center w-75"
            alt="Pilates class and instructor"
          />
        </div>
      </Container>
      <Footer />
    </>
  );
};
