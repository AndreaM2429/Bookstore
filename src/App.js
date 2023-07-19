import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout';
import BooksPage from './routers/bookPage';
import CategoriesPage from './routers/categoriesPage';
import { getBookList } from './redux/books/booksSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookList());
  }, [dispatch]);
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
