import './HegeFeatures.css'
import AlkalineIcon from 'Assets/alkaline_icon.svg';
import NotRoIcon from 'Assets/not_ro_icon.svg';
import PrestineIcon from 'Assets/prestine_icon.svg';
import TdsIcon from 'Assets/tds_icon.svg';
import UntouchedIcon from 'Assets/untouched_icon.svg';

function HegeFeatures() {

    return (
        <div class="container">
            <div class="row p-4 mt-sm-5 mt-3">
                <h4 class="display-4 text-center text-sm-center what-sets-hege-apart-title-font-weight">What sets <span class="hege-font-color">Hege</span> apart</h4>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-12 col-sm-2 text-center pb-2 ms-3 me-3">
                    <img src={PrestineIcon} alt="Hege" class="p-4 feature-image-res" />
                    <p class="text-center text-sm-center feature-font-size">Prestine</p>
                </div>
                <div class="col-12 col-sm-2 text-center pb-2 ms-3 me-3">
                    <img src={UntouchedIcon} alt="Hege" class="p-4 feature-image-res" />
                    <p class="text-center text-sm-center feature-font-size">Untouched</p>
                </div>
                <div class="col-12 col-sm-2 text-center pb-2 ms-3 me-3">
                    <img src={NotRoIcon} alt="Hege" class="p-4 feature-image-res" />
                    <p class="text-center text-sm-center feature-font-size">Not RO</p>
                </div>
                <div class="col-12 col-sm-2 text-center pb-2 ms-3 me-3">
                    <img src={TdsIcon} alt="Hege" class="p-4 feature-image-res" />
                    <p class="text-center text-sm-center feature-font-size">Balanced TDS</p>
                </div>
                <div class="col-12 col-sm-2 text-center pb-2 ms-3 me-3">
                    <img src={AlkalineIcon} alt="Hege" class="p-4 feature-image-res" />
                    <p class="text-center text-sm-center feature-font-size">Alkaline</p>
                </div>
            </div>
            <div class="row">
            <p class="text-center text-sm-center"><button class="find-out-more-btn-color find-out-more-btn-prop ps-4 pe-4 pt-2 pb-2">Find Out More</button></p>
            </div>
        </div>
    );

}

export default HegeFeatures;