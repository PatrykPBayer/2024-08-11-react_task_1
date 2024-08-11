import { Card } from "./components/Card";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Menu } from "./components/Menu";
import { Offers } from "./components/Offers";

function App() {
  const author = "John Rambo";
  const getValueFromAPI = (phrase) => {
    // fetch(...)
  };

  return (
    <div>
      <Menu />
      <Content author={author} />
      <Offers title={"Our offers"} />
      <Footer author={"John Rambo"} /> {/*też możemy użyć author w klamrach*/}
      <Card title="Our company">
        <p>Test</p>
        <strong>xxx</strong>
      </Card>
      <Card title="our company 2">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </Card>
      <Form onSearchSubmit={getValueFromAPI} />
    </div>
  );
}

export default App;
