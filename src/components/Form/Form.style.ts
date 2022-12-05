import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";

export const HeaderForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 10px;
  min-width: 300px;
  padding: 40px 20px;

  & > h1 {
    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  @media (min-width: 600px) {
    & > h1 {
      margin-bottom: 5px;
    }
  }

  @media (min-width: 1000px) {
    & > h1 {
      margin-bottom: 12px;
    }
  }
`;

export const BackButton = styled(FiArrowLeft)`
  margin-bottom: 20px;
  color: black;
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const BlueRectangle = styled.div`
  height: 9px;
  width: 166px;
  background-color: rgba(7, 21, 148, 1);
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100px;
`;

export const LabelInput = styled.label``;

export const StyledInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  margin-top: 5px;
  padding: 1.5rem;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  height: 20px;
  border: none;
  border-bottom: 2px solid black;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  text-align: right;
  color: #ff0000;
  font-family: "Inter";
  font-style: italic;
  font-weight: 300;
  font-size: 20px;
`;
