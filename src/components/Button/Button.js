import styled, { css } from 'styled-components';

export const buttonBackgroundOptions = {
  primary: 'hsl(49, 100%, 58%)',
  secondary: 'hsl(196, 83%, 75%)',
  tertiary: 'hsl(106, 47%, 64%)',
};

const Button = styled.button`
  padding: 0;
  background-color: ${({ color }) => color || '#ffd82b'};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #e6e6e6;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
