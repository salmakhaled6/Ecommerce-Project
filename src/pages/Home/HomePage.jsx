import React from 'react'
import Header3 from '../../components/Header/Header3';
import AdCards from './AdCards';
import AllBlogs from './AllBlogs';
import Discounts from './Discounts';
import FeaturedCataegory from './FeaturedCatagegory/FeaturedCataegory';
import Hero from './Hero';
import LatestNews from './LatestNews';
import OfferBar from './Offers/OfferBar';
import Offers from './Offers/Offers';
import Products from './Products';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  return (
    <div>
        <Header3 />
       <Hero />

<AdCards />

<FeaturedCataegory />
<OfferBar />
<Offers />

<Discounts />

<Products />

<LatestNews />
<AllBlogs /> 

 <Footer />  
    </div>
  )
}

export default HomePage
