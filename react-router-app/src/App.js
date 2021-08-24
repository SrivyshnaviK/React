import './App.css';
import BasicRouting from './BasicRouting';
import NestedRouting from './NestedRouting';
import StaticRouterExample from './ServerRendering';

function App() {
  return (
    <div className="App">
      <BasicRouting />
      <NestedRouting />
      <StaticRouterExample />
    </div>
  );
}

export default App;
