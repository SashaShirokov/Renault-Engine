// 3rd party packages from NPM
import $ from 'jquery';
import slick from 'slick-carousel';

// Our modules / classes
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import HeroSlider from './modules/HeroSlider';

// Instantiate a new object using our modules/classes
let mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.event-summary'), '85%');
new RevealOnScroll($('.team'), '60%');

let stickeHeader = new StickyHeader();
let modal = new Modal();
var heroSlider = new HeroSlider();
