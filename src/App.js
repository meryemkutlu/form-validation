import "./App.css";
import { userValidation } from "./Validation";

function App() {
  const createUser = async (event) => {
    event.preventDefault();
    let formDate = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    // console.log(formDate);
    const isValid = await userValidation.isValid(formDate);
    console.log(isValid);
  };

  return (
    <div className="App">
      <form className="form" onSubmit={createUser}>
        <input type="text" placeholder="type your name..." />
        <input type="email" placeholder="type your email..." />
        <input type="password" placeholder="type your password..." />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
}

export default App;
