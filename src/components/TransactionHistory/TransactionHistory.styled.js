import styled from 'styled-components';

export const Table = styled.table`
  background-color: white;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const Head = styled.thead`
  tr {
    background-color: #00bed5;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
  }
  th {
    padding: 10px;
    width: calc(600px / 3);
  }
`;
