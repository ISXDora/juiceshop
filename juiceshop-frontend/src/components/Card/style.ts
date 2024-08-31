import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 6px 36px 6px 36px;
  width: 256px;
  height: 310px;
  padding: 8px;
  background: ${props => props.theme['yellow-500']};
  gap: 8px;

  img {
    width: 60px;
    height: 80px;
    margin-top: -50px;
  }

  strong {
    color: ${props => props.theme['gray-600']};
  }
  p {
    color: ${props => props.theme['gray-500']};
    text-align: center;
  }

  div {
    > p:nth-last-child(2n-1) {
      font-weight: 700;
      font-size: larger;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 16px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  label button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 8px;
    border: none;
    outline: none;
    background: ${props => props.theme['orange-600']};
    color: ${props => props.theme['white']};
    margin: 0 8px;
  }

  input {
    border-radius: 8px;
    outline: none;
    border: none;
    height: 32px;
    width: 40px;
    text-align: center;
  }
`;
export const ContainerValue = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  input {
    border-radius: 8px;
    outline: none;
    border: none;
    height: 38px;
    width: 72px;
  
  }

 
`;
