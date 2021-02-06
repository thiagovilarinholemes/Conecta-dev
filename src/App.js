import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import theme from './theme';
import Signin from './pages/Signin';

function App() {
  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="*" element={<h1>Not found 404</h1>} />

        </Routes>
      </BrowserRouter>

    </ThemeProvider>
    
  );
}

export default App;
