import GreenLink from "./GreenLink";
import RedButton from "./RedButton";
import "./styles.css";
import Underline from "./Underline";
import Center from "./Center";
import Uppercase from "./Uppercase";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <RedButton>Begimai</RedButton>
      <RedButton>jyldyz</RedButton>
      <RedButton>Aiana</RedButton>
      <RedButton>Xanzada</RedButton>
      <RedButton>Aigerim</RedButton>
      <GreenLink to="google.com"> Jyldyz</GreenLink>
      <GreenLink to="https://www.youtube.com/"> Aiana</GreenLink>
      <GreenLink to="google.com"> Aigerim</GreenLink>
      <GreenLink to="google.com"> Xanzada</GreenLink>
      <GreenLink to="google.com"> Begimai</GreenLink>
      <Underline> Jyldyz Bazarkulova </Underline>
      <Center> I love eating desserts </Center>
      <Uppercase> I like walking alone</Uppercase>
    </div>
  );
}
