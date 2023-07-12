import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import BooksPage from './routers/bookPage';
import AuthorPage from './routers/authorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<BooksPage />} />
        <Route path="/authors" element={<AuthorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
