import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { preProcessFile } from 'typescript'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: ${({ exibe }) => (exibe ? "space-between" : "center")};
`

const TarefasContainer = styled.div`
  width: 50%;
  height: auto;
  margin: 30px;
`

const TarefaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: auto;
`

const Tarefa = styled.li`
  text-align: left;
  margin: 10px;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

function App() {
  const [tarefas, setTarefa] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [firstRender, setFirstRender] = useState(true);

  const [exibePendentes, setExibePendentes] = useState(true);
  const [exibeCompletadas, setExibeCompletadas] = useState(true);

  useEffect(
    () => {
      if (!firstRender) {
        const tarefasJson = JSON.stringify(tarefas);
        localStorage.setItem("tarefas", tarefasJson);
      }
    },
    [tarefas]
  );

  useEffect(
    () => {
      const tarefasJson = localStorage.getItem("tarefas");
      tarefasJson ? setTarefa(JSON.parse(tarefasJson)) : setTarefa([])
      setFirstRender(false);
    },
    []
  );

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const criaTarefa = () => {
    setTarefa([
      ...tarefas,
      {
        id: Date.now(),
        texto: inputValue,
        completa: false
      }
    ]);
    setInputValue("");
  };

  const criaTarefaComEnter = (event) => {
    if (event.key !== "Enter") return;
    criaTarefa();
  }

  const removeTodasAsTarefas = () => {
    setTarefa([]);
  }

  const selectTarefa = (id) => {
    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id !== id) return tarefa;
      tarefa.completa = !tarefa.completa;
      return tarefa;
    });
    setTarefa(tarefasAtualizadas);
  }

  const removeTarefa = (id) => {
    const tarefasAtualizadas = tarefas.filter((tarefa) => {
      return tarefa.id !== id;
    });
    setTarefa(tarefasAtualizadas);
  }

  const onChangeFilter = (event) => {
    switch (event.target.value) {
      case 'pendentes':
        setExibePendentes(true);
        setExibeCompletadas(false);
        break;
      case 'completas':
        setExibeCompletadas(true);
        setExibePendentes(false);
        break;
      default:
        setExibePendentes(true);
        setExibeCompletadas(true);
    }
  }

  const exibeLista = (lista) => {
    return (
      <TarefasContainer>
        <h3>Tarefas Pendentes</h3>
        {lista.map(tarefa => {
          return (
            <TarefaContainer>
              <Tarefa
                completa={tarefa.completa}
                onClick={() => selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
              <button onClick={() => removeTarefa(tarefa.id)}>Remover</button>
            </TarefaContainer>
          )
        })}
      </TarefasContainer>
    )
  }

  const listaDeTarefasPendentes = tarefas.filter((tarefa) => {
    return tarefa.completa === false;
  });

  const listaDeTarefasCompletadas = tarefas.filter((tarefa) => {
    return tarefa.completa === true;
  });


  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input value={inputValue} onChange={onChangeInput} onKeyDown={criaTarefaComEnter} />
        <button onClick={criaTarefa}>Adicionar</button>
        <button onClick={removeTodasAsTarefas}>Remover tarefas</button>
      </InputsContainer>
      <br />
      <InputsContainer>
        <label>Filtro</label>
        <select onChange={onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <TarefaList exibe={exibePendentes && exibeCompletadas}>
        {exibePendentes ? exibeLista(listaDeTarefasPendentes) : ""}
        {exibeCompletadas ? exibeLista(listaDeTarefasCompletadas) : ""}
      </TarefaList>
    </div>
  )
}

export default App
