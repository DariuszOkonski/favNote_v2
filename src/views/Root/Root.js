import Button, { buttonBackgroundOptions } from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

// NODE - v18
const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <h1>Hello Roman</h1>
      <Button color={buttonBackgroundOptions.primary} width='300px'>
        Close / Save
      </Button>
      <Button>Close / Save</Button>
      <Button secondary>Remove</Button>
    </div>
  );
};

export default Root;
