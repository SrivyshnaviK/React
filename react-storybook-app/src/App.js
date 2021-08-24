import './App.css';
import AddButton from './button/AddButton';
import {ThemeProvider} from '@material-ui/styles';
import Theme from './theme.js';

function App() {
  return (
    <ThemeProvider theme={Theme}>
    <div className="App">
     <AddButton name="Add"/>
    </div>
    </ThemeProvider>
  );
}

export default App;
