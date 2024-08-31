import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { Router } from './Routes';
import { ModalProvider } from 'react-brave-modal';
import { CartProvider } from './hooks/useCart';
import { ToastContainer } from 'react-toastify';
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <ModalProvider>
          <BrowserRouter>
            <Router />
            <ToastContainer autoClose={3000} />
          </BrowserRouter>
        </ModalProvider>
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
