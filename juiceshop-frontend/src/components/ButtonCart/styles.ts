import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 38px;
  padding: 8px;
  height: 38px;
  outline: none;
  border: none;
  background: ${props => props.theme['orange-600']};
`;
