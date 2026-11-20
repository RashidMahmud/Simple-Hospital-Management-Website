import './style.css'
import { createIcons, icons } from 'lucide'

import { Navbar } from './components/Navbar.js'
import { Hero } from './components/Hero.js'
import { About } from './components/About.js'
import { Performance, initPerformanceChart } from './components/Performance.js'
import { Departments } from './components/Departments.js'
import { Booking, initBookingForm } from './components/Booking.js'
import { Footer } from './components/Footer.js'

document.querySelector('#app').innerHTML = [
  Navbar(), Hero(), About(), Departments(), Performance(), Booking(), Footer(),
].join('')

initPerformanceChart()
initBookingForm()
createIcons({ icons }) // turns every <i data-lucide="..."> into an SVG icon
