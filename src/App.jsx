import { Route, Routes } from 'react-router-dom';
import HomeTablePage from './HomeTablePage';
import AboutPage from './AboutPage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeTablePage />} />
        <Route path='/about-u' element={<AboutPage />} />
      </Routes>
    </div>
  );
}
