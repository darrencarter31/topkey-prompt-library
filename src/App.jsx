import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GateProvider } from './context/GateContext.jsx';
import Home from './pages/Home.jsx';
import Guides from './pages/Guides.jsx';
import GuideDetail from './pages/GuideDetail.jsx';
import Philosophy from './pages/Philosophy.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <GateProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:slug" element={<GuideDetail />} />
          <Route path="/philosophy" element={<Philosophy />} />
        </Routes>
      </GateProvider>
    </BrowserRouter>
  );
}
