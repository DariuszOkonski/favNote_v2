import { Fragment } from 'react';
import Button from 'components/atoms/Button/Button';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

// NODE - v20.19.0
const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Fragment>
          <h1>Hello Roman</h1>
          <Button color={theme.primary} width='300px'>
            Close / Save
          </Button>
          <Button>Close / Save</Button>
          <Button secondary>Remove</Button>
        </Fragment>
      </ThemeProvider>
    </div>
  );
};

export default Root;
