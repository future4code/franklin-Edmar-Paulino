import './App.css';
import { useState } from 'react';

import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import EtapaFinal from './components/EtapaFinal';

function App() {
  const [etapa, setEtapa] = useState(1);
  
  const mudaEtapa = (novaEtapa) => {
    setEtapa(novaEtapa);
  }
  
  const mudaEtapaFinal = () => {
    setEtapa(4);
  }
  
  const exibeEtapa = () => {
    switch (etapa) {
      case 1:
        return <Etapa1 funcao={mudaEtapa}/>;
      case 2:
        return <Etapa2 funcao={mudaEtapaFinal}/>;
      case 3:
        return <Etapa3 funcao={mudaEtapaFinal}/>;
      case 4:
        return <EtapaFinal />
      default:
        break;
    }
  }

  return (
    <div className="App">
      {exibeEtapa()}
    </div>
  );
}

export default App;
