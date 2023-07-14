import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import BooksPage from './routers/bookPage';
import CategoriesPage from './routers/categoriesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
