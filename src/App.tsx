import "./App.css";
import { Heading } from "./components/Heading";
import { Status } from "./components/Status";
import { Oscar } from "./components/Oscar";
import { Greet } from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to...</Heading>
      </Oscar>
      <Greet name="Ben" messageCount={10} isLoggedIn={true} />
    </div>
  );
}

export default App;
