import { slateGray, cloudyGray } from "./colors";
if(location.href.includes("index.html")){
    Chart.defaults.font.family = "'Montserrat', sans-serif";
    Chart.defaults.color = slateGray;
    Chart.defaults.borderColor = cloudyGray;    
}