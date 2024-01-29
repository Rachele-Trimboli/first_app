import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ClassExampleComponent from "./ClassComponentExample";
import HeaderComponent from "./HeaderComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent text="Scegli il tuo preferito" />
        <ClassExampleComponent
          url="http://placekitten.com/200"
          description="gattino"
          borderRadius="circle"
          display="changeDisplay"
        />
        <ClassExampleComponent
          url="https://placedog.net/300"
          description="cagnolino"
          borderRadius="circle"
          display="changeDisplay"
        />
        <ButtonComponent text="Gattino" />
        <ButtonComponent text="Cagnolino" />
      </header>
    </div>
  );
}

export default App;
