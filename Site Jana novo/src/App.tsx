import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail';
import Success from './pages/Success';
import { trackPixelEvent } from './lib/pixel';

function PixelTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPixelEvent('PageView');
  }, [location]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <PixelTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curso/:id" element={<CourseDetail />} />
        <Route path="/obrigado" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
