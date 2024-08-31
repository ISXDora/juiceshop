import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  padding: 0.5rem;

  div {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    input {
      width: 193px;
      height: 38px;
    }

    button {
      width: 38px;
      height: 38px;
    }
  }
`;
