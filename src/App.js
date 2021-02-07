import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store'
import GuestRoute from './routes/GuestRoute';
import Home from './pages/Home';
import theme from './theme';
import SignIn from './pages/Signin';

import './mock'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>

        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home />} />
            <GuestRoute path="/sign-in" element={<SignIn />} />
            <Route path="*" element={<h1>Not found 404</h1>} />

          </Routes>
        </BrowserRouter>

      </ThemeProvider>
    </Provider>

  );
}

export default App;
