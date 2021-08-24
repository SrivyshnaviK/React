import './App.css';
import GetPersonList from './GetPersonList';
import PostPersonList from './PostPersonList';
import DeletePerson from './DeletePerson';

function App() {
  return (
    <div className="App">
      <GetPersonList />
      <PostPersonList />
      <DeletePerson />
    </div>
  );
}

export default App;
