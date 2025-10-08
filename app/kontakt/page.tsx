import React from 'react';
import Image from 'next/image';
import Menu from '../components/menu';
import Footer from '../components/footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactItems = [
  {
    icon: MapPin,
    title: "Lokalizacja",
    text: "Warszawa, Polska",

  },
  {
    icon: Phone,
    title: "Telefon",
    text: "+48 600 700 800",

  },
  {
    icon: Mail,
    title: "E-mail",
    text: "kontakt@example.com",

  },
  {
    icon: Clock,
    title: "Godziny pracy",
    text: "Pon–Pt: 9–17",

  },
];

const KontaktPage = () => {
    return (
   <div className='bg-stone-900'>
  <Menu />

  {/* Hero */}
  <div className='w-full bg-black h-[40vh] relative'>
    <Image
      src="/main_bg.jpg"
      alt="Background"
      fill
      className="object-cover opacity-20"
    />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[90%] lg:w-[70%] xl:w-[40%]">
      <h1 className="lg:text-8xl text-6xl font-bold mb-4 text-orange-400">
        Contact <span className="text-white">Us</span>
      </h1>
    </div>
  </div>

  {/* Sekcja kontakt */}
  <div className='w-[90%] lg:w-[75%] mx-auto flex flex-col lg:flex-row justify-between my-20 px-4 gap-10'>
    
    {/* Formularz */}
    <form className='flex flex-col w-full lg:w-1/2 bg-stone-800 rounded-sm px-7 py-5 text-gray-400' method="POST">
      <h2 className='py-5 mb-5 text-5xl text-orange-400 font-light'>Contact us</h2>

      <label className="flex flex-col mb-4">
        Imię:
        <input
          type="text"
          name="name"
          placeholder='Name'
          required
          className='w-full p-3 mt-2 rounded-sm border border-gray-400 bg-stone-700 text-white placeholder:text-white placeholder:text-sm focus:outline-none'
        />
      </label>

      <label className="flex flex-col mb-4">
        E-mail:
        <input
          type="email"
          name="email"
          placeholder='Email'
          required
          className='w-full p-3 mt-2 rounded-sm border border-gray-400 bg-stone-700 text-white placeholder:text-white placeholder:text-sm focus:outline-none'
        />
      </label>

      <label className="flex flex-col mb-4">
        Wiadomość:
        <textarea
          placeholder='Message'
          required
          className='w-full h-32 p-3 mt-2 rounded-sm border border-gray-400 bg-stone-700 text-white placeholder:text-white placeholder:text-sm focus:outline-none resize-none'
        />
      </label>

      <button
        type="submit"
        className='w-full border mt-5 border-gray-400 py-2 rounded-full text-white hover:border-white hover:cursor-pointer  transition'
      >
        Wyślij
      </button>
    </form>

    {/* Prawa kolumna: info, boxy, mapa */}
    <div className='w-full lg:w-1/2 flex flex-col gap-8'>
      <div className='text-stone-400'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna eget nunc fringilla ultrices. Etiam semper eros odio, non congue sem ornare nec.
      </div>

      {/* Boxy kontaktowe */}
      <div className="w-full flex flex-wrap justify-between gap-6">
        {contactItems.map(({ icon: Icon, title, text }, i) => (
          <div
            key={i}
            className="w-full sm:w-[45%] h-auto bg-stone-800 rounded-2xl flex flex-col items-center justify-center p-4 hover:shadow-lg transition text-center"
          >
            <Icon className='w-8 h-8 mb-3 text-orange-400' />
            <p className="font-semibold text-gray-500">{title}</p>
            <p className="text-sm text-gray-200 text-center px-2">{text}</p>
          </div>
        ))}
      </div>

      {/* Mapa */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d468598.46914287726!2d18.666696967639936!3d54.11926314306036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1759835408781!5m2!1spl!2spl"
        className="w-full h-64 sm:h-80 md:h-50 lg:h-47 border-0 rounded-2xl shadow-md"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

  </div>

  <Footer />
</div>

    );
};

export default KontaktPage;