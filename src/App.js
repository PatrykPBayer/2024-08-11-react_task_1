import "./App.css";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { Offers } from "./components/Offers";

function App() {
  const author = "John Rambo";

  return (
    <div>
      <Menu />
      <Content author={author} />
      <Offers title={"Our offers"} />
      <Footer author={"John Rambo"} /> {/*też możemy użyć author w klamrach*/}
    </div>
  );
}

export default App;
