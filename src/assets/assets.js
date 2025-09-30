import logo from './Images/logo.svg'
import darkLogo from './Images/logo2.svg'
import slider1 from './Images/navbar-image.png'
import slide2 from './Images/navbar-image2.png'
import slide3 from './Images/navbar-image3.png'
import slide4 from './Images/navbar-image4.png'
import mobile from './Images/phone_view.png'
import upload_area from'./Images/upload_area.png';
import profile from './Images/profile_icon.png'

import addAdress from './Images/add_address_image.svg'
import profile_img_1 from './Images/profile_img_1.png' 
import profile_img_2 from './Images/profile_img_2.png' 
import profile_img_3 from './Images/profile_img_3.png'


import product1 from './Images/Analog.png'
import product5 from './Images/Digital.png'
import product10 from './Images/Smart.png'


export const assets = {
    logo,
    darkLogo,
    mobile, 
    addAdress,
    upload_area,
    profile,
    
    profile_img_1,
    profile_img_2,
    profile_img_3,

    product1,product5,product10
}

export const imageSlider = [
      slider1,
      slide2,
      slide3,
      slide4,
];  
export const categories = [
  {
    text: "Analog Watches",
    path: "Analog",
    image: product1,
  },
  {
    text: "Digital Watches",
    path: "Digital",
    image: product5,
  },
  {
    text: "Smart Watches",
    path: "Smart",
    image: product10,
  },
]

export const dummyTestimonial = [
    {
        name: 'Donald Jackman',
        role: 'SWE 1 @ Amazon',
        image: assets.profile_img_1,
        rating:  '⭐⭐⭐⭐⭐',
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'Richard Nelson',
        role: 'SWE 2 @ Samsung',
        image: assets.profile_img_2,
        rating:  '⭐⭐⭐⭐',
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'James Washington',
        role: 'SWE 2 @ Google',
        image: assets.profile_img_3,
        rating:  '⭐⭐⭐',
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
];