import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 250px;
    padding: 32px;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }
`;

export const ContainerCards = styled.div`
  width: 100;
  display: grid;
  grid-template-columns: 256px 256px 256px 256px;
  grid-template-rows: 310px 310px 310px 310px;
  grid-auto-flow: column;
  grid-gap: 2rem;
`;
