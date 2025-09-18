import logo from './Images/logo.svg'
import darkLogo from './Images/logo2.svg'
import slider1 from './Images/navbar-image.png'
import slide2 from './Images/navbar-image2.png'
import slide3 from './Images/navbar-image3.png'
import slide4 from './Images/navbar-image4.png'
import mobile from './Images/phone_view.png'
import Bg2 from './Images/background.png'
import upload_area from'./Images/upload_area.png';
import profile from './Images/profile_icon.png'
import testimonials from './Images/background-2.jpg'

import addAdress from './Images/add_address_image.svg'
import profile_img_1 from './Images/profile_img_1.png' 
import profile_img_2 from './Images/profile_img_2.png' 
import profile_img_3 from './Images/profile_img_3.png'


import product1 from './Images/Product-1.png'
import product5 from './Images/DigitalW-1.png'
import product10 from './Images/SmartW-2.png'


export const assets = {
    logo,
    darkLogo,
    mobile, 
    Bg2,
    addAdress,
    upload_area,
    profile,
    
    testimonials,
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
    bgColor: "#ffff",
  },
  {
    text: "Digital Watches",
    path: "Digital",
    image: product5,
    bgColor: "#ffff",
  },
  {
    text: "Smart Waatches",
    path: "Smart",
    image: product10,
    bgColor: "#ffff",
  },
]

// export const dummyProducts = [
//   //Analog Watches
//   {
//         _id: "gd46g23h",
//         name: "rolex analog",
//         category: "Analog",
//         discription:[
//             "Classic Analog Watch – Elegant design with premium leather strap, perfect for formal wear.",
//             "Luxury Chronograph – Stylish, durable, and crafted with precision for timeless charm.",
//             "it is a perfect blend of style, precision, and personality."
//       ],
//         price: 100,
//         offerPrice: 89,
//         image: [product1],
//         createdAt: "2025-03-25T07:17:46.018Z",
//         updatedAt: "2025-03-25T07:18:13.103Z",
//         inStock: true,
//   },
//   {
//         _id: "gd47g34h",
//         name: "cronografo D1",
//         category: "analog",
//         discription:[
//             "Classic Analog Watch – Elegant design with premium leather strap, perfect for formal wear.",
//             "Luxury Chronograph – Stylish, durable, and crafted with precision for timeless charm.",
//             "it is a perfect blend of style, precision, and personality."
//       ],
//         price: 119,
//         offerPrice: 99,
//         image:[product2],
//         createdAt: "2025-03-25T07:17:46.018Z",
//         updatedAt: "2025-03-25T07:18:13.103Z",
//         inStock: true,
//   },
//    {
//         _id: "gd48g45h",
//         name: "Maserati Clasic",
//         category: "analog",
//         discription:[
//             "Classic Analog Watch – Elegant design with premium leather strap, perfect for formal wear.",
//             "Luxury Chronograph – Stylish, durable, and crafted with precision for timeless charm.",
//             "it is a perfect blend of style, precision, and personality."
//       ],
//         price: 99,
//         offerPrice: 69,
//         image: [product3],
//         createdAt: "2025-03-25T07:17:46.018Z",
//         updatedAt: "2025-03-25T07:18:13.103Z",
//         inStock: true,
//   },
//    {
//         _id: "gd49g56h",
//         name: "Girard Deep Drive",
//         category: "analog",
//         discription:[
//             "Classic Analog Watch – Elegant design with premium leather strap, perfect for formal wear.",
//             "Luxury Chronograph – Stylish, durable, and crafted with precision for timeless charm.",
//             "it is a perfect blend of style, precision, and personality."
//       ],
//         price: 149,
//         offerPrice: 119,
//         image:[product4],
//         createdAt: "2025-03-25T07:17:46.018Z",
//         updatedAt: "2025-03-25T07:18:13.103Z",
//         inStock: true,
//   },
//    //Digital Watches
//    {
//         _id: "ga49g56h",
//         name: "bluetech",
//         category: "digital",
//         discription:[
//             "Clear Display – Easy-to-read digital time with bright backlight.",
//             "Multi-Functional – Comes with alarm, stopwatch, and calendar features.",
//             "Durable Design – Strong build quality, perfect for daily wear."
//         ],
//         price: 499,
//         offerPrice: 449,
//         image: [product5],
//         createdAt: "2025-03-25T07:17:46.018Z",
//         updatedAt: "2025-03-25T07:18:13.103Z",
//         inStock: true,
//   },
//    {
//         _id: "ek51j12k",
//         name: "Hala multifunction",
//         category: "digital",
//         discription:[
//             "Clear Display – Easy-to-read digital time with bright backlight.",
//             "Multi-Functional – Comes with alarm, stopwatch, and calendar features.",
//             "Durable Design – Strong build quality, perfect for daily wear."
//         ],
//         price: 699,
//         offerPrice: 599,
//         image: [product6],
//         createdAt: "2025-03-25T07:17:46.018Z",
//         updatedAt: "2025-03-25T07:18:13.103Z",
//         inStock: true,
//   },
//    {
//         _id: "ek52j23k",
//         name: "mobspot",
//         category: "digital",
//         discription:[
//             "Clear Display – Easy-to-read digital time with bright backlight.",
//             "Multi-Functional – Comes with alarm, stopwatch, and calendar features.",
//             "Durable Design – Strong build quality, perfect for daily wear."
//         ],
//         price: 199,
//         offerPrice: 149,
//         image: [product7],
//         createdAt: "2025-03-25T07:17:46.018Z",
//         updatedAt: "2025-03-25T07:18:13.103Z",
//         inStock: true,
//   },
//    {
//         _id: "ek53j34k",
//         name: "selloria",
//         category: "digital",
//         discription:[
//             "Clear Display – Easy-to-read digital time with bright backlight.",
//             "Multi-Functional – Comes with alarm, stopwatch, and calendar features.",
//             "Durable Design – Strong build quality, perfect for daily wear."
//         ],
//         price: 349,
//         offerPrice: 299,
//         image: [product8],
//         createdAt: "2025-03-25T07:17:46.018Z",
//         updatedAt: "2025-03-25T07:18:13.103Z",
//         inStock: true,
//   },
//    //Smart Watches
//    {
//         _id: "ek54j45k",
//         name: "boAt Wave Fortune",
//         category: "Smart",
//         discription:[
//             "Smart Watch – Stay connected with health tracking, notifications, and modern technology.",
//             "Health & Fitness Tracking – Monitor heart rate, steps, sleep, and calories.",
//             "Smart Notifications – Stay updated with calls, messages, and app alerts."
//       ],
//         price: 749,
//         offerPrice: 649,
//         image: [product9],
//         createdAt: "2025-03-25T07:17:46.018Z",
//         updatedAt: "2025-03-25T07:18:13.103Z",
//         inStock: true,
//   },
//    {
//         _id: "ek55j56k",
//         name: "Noise Pulse",
//         category: "Smart",
//         discription:[
//             "Smart Watch – Stay connected with health tracking, notifications, and modern technology.",
//             "Health & Fitness Tracking – Monitor heart rate, steps, sleep, and calories.",
//             "Smart Notifications – Stay updated with calls, messages, and app alerts."
//       ],
//         price: 449,
//         offerPrice: 399,
//         image: [product10],
//         createdAt: "2025-03-25T07:17:46.018Z",
//         updatedAt: "2025-03-25T07:18:13.103Z",
//         inStock: true,
//   },
//    {
//         _id: "gd47g36h",
//         name: "Fire Bolt hurricane",
//         category: "Smart",
//         discription:[
//             "Smart Watch – Stay connected with health tracking, notifications, and modern technology.",
//             "Health & Fitness Tracking – Monitor heart rate, steps, sleep, and calories.",
//             "Smart Notifications – Stay updated with calls, messages, and app alerts."
//       ],
//         price: 249,
//         offerPrice: 199,
//         image: [product11],
//         createdAt: "2025-03-25T07:17:46.018Z",
//         updatedAt: "2025-03-25T07:18:13.103Z",
//         inStock: true,
//   },
//    {
//         _id: "ek56j67k",
//         name: "samsung",
//         category: "Smart",
//         discription:[
//             "Smart Watch – Stay connected with health tracking, notifications, and modern technology.",
//             "Health & Fitness Tracking – Monitor heart rate, steps, sleep, and calories.",
//             "Smart Notifications – Stay updated with calls, messages, and app alerts."
//       ],
//         price: 259,
//         offerPrice: 200,
//         image: [product12],
//         createdAt: "2025-03-25T07:17:46.018Z",
//         updatedAt: "2025-03-25T07:18:13.103Z",
//         inStock: true,
//   },
     
// ]

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

// export const dummyAddress = [
//   {
//     _id: "67b5b9e54ea97f71bbc196a0",
//     userId: "67b5880e4d09769c5ca61644",
//     firstName: "Great",
//     lastName: "Stack",
//     email: "user.greatstack@gmail.com",
//     street: "Street 123",
//     city: "Main City",
//     state: "New State",
//     zipcode: 123456,
//     country: "IN",
//     phone: "1234567890",
//   },
// ];



// export const dummyOrders = [
//   {
//     _id: "67e2589a8f87e86400",
//     userId: "67b5880e4d09769c5ca61644",
//     items: [
//       {
//         product: dummyProducts[3],
//         quantity: 2,
//         _id: "67e2589a8f3366786401",
//       },
//     ],
//     amount: 89,
//     address: dummyAddress[0],
//     status: "Order Placed",
//     paymentType: "Online",
//     isPaid: true,
//     createdAt: "2025-03-25T07:17:46.018Z",
//     updatedAt: "2025-03-25T07:18:13.103Z",
//   },
//   {
//     _id: "67e258798f8767863f2",
//     userId: "67b5880e4d09769c5ca61644",
//     items: [
//       {
//         product: dummyProducts[0],
//         quantity: 1,
//         _id: "67e258798f3667863f3",
//       },
//       {
//         product: dummyProducts[1],
//         quantity: 1,
//         _id: "67e258798f667863f4",
//       },
//     ],
//     amount: 43,
//     address: dummyAddress[0],
//     status: "Order Placed",
//     paymentType: "COD",
//     isPaid: false,
//     createdAt: "2025-03-25T07:17:13.068Z",
//     updatedAt: "2025-03-25T07:17:13.068Z",
//   },
// ];
