import React from "react";
import { Container } from "react-bootstrap";

const Instructors = () => {
  return (
    <Container className="bg-red fullHeight m-2 p-2" id="instructors">
      <h2>Instructors</h2>
      {/* <!--<section className="pictureOfKaty">Picture of Katy here</section>--> */}
      <img
        src="resources/images/instructing.jpg"
        className="float-md-right p-l-2 m-2 DiffPic"
        alt="Pilates Instructor Katy Roelle"
      />
      <h1>Katy Roelle</h1>
      <a href="https://bcert.me/bc/html/profile.jsp?k=zbltoua">
        <img
          src="resources/images/badge-8067.png"
          alt="Certified Pilates Instructor Badge"
          className="float-md-left img-fluid img-thumbnail p-sm-1 mr-5 mt-2"
          target="_blank"
          width="150"
          height="150"
        />
      </a>
      <ul className="">
        <li>Nationally Certified Pilates Teacher</li>
        <li>TRX Certified</li>
        <li>GRID Trigger Point Certified</li>
        <li>Barre Above Certified</li>
        <li>PMA Member</li>
      </ul>
      <p className="text-left">
        After earning her BFA from FSU in 1985, Ms. Roelle studied the Pilates
        method for 10 years in California while pursuing a career in dance.
        Katy's experience as a professional ballet dancer/choreographer led her
        to touring the south pacific and the orient with Princess Cruise Lines.
        Katy has been a consultant for amateur and professional athletes across
        the United States.
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
        at LA Fitness', YMCAs, Churches, Pilates studios, and dance studios.
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
        Joseph Pilates' original method, and who understand functional anatomy
        and the biomechanics of exercise. Reformation Pilates Studio is pleased
        to provide such a program. Group fitness instructors, personal trainers,
        yoga instructors and Pilates students are all great candidates for
        Pilates certification. Call for information or to be placed on the
        waitlist.
        <br /> <i className="fa fa-phone m-0"></i>
        <a href="tel:+17704010203">770-401-0203</a> Or contact us
        <a href="Contact.html">here.</a>
      </p>
      <img
        src="resources/images/duoVreformer.jpg"
        className="img-fluid"
        alt="Pilates class and instructor"
      />
    </Container>
  );
};

export default Instructors;
