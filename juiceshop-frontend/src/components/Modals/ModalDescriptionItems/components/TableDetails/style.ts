import styled from 'styled-components'

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color:  ${({ theme }) => theme['orange-500']};
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color:${({ theme }) => theme['orange-300']};
      }
    }

    &:disabled {
      svg {
        color: rgba(113, 89, 193, 0.94);
        cursor: not-allowed;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
    margin-right: 8px;;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
