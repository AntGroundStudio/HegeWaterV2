import Sec1Img from 'Assets/sec_1_img.svg'
import './AboutHege.css';

function AboutHege() {
    return (
        <div class="container">
            <div class="row p-4 mt-sm-5 mt-3">
                <div class="col-12 col-sm-6 text-center m-0 p-0 order-sm-1 order-2">
                    <img src={Sec1Img} class="about-image-res" alt="Hege" />
                </div>
                <div class="col-12 col-sm-6 text-left order-sm-2 order-1">
                    <div class="mt-sm-5 mt-3">
                        <h4 class="display-4 text-center text-sm-start about-title-font-weight">What Is</h4>
                        <h4 class="display-4 text-center text-sm-start mineral-water-font-color about-title-font-weight">Natural Mineral Water</h4>
                        <p class="text-center text-sm-start about-paragraph-font-size">
                            Natural mineral water is made by nature. It is directly sourced from underground aquifers near Mountains or Natural Springs that are thoroughly protected from any form of contamination.
                        </p>
                        <p class="text-center text-sm-start"><button class="read-more-about-btn-color read-more-about-btn-prop read-more-about-btn-font-size ps-4 pe-4 pt-2 pb-2">Read More</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutHege;