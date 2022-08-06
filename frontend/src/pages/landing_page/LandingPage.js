import HegeCarousel from './components/Carousel/HegeCarousel';
import AboutHege from './components/About/AboutHege';
import HegeFeatures from './components/Features/HegeFeatures';
import HegeDeliveryPlans from './components/DeliveryPlans/HegeDeliveryPlans';
import HegeBenefits from './components/Benefits/HegeBenefits';
import HegeFooter from './components/Footer/HegeFooter';


function LandingPage(){
    return(
    <div>
      <HegeCarousel />
      <AboutHege />
      <HegeFeatures />
      <HegeDeliveryPlans />
      <HegeBenefits/>
      <HegeFooter />
    </div>)
}

export default LandingPage