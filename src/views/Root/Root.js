import { Fragment } from 'react';
import Button from 'components/atoms/Button/Button';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

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

          <Heading>Heading h1</Heading>
          <Input placeholder='Input' />
          <Paragraph>Paragraph</Paragraph>
        </Fragment>
      </ThemeProvider>
    </div>
  );
};

export default Root;
