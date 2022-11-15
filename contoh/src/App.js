import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { About, Home } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
