import './main.scss'
import logo from './assets/logo.png'
import facebook from './assets/icons/facebook.png'
import pinterest from './assets/icons/pinterest.png'
import instagram from './assets/icons/instagram.png'
import hotel from './assets/icons/hotel.png'
import plane from './assets/icons/plane.png'
import taxi from './assets/icons/taxi.png'
import car from './assets/icons/car.png'
import search from './assets/icons/search.png'


const wanderlustLogo = document.querySelector('.logo img')
wanderlustLogo.src = logo

const icons = document.querySelectorAll('.icons a img')
icons[0].src = facebook;
icons[1].src = pinterest;
icons[2].src = instagram;

const buttons = document.querySelectorAll('.form-buttons button img')
buttons[0].src = hotel;
buttons[1].src = plane;
buttons[2].src = taxi;
buttons[3].src = car;

const submit = document.querySelector('form button img')
submit.src = search
