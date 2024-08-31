import styled from 'styled-components';

type ContainerToggleProps = {
  isChecked: boolean;
};

export const Container = styled.div<ContainerToggleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  label {
    display: flex;
    align-items: center;
    justify-content: ${({ isChecked }) =>
      isChecked ? 'flex-end' : 'flex-start'};
    width: 72px;
    height: 19px;
    border-radius: 8px;
    background: ${({ theme, isChecked }) =>
      isChecked ? theme['white'] : theme['orange-600']};
    opacity: ${({ isChecked }) => (isChecked ? '1' : '0.6')};
    border: 2px solid;
    transition: all 100ms ease;

    input {
      display: none;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      pointer-events: none;
      width: 36px;
      padding: 8px;
      height: 17px;
      outline: none;
      border: none;
      transition: all 100ms ease;
      background: ${({ theme, isChecked }) =>
        isChecked ? theme['orange-600'] : theme['white']};

      svg {
        display: ${({ isChecked }) => (isChecked ? 'block' : 'none')};
        color: ${({ isChecked, theme }) =>
          isChecked ? theme['white'] : 'transparent'};
      }
    }
  }
`;
