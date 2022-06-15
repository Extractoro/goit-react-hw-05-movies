import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export const Main = () => (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);