import styled, { css } from 'styled-components';

export const buttonBackgroundOptions = {
  primary: 'hsl(49, 100%, 58%)',
  secondary: 'hsl(196, 83%, 75%)',
  tertiary: 'hsl(106, 47%, 64%)',
  gray: 'hsl(0, 0%, 90%)',
};

const Button = styled.button`
  padding: 0;
  background-color: ${({ color }) => color || buttonBackgroundOptions.primary};
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
      background-color: ${buttonBackgroundOptions.gray};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
