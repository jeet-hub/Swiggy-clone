import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Category = () => {

    const [slide, setSlide] = React.useState(0);

    const nextSlide = () => {
        // setSlide((prevSlide) => (prevSlide + 1) % categories.length);
        if(categories.length - 6 == slide) return false;
        setSlide((prevSlide) => prevSlide + 1);
    };

    const prevSlide = () => {
        // setSlide((prevSlide) => (prevSlide - 1 + categories.length) % categories.length);
        if(slide == 0) return false;
        setSlide((prevSlide) => prevSlide - 1);
    };
    // if api there then use this 
    // const [categorie, setCategorie] = useState([]);

    // const fetchCategories = async () => {
    //     try {
    //         const response = await fetch('https://api.example.com/categories');
    //         const data = await response.json();
    //         setCategorie(data);
    //     } catch (error) {
    //         console.error('Error fetching categories:', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchCategories();
    // }, []); 

    // without api  json data

   const categories = [
    { name: 'Pizza', image: '/images/Cakes.jpeg' },
    { name: 'Burgers', image: '/images/Burger.jpeg' },
    { name: 'Sushi', image: '/images/Chinese.jpeg' },
    { name: 'Desserts', image: '/images/Dosa.jpeg' },
    { name: 'Pizza', image: '/images/Cakes.jpeg' },
    { name: 'Burgers', image: '/images/Burger.jpeg' },
    { name: 'Sushi', image: '/images/Chinese.jpeg' },
    { name: 'Desserts', image: '/images/Dosa.jpeg' },
  ];

  return (
    <>
    <div className="max-w-[1200px] mx-auto">
   <div className=" flex items-center justify-between gap-6 px-4 py-4">
    <div className="Headline flex items-center justify-center">
        <h2 className='text-3xl'>What's on your mind?</h2>
    </div>

    <div className="arrow gap-1 flex">
        <div onClick={prevSlide} className="left cursor-pointer  flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7]    rounded-2xl mx-2 ">
            < FaArrowLeft/>
            </div>
         <div onClick={nextSlide} className= "right cursor-pointer flex justify-center items-center  w-[30px] h-[30px] bg-[#e2e2e7] rounded-2xl mx-2 ">
            <FaArrowRight  />
            </div>
    </div>
    
   </div>
   {/* food slider categories  */}
    <div className="categories flex gap-2 overflow-hidden">
        {categories.map((cat, index) => (
           <div style={{
            transform: `translateX(-${slide * 100}%)`,
           }}className="flex-grow w-[180px] flex-shrink-0 cursor-pointer p-4 text-center transition-transform duration-300 hover:scale-105" 
           key={index}>
            <img 
            src={cat.image} 
            alt={cat.name} />
           </div>
        ))}
    </div>
    <hr className='border-[2px] border-gray-300' />
    </div>
    
   </>
  )
}


export default Category