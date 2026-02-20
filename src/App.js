import { createGlobalStyle } from "styled-components";
import { Title } from "./components/Title/Title";
import { Section } from "./components/Section/Section";
import { Event } from "./components/Event/Event";
import { CardList } from "./components/CardList/CardList";
import upcoming from "./upcoming-events.json";
import "modern-normalize";
import "./App.css";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

a {
    text-decoration: none;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

h1, h2, h3, p, h4 {
    margin: 0;
    padding: 0;
}

img {
    display: block;
}

button {
    border: none;
    cursor: pointer;
}

`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <Section>
        <Title text="24th Core Worlds Coalition Conference" />
        <CardList>
          <Event props={upcoming} />
        </CardList>
      </Section>
    </>
  );
}

export default App;
