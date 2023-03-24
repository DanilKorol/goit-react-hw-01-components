import styled from 'styled-components';

export const Body = styled.tbody`
  text-align: center;

  tr:nth-child(2n) {
    background-color: #bab6b6;
  }
`;

export const Row = styled.tr`
  td {
    padding: 10px;
  }
  font-size: 12px;
  text-transform: capitalize;
  color: #3f3a3a;
  background-color: #f2f2f2;
  :nth-child(2n) {
    background-color: grey;
  }
`;
