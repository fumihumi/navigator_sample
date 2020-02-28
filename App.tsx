import React from "react";
import styled from "styled-components/native";

export default function App() {
  return (
    <Container style={{ flex: 1 }}>
      <Text>xxxx</Text>
    </Container>
  );
}

const Container = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: black;
  font-size: 16px;
`;
