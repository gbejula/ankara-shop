import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <Routes>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order' component={OrderPage} />
          <Route path='/payment' component={PaymentPage} />
          <Route path='/shipping' component={ShippingPage} />
          <Route path='/placeorder' component={PlaceOrderPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/signin' component={LoginPage} />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/cart/:id?' component={CartPage} />
          <Route path='/' component={HomePage} exact />
        </Container>
      </main>
      <Footer />
    </Routes>
  );
}

export default App;
