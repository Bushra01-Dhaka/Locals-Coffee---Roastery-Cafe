import React from "react";

const images = [
  { id: 1, src: "https://i.ibb.co.com/PZz7sDPF/1.png", title: "Cozy Interior" },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1567309966795-5ad24aa39971?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhZmUlMjBjb2ZmZWUlMjBwb3VyaW5nfGVufDB8fDB8fHww",
    title: "Fresh Brew",
  },
  {
    id: 3,
    src: "https://i.ibb.co.com/Kjhf9mR7/10.webp",
    title: "Happy Moments",
  },
  {
    id: 4,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQPcpkTy3vOTXlRyzCq072Ln0vGMkfGEcBw&s",
    title: "Cozy Interior setup",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1638865097666-6a877406e547?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxjYWZlJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Delicious Bites",
  },
  {
    id: 6,
    src: "https://i.ibb.co.com/RkKRg242/4.webp",
    title: "Happy Croud",
  },
   {
    id: 7,
    src: "https://i.ibb.co.com/1GQzfMDK/15.png",
    title: "Morning Coffee",
  },
  {
    id: 8,
    src: "https://i.ibb.co.com/rGTKG0FV/16.png",
    title: "Drinks Menu",
  },
  {
    id: 9,
    src: "https://i.ibb.co.com/hxGw7Cz8/3.png ",
    title: "Cozy Seating",
  },
   {
    id: 10,
    src: "https://img1.wsimg.com/isteam/ip/e86c7757-df0b-4736-8f37-5e513576080f/IMG_6532.JPG/:/cr=t:0%25,l:0%25,w:100%25,h:80.91%25/rs=w:1240,h:620,cg:true ",
    title: "Delicious Food",
  },
  {
    id: 11,
    src: "https://i.ibb.co.com/WbQPkQB/5.jpg ",
    title: "Cafe Outside",
  },
  {
    id: 12,
    src: "https://i.ibb.co.com/HD46DZHQ/9.png ",
    title: "Cafe direction",
  },
  {
    id: 13,
    src: "https://i.ibb.co.com/fVfnzVBF/14.png ",
    title: "Handcraft Decor",
  },
  
];

const Gallery = () => {
  return (
    <section className="bg-black flex justify-center items-center  py-20 px-6  md:px-20">
      <div>
        {/* Section Header */}
        <div 
         data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1000"
        className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-style tracking-wide">
            Our Gallery
          </h2>
          <p className="uppercase mt-3">
            Moments, flavors, and experiences we love to share
          </p>
        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img) => (
            <div
              key={img?.id}
              className="relative overflow-hidden rounded-xl group cursor-pointer"
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-auto object-cover rounded-xl transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-medium tracking-wide">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
