
const Client = () => {


  return (
    <div className='flex justify-around  h-fit bg-[#222a36] ' id="services">
    <div className='flex  p-16 gap-20  '>
         <div className="flex gap-5">
          <div className='w-[20rem] h-9'><img src='/mypic.jpg'></img></div>
          <div className='text-white font-mono max-w-[490px] m-8 p-4'>
             <p className=" text-6xl">“</p>
             <p className=" -mt-3 text-1xl font-bold">Experienced Full Stack Developer proficient in building scalable and responsive web applications using cutting-edge technologies such as React for front-end development,
                Node.js and Express for server-side scripting, and MongoDB for database management. Well-versed in designing and implementing RESTful APIs, ensuring seamless communication between the client and server. 
                Additionally, skilled in utilizing Tailwind CSS for crafting modern and visually appealing user interfaces. </p>
          </div>

         </div>
         <div className=' font-serif text-3xl mb-12'>Satisfaction <br></br> Clients<br></br> <span className='text-[#676CDB] mt-4'>100 %</span><br></br> Clients On <br></br>Worldwide <br></br><span className='text-[#676CDB]'>+ 80 </span><br></br>Projects Done <br></br><span className='text-[#676CDB]'>743</span></div>
    </div>
</div>
  );
};

export default Client;
