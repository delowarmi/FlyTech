
import React from 'react';
import Header from './components/Header';
// import SearchSection from './components/SearchSection';
import Banner from './components/Banner';
import HotDeals from './components/HotDeals';
import Footer from './components/Footer';
import Slider from './components/Slider';

function App() {
  return (
    <div className="font-sans">
      <Header />
      {/* <SearchSection /> */}
      <Banner />
      <Slider/>
      <HotDeals />
      <Footer />
    </div>
  );
}
export default App