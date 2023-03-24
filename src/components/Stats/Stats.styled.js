import styled from 'styled-components';
import { getRandomHexColor } from '../../Utils/RandomColor';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  gap: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${getRandomHexColor};
  color: white;
`;
