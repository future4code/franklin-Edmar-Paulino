import { useState } from 'react';
import './App.css';
import ListUsersScreen from './components/ListUsersScreen';
import RegisterUserScreen from './components/RegisterUserScreen';

function App() {
  const [screenToggle, setScreenToggle] = useState(true)

  const changeScreen = () => {
    setScreenToggle(!screenToggle)
  }

  return (
    <div className="App">
      {screenToggle ? <RegisterUserScreen /> : <ListUsersScreen />}
      <button onClick={changeScreen}>{screenToggle ? "Listar usuários" : "Cadastrar usuário"}</button>
    </div>
  );
}

export default App;
