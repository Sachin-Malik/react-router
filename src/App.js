import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import NewProducts from './components/NewProducts';
import FeaturedProducts from './components/FeaturedProduct'
import UserDetails from './components/UserDetails';
import Users from './components/Users';

const LazyAbout = React.lazy(()=>import('./components/About'));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
     
        <Route path='/about' element={
             <React.Suspense fallback='Loading...'>
             <LazyAbout />
             </React.Suspense>}
        />
        <Route path='/order-summary' element={<OrderSummary/>}/>
        <Route path='*' element={<NoMatch />} />
        <Route path='/products' element ={<Products />}>
          <Route index element={<FeaturedProducts />}/>
          <Route path='new' element={<NewProducts />}/>
          <Route path='featured' element = {<FeaturedProducts />} />
        </Route> 
        <Route path='/users' element ={<Users />} />
        <Route path='users/:id' element={<UserDetails />}/>
      </Routes>
    </>
  );
}

export default App;
