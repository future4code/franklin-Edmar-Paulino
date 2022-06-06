import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'

import sendImg from './send.svg'

import MessageBallon from './components/MessageBallon';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HistoryContainer = styled.div`
  width: 600px;
  min-height: 800px;
  background-color: #f1ece7;
  border-radius: 5px 5px 0px 0px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 600px;
  max-width: 600px;
  background-color: #f1ece7;
  border-radius: 0px 0px 5px 5px;
`;

const InputUser = styled.input`
  border-radius: 50px;
  border: none;
  height: 20px;
  width: 30%;
  padding: 10px;
  font-size: 12px;
  margin: 10px 0px 20px 20px;
`;

const InputMessage = styled.input`
  border-radius: 50px;
  border: none;
  height: 20px;
  width: 90%;
  margin: 10px 10px 20px 10px;
  padding: 10px;
  font-size: 12px;
`

const SendButton = styled.img`
  margin: 10px 20px 20px 5px;
`

function App() {

  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const history = messages.map((message) => {
    return (
      <MessageBallon username={message.username} message={message.message} />
    );
  })


  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  }

  const handleMessageInput = (event) => {
    setMessage(event.target.value);
  }
  
  const sendMessage = () => {
    if (!username || !message) return;
    setMessages([...messages, { username, message }]);
    setUsername("");
    setMessage("");
  }
  
  const sendMessageWithEnter = (event) => {
    if (event.key !== "Enter") return;
    sendMessage();
  }

  return (
    <Container>
      <HistoryContainer>
        {history}
      </HistoryContainer>
      <InputContainer>
        <InputUser
          value={username}
          placeholder={"Digite o usuário"}
          onChange={handleUsernameInput}
        />
        <InputMessage
          value={message}
          placeholder={"Digite sua mensagem"}
          onChange={handleMessageInput}
          onKeyDown={sendMessageWithEnter}
        />
        <SendButton src={sendImg} onClick={sendMessage} alt={"Botão enviar"}/>
      </InputContainer>
    </Container>
  );
}

export default App;
