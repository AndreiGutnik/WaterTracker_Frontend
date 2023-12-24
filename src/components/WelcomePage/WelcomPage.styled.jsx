import styled from "styled-components";


export const WelcomeStile = styled.section`
min-height: calc(100vh - 119px);
background-size: cover;
background-size: 100%;
background-position: center bottom;
background-repeat: no-repeat;

@media screen and (max-width: 767px) and 
 (-webkit-min-device-pixel-ratio: 2),
 (max-width: 767px) and (min-resolution: 192dpi) {
  

}
@media screen and (min-width: 768px) and
 (max-width: 1439px) {
  min-height: calc(100vh - 143px);


}
@media screen and (min-width: 768px) and
 (-webkit-min-device-pixel-ratio: 2), (min-width: 768px) and
 (min-resolution: 192dpi) {


}
@media screen and (min-width: 1440px) {
  min-height: calc(100vh - 121px);


}
@media screen and (min-width: 1440px) and 
 (-webkit-min-device-pixel-ratio: 2), (min-width: 1440px) and
 (min-resolution: 192dpi) {


 }
`;

export const WaterTracker = styled.div`
@media screen and (max-width: 767px) { padding-bottom: 40px; }
@media screen and (min-width: 768px) and (max-width: 1439px) {
  padding-bottom: 50px; }
@media only screen and (min-width: 1440px) {
  display: flex;
  justify-content: center;
}
`;

