const Marquees = () => {
  return (
    <div className="bg-black py-10 overflow-hidden">
      
      <div className="relative w-full overflow-hidden">
        
        {/* Gradient fade edges (premium look) */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Marquee Track */}
        <div className="flex whitespace-nowrap animate-marquee gap-10">
          
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-10">
              <span className="text-4xl md:text-5xl lg:text-6xl font-style uppercase tracking-wider text-white">
                Host your private event at Locals!
              </span>

              <span className="text-4xl md:text-5xl lg:text-6xl font-style uppercase tracking-wider text-[#6F4E37]">
                Book Your Spot Today
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Marquees;