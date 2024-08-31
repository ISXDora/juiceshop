import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  border-radius: 4px;
  width: 100%;

   footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: ${({ theme }) => theme['orange-600']};
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${({ theme }) => theme['orange-500']};
      }
    }
  }
`;


export const DateContainer = styled.div`

`
