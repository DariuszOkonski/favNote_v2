import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

// NODE - v14
const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <h1>Hello Roman</h1>
      <Button width='500px'>Close / Save</Button>
      <Button>Close / Save</Button>
      <Button secondary>Remove</Button>
    </div>
  );
};

export default Root;
