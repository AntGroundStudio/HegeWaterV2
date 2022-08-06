import './HegeDeliveryPlans.css'
import DeliveryPlan1 from 'Assets/delivery_plan1.svg';
import DeliveryPlan2 from 'Assets/delivery_plan2.svg';
import DeliveryPlan3 from 'Assets/delivery_plan3.svg';

function HegeDeliveryPlans() {

    return (
        <div class="container">
            <div class="row p-4 mt-sm-5 mt-3">
                <h4 class="display-4 text-center text-sm-center delivery-plans-title-font-weight"><span class="delivery-font-color">Delivery</span> Plans</h4>
            </div>
            <div class="row p-sm-4 ps-4 pe-4 d-flex justify-content-center">
                <div class="col-12 col-sm-4 text-center pb-2 delivery-container">
                    <p class="number-text delivery-plan-font-weight number-font-color">2</p>
                    <p class="cans-text delivery-plan-font-weight">Cans</p>
                    <img src={DeliveryPlan1} alt="Hege" class="p-4 delivery-plan-image-res" />
                    <p class="delivery-plan-text delivery-font-color delivery-plan-font-weight">Delivered in 24 hours</p>
                </div>
                <div class="col-12 col-sm-4 text-center pb-2 delivery-container">
                    <p class="number-text delivery-plan-font-weight number-font-color">4</p>
                    <p class="cans-text delivery-plan-font-weight">Cans</p>
                    <img src={DeliveryPlan2} alt="Hege" class="p-4 delivery-plan-image-res" />
                    <p class="delivery-plan-text delivery-font-color delivery-plan-font-weight">Delivered in 24 hours</p>
                </div>
                <div class="col-12 col-sm-4 text-center pb-2 delivery-container">
                    <p class="number-text delivery-plan-font-weight number-font-color">8</p>
                    <p class="cans-text delivery-plan-font-weight">Cans</p>
                    <img src={DeliveryPlan3} alt="Hege" class="p-4 delivery-plan-image-res" />
                    <p class="delivery-plan-text delivery-font-color delivery-plan-font-weight">Delivered in 24 hours</p>
                </div>
            </div>
            <div class="row">
                <p class="text-center text-sm-center"><button class="shop-now-btn-color shop-now-btn-prop shop-now-btn-font-size ps-4 pe-4 pt-2 pb-2">Shop Now</button></p>
            </div>
        </div>
    );

}

export default HegeDeliveryPlans;