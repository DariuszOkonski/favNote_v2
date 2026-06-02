import Button from 'components/atoms/Button/Button';
import { colors } from 'helpers/colors';
import GlobalStyle from 'theme/GlobalStyle';

// NODE - v20.19.0
const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <h1>Hello Roman</h1>
      <Button color={colors.primary} width='300px'>
        Close / Save
      </Button>
      <Button>Close / Save</Button>
      <Button secondary>Remove</Button>
    </div>
  );
};

export default Root;
