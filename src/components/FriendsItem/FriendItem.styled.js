import styled from 'styled-components';

export const Item = styled.li`
  background-color: white;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 250px;
  box-shadow: grey 10px 5px 5px;
`;

export const Status = styled.span`
  color: ${props => (props.status ? 'green' : 'red')};
`;

export const Image = styled.img`
  width: 48px;
  border-radius: 5px;
  border: 1px solid black;
`;

export const Name = styled.p`
  font-weight: 700;
`;
