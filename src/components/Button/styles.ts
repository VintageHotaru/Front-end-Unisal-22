import styled from "styled-components";

export const Text = styled.span`
  font-weight: 700;
  font-size: 1.8rem;
`;

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  border-radius: 2.4rem;
  font-size: 1.6rem;
  background: transparent;
  border: 0.1rem solid #fff;
  border-radius: 4rem;
  transition: 0.2s;
  
  :hover {
    background-color: #fff;
    ${Text} {
      color: #000;
    }
  }
`;