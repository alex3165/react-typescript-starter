import styled from 'styled-components';
import { mint, ivy } from '../colors';

const Button = styled.button`
  width: 200px;
  max-height: 70px;
  background-color: ${mint};
  color: white;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  :hover {
    background-color: ${ivy};
  }
`;

export default Button;
