import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 60px;
  font-size: 30px;
  max-width: 800px;
  max-height: 740px;
  background: rgba(54, 44, 44, 0.39);
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(280px);

  border-radius: 500px 60px 300px 100px;

  @media (min-width: 600px) {
    min-width: 500px;
  }

  @media (min-width: 1000px) {
    width: 800px;
    margin-top: 0;
  }
`;

export const Picture = styled.img`
  margin-top: 50px;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 500px 60px 300px 100px;

  @media (min-width: 600px) {
    height: 300px;
  }

  @media (min-width: 1000px) {
    width: 534px;
    height: 383px;
  }
`;

export const DataWrapper = styled.div`
  margin-top: 20px;
  font-family: "Inter", sans-serif;

  & > h1 {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 700;
  }
  & > p {
    font-size: 16px;
    font-weight: 100;
  }

  @media (min-width: 600px) {
    & > h1 {
      margin-bottom: 5px;
      font-size: 25px;
    }
    & > p {
      font-size: 16px;
    }
  }

  @media (min-width: 1000px) {
    & > h1 {
      margin-bottom: 5px;
      font-size: 50px;
    }
    & > p {
      font-size: 20px;
    }
  }
`;
