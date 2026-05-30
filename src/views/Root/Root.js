import Button from 'components/Button/Button';

// NODE - v14
const Root = () => {
  return (
    <div>
      <h1>Hello Roman</h1>
      <Button width='500px'>Close / Save</Button>
      <Button>Close / Save</Button>
      <Button secondary>Remove</Button>
    </div>
  );
};

export default Root;
