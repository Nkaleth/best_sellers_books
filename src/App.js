import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Details from './routes/Details';
import NotMatch from './routes/NoMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>

  );
}

export default App;
