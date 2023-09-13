// import React from "react";

// function Useless (){
//     return(
//         <>
//             <h1 className=" bg-red-500">Hello </h1>
//         </>
//     )
// }

// export default Useless;

// import React, { useState } from 'react';

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     <>
//     <div className=' bg-blue-400'>
//         <h1 className=" text-center  text-5xl p-20"> WELCOME TO OUR WEBSITE</h1>
//     </div>
//     </>,
//     'Slide 2 Content',
//     'Slide 3 Content',
//     'Slide 4 Content',
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((currentSlide + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="relative bg-gray-100 p-4">
//       <div className="overflow-hidden relative">
//         <div
//           className="flex transition-transform duration-300 transform"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className="w-full flex-shrink-0 h-64 bg-white rounded-lg shadow-md p-4"
//             >
//               {slide}
//             </div>
//           ))}
//         </div>
//       </div>
//       <button
//         className="absolute top-1/2 transform -translate-y-1/2 left-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow-md"
//         onClick={prevSlide}
//       >
//         Previous
//       </button>
//       <button
//         className="absolute top-1/2 transform -translate-y-1/2 right-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow-md"
//         onClick={nextSlide}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Carousel;

// auto carousel 

// import React, { useState, useEffect } from 'react';

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     'Slide 1 Content',
//     <>
//         <div className=' bg-blue-400'>
//             <h1 className=" text-center  text-5xl p-20"> WELCOME TO OUR WEBSITE</h1>
//         </div>
//         </>,
//     'Slide 3 Content',
//     'Slide 4 Content',
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((currentSlide + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
//   };

//   // Automatic transition every 5 seconds
//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     nextSlide();
//   //   }, 5000); // Change slide every 5 seconds

//     useEffect(() => {
//       const interval = setInterval(() => {
//         nextSlide();
//       }, 5000);
    
//       return () => {
//         clearInterval(interval);
//       };
//     }, [nextSlide]);

//   //   return () => {
//   //     clearInterval(interval);
//   //   };
//   // }, [currentSlide]);

//   return (
//     <div className="relative bg-gray-100 h-screen p-4">
//       <div className="absolute inset-0 flex transition-transform duration-300 transform">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`w-full h-full flex-shrink-0 bg-white rounded-lg shadow-md p-4 transform ${
//               index === currentSlide ? 'translate-x-0' : 'translate-x-full'
//             }`}
//           >
//             {slide}
//           </div>
//         ))}
//       </div>
//       <button
//         className="absolute top-1/2 transform -translate-y-1/2 left-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow-md"
//         onClick={prevSlide}
//       >
//         Previous
//       </button>
//       <button
//         className="absolute top-1/2 transform -translate-y-1/2 right-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow-md"
//         onClick={nextSlide}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Carousel;

