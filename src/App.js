import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layouts';

// load app SCSS styles
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
