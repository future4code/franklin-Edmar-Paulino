import React, { useState } from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const FeedInput = styled.input`
  width: 295px;
  height: 30px;
  margin: 2px 0px;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 14px;
  padding: 5px;
`

const PostButton = styled.button`
  margin: 10px 10px 30px;
  width: 100px;
  height: 30px;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
`

function App() {
  const [feed, setFeed] = useState([
    {
      userName: 'paulinha',
      userPicture: 'https://picsum.photos/50/50',
      postPicture:'https://picsum.photos/200/150'
    },
    {
      userName: 'joao',
      userPicture: 'https://picsum.photos/50/51',
      postPicture: 'https://picsum.photos/200/151'
    },
    {
      userName: 'amanda',
      userPicture: 'https://picsum.photos/50/52',
      postPicture: 'https://picsum.photos/200/152'
    }
  ])

  const [userName, setUserName] = useState("");
  const [userPicture, setUserPicture] = useState("");
  const [postPicture, setPostPicture] = useState("");

  const feedComponent = feed.map((post) => {
    return (
      <Post
      nomeUsuario={post.userName}
      fotoUsuario={post.userPicture}
      fotoPost={post.postPicture}
      />
    )
  })

  const attFeed = () => {
    const newPost = {
      userName: userName,
      userPicture: userPicture,
      postPicture: postPicture
    }

    const newFeed = [newPost, ...feed];
    setFeed(newFeed);
    setUserName("");
    setUserPicture("");
    setPostPicture("");
  }

  const handleInputUserName = (event) => {
    setUserName(event.target.value);
  }

  const handleInputUserPicture = (event) => {
    setUserPicture(event.target.value);
  }

  const handelInputPostPicture = (event) => {
    setPostPicture(event.target.value);
  }

  return (
    <MainContainer>
      <FeedInput
      value={userName}
      onChange={handleInputUserName}
      placeholder={'Nome de usuário'}
      />

      <FeedInput
      value={userPicture}
      onChange={handleInputUserPicture}
      placeholder={'Foto do usuário'}
      />

      <FeedInput
      value={postPicture}
      onChange={handelInputPostPicture}
      placeholder={'Foto para postar'}
      />

      <PostButton onClick={attFeed}>Postar</PostButton>

      {feedComponent}         
    </MainContainer>
  )

}


export default App;
