import Image from "next/image";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Link from "next/link";



const pros=[
{
data:"15+",
desc:"Lat na rynku"
},
{
data:"10",
desc:"Wykwalifikowanych trenerów"
},
{
data:"100+",
desc:"Zadowolonych klientów"
},
{
data:"3",
desc:"Sale treningowe"
},

]

const team=[
{
img:"/team1.jpg",
name:"Lorem Ipsum",
role:"Muya Thai Trainer"
},
{
img:"/team1.jpg",
name:"Lorem Ipsum",
role:"Muya Thai Trainer"
},
{
img:"/team1.jpg",
name:"Lorem Ipsum",
role:"Muya Thai Trainer"
},
]

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Menu />
    <div className="w-full h-[700px] relative ">
      <Image
        src="/bg.jpg"
        alt="Picture of the author"
        fill
        className="object-cover opacity-20"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[90%]  md:w-[70%] xl:w-[40%]">
        <h1 className="md:text-8xl text-6xl font-bold mb-4 text-orange-400">Fight <span className="text-white">Gym</span></h1>
        <p className="md:text-xl text-lg w-[80%] sm:w-[75%]  md:w-[70%] lg:w-[50%] xl:w-[70%] mx-auto mt-16 mb-16 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna eget nunc fringilla ultrices. Etiam semper eros odio, non congue sem ornare nec. Nam sed vulputate lorem. Suspendisse et maximus nibh, a scelerisque ipsum. </p>
        <Link href="/grafik">
  <span className="bg-orange-400 text-white px-6 py-4 mt-10 w-1/2 md:w-[37.5%] mx-auto rounded-xl hover:bg-orange-200 hover:text-black hover:cursor-pointer transition text-xl font-black flex justify-center">
    Grafik
  </span>
</Link>
        
      </div>
    </div>

    <div className="relative min-h-screen bg-white/10">
      {/* Tło z opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: 'url(/main_bg.jpg)'
        }}
      ></div>
      
      {/* Zawartość */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between w-full md:px-15 lg:px-30 xl:px-50 py-10 md:py-20">
      <div className="w-3/4 mx-auto md:w-1/2 md:pr-10 text-center md:text-left">
         <h1 className="text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-orange-400 w-full sm:w-[90%]">Fight <span className="text-white">Gym</span></h1>
        <div className="w-[95%] lg:w-[75%] mx-auto md:mx-0 ">
        <p className="text-[16px] lg:text-lg mb-4 mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna eget nunc fringilla ultrices. Etiam semper eros odio, non congue sem ornare nec. Nam sed vulputate lorem. Suspendisse et maximus nibh, a scelerisque ipsum.
        </p>
        <p className="text-[16px] lg:text-lg">
          Donec euismod, nisl eget consectetur sagittis, nisl nunc egestas nisi, euismod aliquam nisl nunc euismod nisi. Sed euismod, nisl eget consectetur sagittis, nisl nunc egestas nisi, euismod aliquam nisl nunc euismod nisi.
        </p> 
        
        <Link href="/co_trenujemy" className="block w-2/3 mx-auto md:mx-0">
  <span className="bg-orange-400 text-white px-6  py-4 mt-10 w-full rounded-xl hover:bg-orange-200 hover:text-black hover:cursor-pointer transition text-xl font-black flex justify-center">
    Dowiedz się więcej
  </span>
</Link>
       
        </div>
      </div>
      <div className=" mt-20 relative w-[75%] mx-auto md:w-[300px] lg:w-[400px] h-[60vh] sm:h-[75vh] md:h-auto pl-10 flex items-center justify-center">
        <Image 
      src="/abt_us.jpg" 
      alt="Mission Image"
      fill
      className="rounded-lg shadow-lg border-2 border-orange-400 object-cover"
      
    />
      </div>
    </div>
    <div className="h-60 sm:h-80 md:h-40 bg-orange-400/70 w-full mt-20 flex flex-row flex-wrap">
        {pros.map((el,idx)=>(
          <div 
          key={idx} 
          className={`w-1/2 md:w-1/4 h-1/2 md:h-full float-left flex flex-col justify-center items-center md:border-b-0  md:border-r border-white last:border-0 text-center px-2
          ${idx === 0 || idx === 1 ? 'border-b' : ''} 
          ${idx === 0 || idx === 2 ? 'border-r' : ''}`}
>
  <h2 className="text-3xl sm:text-5xl font-bold text-white mb-5">{el.data}</h2>
  <p className="text-sm ms:text-xl text-gray-200 font-light">{el.desc}</p>
</div>
        ))}



    </div>


     <div className="relative z-10 flex flex-col justify-between w-full py-20">
      <h1 className="text-7xl font-bold mb-5 sm:mb-15 md:mb-4 text-orange-400 w-[80%] mx-auto md:mx-0 md:px-5 lg:px-10 xl:px-20 text-center md:text-left">Our <span className="text-white">Team</span></h1>
        <div className="w-full md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto flex flex-col md:flex-row justify-between ">
        {team.map((el,idx)=>(
          <div key={idx} className="flex flex-col  text-cente w-[275px] sm:w-[350px] mx-auto md:mx-0 md:w-[30%] lg:w-[30%] xl:w-1/4 mt-15 text-center">
            <div className="w-full h-[400px] sm:h-[500px] md:h-[350px] lg:h-[400px] relative ">
              <Image 
                src={el.img} 
                alt={el.name}
                fill
                className=" object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl md:text-3xl lg:text-4xl font-light text-white mb-2 mt-4">{el.name}</h2>
              <p className="text-xl md:text-lg font-bold text-orange-400">{el.role}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
