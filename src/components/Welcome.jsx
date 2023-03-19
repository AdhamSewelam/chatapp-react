import React from 'react';
import styled from 'styled-components';
import Logout from './Logout';

export default function Welcome({ currentUser }) {
  return (
    <Container>
      <div className="logout_position">
        <Logout />
      </div>
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>Please select a chat to start Messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  h1,
  h3 {
    color: black;
  }
  img {
    height: 20rem;
  }
  span {
    color: #4e00ff;
    text-transform: capitalize;
  }
  .logout_position {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;
