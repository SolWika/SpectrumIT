import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 0;
  padding: 10px 43px;
  max-width: 248px;
  background-color: ${(props) => props.color || "rgba(64, 72, 58, 1)"};
  border: 0px;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  font-size: 30px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  -webkit-text-stroke: 1px #d9d9d9;
  transition: background-color 0.5s;
  &:hover {
    background-color: black;
  }
`;
