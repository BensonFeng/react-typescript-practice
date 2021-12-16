import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="App">
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => console.log(event.target.value)}
      ></Input>
    </div>
  );
}

export default App;
