import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';

function Layout() {
  const { isload } = useSelector((state) => state.books);
  if (isload === true) {
    return (
      <>
        <Navbar />
        <section className="d-flex-column catego-page ">
          <h2>Loading....</h2>
        </section>

      </>
    );
  }
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
