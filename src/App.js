import './App.css';
import styled from 'styled-components';

// NODE - v14
// npm install styled-components@5

const MyButton = styled.button`
  border: 2px solid blue;
  padding: 50px;
`;

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>FavNote</h1>
      </header>
    </div>
  );
};

export default App;
