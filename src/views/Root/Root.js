import Button from 'components/Button/Button';
import { colorOptions } from 'components/helper';
import GlobalStyle from 'theme/GlobalStyle';

// NODE - v20.19.0
const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <h1>Hello Roman</h1>
      <Button color={colorOptions.primary} width='300px'>
        Close / Save
      </Button>
      <Button>Close / Save</Button>
      <Button secondary>Remove</Button>
    </div>
  );
};

export default Root;
