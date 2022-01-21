import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/cart/:id?' element={<CartPage />} />
          <Route path='/' element={<HomePage />} />
        </Container>
      </main>
      <Footer />
    </Routes>
  );
}

export default App;
