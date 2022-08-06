import './HegeBenefits.css'
import AcidityIcon from 'Assets/acidity.svg';
import BoneHealthIcon from 'Assets/bone.svg';
import BloodPressureIcon from 'Assets/bp.svg';
import HairStrenghtIcon from 'Assets/hair.svg'

function HegeBenefits() {
    return (
        <div class="benefits-background">
            <div class="container">
                <div class="p-4 mt-sm-5 mt-3">
                    <div class="card round-benefits-card m-1 p-1 m-sm-5 p-sm-5">
                        <div class="card-body">
                            <div class="row p-4 mt-sm-5 mt-3">
                                <h4 class="display-4 text-center text-sm-center hege-benefits-title-font-weight">A World Of <span class="hege-benefits-font-color">Benefits</span></h4>
                            </div>
                            <div class="row p-sm-4 ps-4 pe-4 d-flex justify-content-center">
                                <div class="col-12 col-sm-5 text-center pb-2 ms-2 me-2">
                                    <img src={AcidityIcon} alt="Hege" class="p-4 benefit-image-res" />
                                    <p class="text-center text-sm-center benefit-font-size">Reduces Acidity</p>
                                </div>
                                <div class="col-12 col-sm-5 text-center pb-2 ms-2 me-2">
                                    <img src={BoneHealthIcon} alt="Hege" class="p-4 benefit-image-res" />
                                    <p class="text-center text-sm-center benefit-font-size">Improves Bone Health</p>
                                </div>
                                <div class="col-12 col-sm-5 text-center pb-2 ms-2 me-2">
                                    <img src={BloodPressureIcon} alt="Hege" class="p-4 benefit-image-res" />
                                    <p class="text-center text-sm-center benefit-font-size">Stabilises Blood Pressure</p>
                                </div>
                                <div class="col-12 col-sm-5 text-center pb-2 ms-2 me-2">
                                    <img src={HairStrenghtIcon} alt="Hege" class="p-4 benefit-image-res" />
                                    <p class="text-center text-sm-center benefit-font-size">Improves Hair Strength</p>
                                </div>
                            </div>
                            <div class="row">
                                <p class="text-center text-sm-center"><button class="jump-into-health-btn-color jump-into-health-btn-prop jump-into-health-btn-font-size ps-4 pe-4 pt-2 pb-2">Jump into health</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HegeBenefits;