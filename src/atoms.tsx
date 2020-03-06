import styled from "styled-components/native";

export const Container = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
`;

type TextProps = { theme: { foreground: string; background: string } };
export const BaseText = styled.Text<TextProps>`
  color: ${({ theme }) => theme.foreground || "black"};
  font-size: 16px;
`;
