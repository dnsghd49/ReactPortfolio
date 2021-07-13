import React from "react";
//import Hero from "../components/Hero";
import Container from "../components/Container";
import "./style.css"
import Skillbox from "../components/Skillbox";

function Main() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>

        <h1>Welcome!</h1>
        <Skillbox></Skillbox>

      </Container>
    </div>
  );
}

export default Main;
