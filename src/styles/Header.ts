import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 120px;
  font-size: 30px;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
