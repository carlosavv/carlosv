import React from "react";

import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .centered {
    height: 50vh; /* Magic here */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlay {
    background-color: #14453d;
    opacity: 1;
    position: absolute;
    top: 1;
    left: 1;
    bottom: 1;
    right: 1;
    z-index: 0;
  }
  .button {
    background-color: #14453d;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <div className="centered">
      <Container className="overlay">
        <h1 style={{ color: "white" }}>Welcome</h1>
        <p style={{ color: "white" }}>
          Learn about what I have done and what I am about to do
        </p>
        <PrimaryButton />
      </Container>
    </div>
  </Styles>
);

const PrimaryButton = () => (
  <div>
    <p>
      <a className="btn btn-outline-info btn-lg" href="/" role="button">
        Learn more
      </a>
    </p>
  </div>
);
