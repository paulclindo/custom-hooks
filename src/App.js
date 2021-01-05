import React, { useContext } from "react";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import black from "./black.png";
import green from "./green.png";
import Toggle from "./components/Toggle";
import Nav from "./components/Nav";
import { PageWrapper } from "./state";
import Cookie from "./components/Cookie";
import ResizeWidthCard from "./components/ResizeWidthCard";
import Local from "./components/Local";
import Theme from "./components/Theme";

function App() {
  return (
    <PageWrapper>
      <div>
        <Header>
          <Menu />
          <h1>Header</h1>
        </Header>
        <Container>
          <Nav />
          <Cookie />
          <Theme />
          <h2>Super Cool</h2>
          <Toggle />
          <Local />
          <ResizeWidthCard />
          <CardGrid>
            <Card style={{ background: "var(--blue)" }}>
              <h3>Some card</h3>
              <img src={blue} />
            </Card>
            <Card style={{ background: "var(--black)" }}>
              <h3>Some card</h3>
              <img src={black} />
            </Card>
            <Card style={{ background: "var(--green)" }}>
              <h3>Some card</h3>
              <img src={green} />
            </Card>
          </CardGrid>
        </Container>
      </div>
    </PageWrapper>
  );
}

export default App;
