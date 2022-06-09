import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
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
  const [filtro, setFiltro] = useState("")

  useEffect(
    () => {

    },
    []
  );

  useEffect(
    () => {

    },
    [inputValue]
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

  const selectTarefa = (id) => {
    console.log(id)
    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id !== id) return tarefa;
      tarefa.completa = !tarefa.completa;
      return tarefa;
    });
    setTarefa(tarefasAtualizadas);
  }

  const onChangeFilter = (event) => {
    setFiltro(event.target.value)
  }

  const listaFiltrada = tarefas.filter(tarefa => {
    switch (filtro) {
      case 'pendentes':
        return !tarefa.completa
      case 'completas':
        return tarefa.completa
      default:
        return true
    }
  });


  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input value={inputValue} onChange={onChangeInput} onKeyDown={criaTarefaComEnter} />
        <button onClick={criaTarefa}>Adicionar</button>
      </InputsContainer>
      <br />

      <InputsContainer>
        <label>Filtro</label>
        <select value={filtro} onChange={onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <TarefaList>
        {listaFiltrada.map(tarefa => {
          return (
            <Tarefa
              completa={tarefa.completa}
              onClick={() => selectTarefa(tarefa.id)}
            >
              {tarefa.texto}
            </Tarefa>
          )
        })}
      </TarefaList>
    </div>
  )
}


export default App
