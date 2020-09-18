import '@babel/polyfill';
import '@stimulus/polyfills';
import 'focus-visible';
import 'ninelines-ua-parser';
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import $ from 'jquery';

svg4everybody();
objectFitImages();

window.$ = $;
window.jQuery = $;
