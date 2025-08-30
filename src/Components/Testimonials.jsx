import React from 'react';
import { assets, dummyTestimonial } from '../assets/assets';


const Testimonials = () => {
  
  const [visible, setVisible] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const divRef = React.useRef(null);

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };

    return (
    
      <div id='testimonials' className='pb-14 md:px-10 px-5 flex flex-col w-full space-y-7 scroll-mt-24 '>

         <h2 className='text-3xl flex border-b-2 w-32'>Testimonials</h2>
          
          <div className='max-w-4xl grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center '>
             {dummyTestimonial.map((testimonial, index)=>(
        <div key={index} ref={divRef} onMouseMove={handleMouseMove} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}
            className="relative md:w-60 lg:w-68 w-80 h-80 rounded-xl p-0.5 bg-white backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer"
        >
            {visible && (
                <div className="pointer-events-none blur-xl bg-gradient-to-r from-red-400 via-pink-500 to-purple-900 size-60 absolute z-0 transition-opacity duration-300"
                    style={{ top: position.y - 120, left: position.x - 120,}}
                />
            )}

            
              <div className="relative z-10 bg-white p-6 h-full w-full rounded-[10px] flex flex-col items-center justify-center text-center">
                <img src={testimonial.image} className="w-24 h-24 rounded-full shadow-md my-4" />
                <h2 className="text-sm text-gray-800 mb-1">{testimonial.feedback}</h2>
                <p className="text-sm text-indigo-500 font-medium mb-4">{testimonial.name}</p>
                <p className="text-sm text-gray-500 mb-4 px-4">{testimonial.rating}</p>
            </div>
        </div> ))}
          </div>
        </div>
    );
}

export default Testimonials






// return (
  //   <div id='testimonials' className='pb-14 md:px-0 flex flex-col w-full space-y-7 scroll-mt-24 '>
  //       <h2 className='text-3xl flex border-b-2 w-32 relative left-10'>Testimonials</h2>
  //       <p className='md:text-base text-gray-700 mt-3'></p>

  //             <div className='flex flex-col items-center '>
  //               <div className='grid sm:grid-cols-2 lg:grid-cols-3  gap-8 overflow-hidden'>
  //               {dummyTestimonial.map((testimonial, index)=>(
  //                 <div key={index}
  //                 className=' h-68 w-72  text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[opx_4px_15px_0px] shadow-black/5 overflow-hidden '>
  //                     <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
  //                       <img src={testimonial.image} alt={testimonial.name}
  //                       className='h-12 w-12 rounded-full' />
  //                       <div>
  //                         <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
  //                         <p className='text-gray-800/80'>{testimonial.role}</p>
  //                       </div>
  //                     </div>
  //                     <p className='p-[10px_0px_0px_15px]'>{testimonial.rating}</p>  
  //                     <p className='m-5'>{testimonial.feedback}</p>
  //                     <p className='text-blue-500 underline px-5 hover:cursor-pointer'>Read more</p>
  //                 </div>
  //               ))}
  //             </div>
  //             </div>
  //   </div>
    
  // )
