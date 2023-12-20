import alexandra from '../img/alexandra-rossi.jpg';
import john from '../img/john-doe.jpg';
import karl from '../img/karl-miller.jpg';
import kate from '../img/kate-stevenson.jpg';
import martha from '../img/martha-williams.jpg';
import min from '../img/min-wang.jpg';
import peter from '../img/peter-anderson.jpg';
import philip from '../img/philip-brown.jpg';
import robert from '../img/robert-marino.jpg';
import sarah from '../img/sarah-forrester.jpg';
import serena from '../img/serena-johnson.jpg';
import picPlaceholder from '../img/pic-placeholder.png';
// Icons and logo
import logo from '../img/logo.svg';
import webpackLogo from '../img/webpack.png';
import javascriptLogo from '../img/javascript.png';
import chartjsLogo from '../img/chartjs.svg';

// Images
const alexandraImgs = document.querySelectorAll('.alexandra');
const johnImgs = document.querySelectorAll('.john');
const karlImgs = document.querySelectorAll('.karl');
const kateImgs = document.querySelectorAll('.kate');
const marthaImgs = document.querySelectorAll('.martha');
const minImgs = document.querySelectorAll('.min');
const peterImgs = document.querySelectorAll('.peter');
const philipImgs = document.querySelectorAll('.philip');
const robertImgs = document.querySelectorAll('.robert');
const sarahImgs = document.querySelectorAll('.sarah');
const serenaImgs = document.querySelectorAll('.serena');
const picPlaceholderImgs = document.querySelectorAll('.pic-placeholder');
const logoImgs = document.querySelectorAll('.logo__img');
// Icons
const webpackImgs = document.querySelectorAll('.webpack');
const javascriptImgs = document.querySelectorAll('.javascript');
const chartjsImgs = document.querySelectorAll('.chartjs');

const setImages = (imgNodes, imgUrl) => {
    imgNodes.forEach(img => {
        img.src = imgUrl
        if(imgUrl !==picPlaceholder && imgUrl !==logo) {
            const fullName= imgUrl.split('/').slice(-1)[0].split('-')
            const name = fullName[0].charAt(0).toUpperCase() + fullName[0].slice(1)
            const lastName = fullName[1].split('.')[0].charAt(0).toUpperCase() + fullName[1].split('.')[0].slice(1)
            img.alt = `${name} ${lastName}`
        }
    });
}
// home page and credits page
setImages(alexandraImgs, alexandra)
setImages(johnImgs, john)
setImages(karlImgs, karl)
setImages(kateImgs, kate)
setImages(marthaImgs, martha)
setImages(minImgs, min)
setImages(peterImgs, peter)
setImages(philipImgs, philip)
setImages(robertImgs, robert)
setImages(sarahImgs, sarah)
setImages(serenaImgs, serena)
setImages(picPlaceholderImgs, picPlaceholder)
setImages(logoImgs, logo)

// Set Icons 
const setIcons = (imgNodes, imgUrl) => {
    imgNodes.forEach(img => img.src = imgUrl);
}
setIcons(webpackImgs, webpackLogo)
setIcons(javascriptImgs, javascriptLogo)
setIcons(chartjsImgs, chartjsLogo)