import React from 'react';
import Link from 'next/link';

const footerItems = [
    { label: 'Home', href: '/' },
    { label: 'Co trenujemy', href: '/co_trenujemy' },
    { label: 'Grafik', href: '/grafik' },
    { label: 'Kontakt', href: '/kontakt' },
];

const Footer: React.FC = () => (
    <div className='w-full bg-black py-20 md:py-30 px-10 md:px-40 flex flex-col items-center'>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-orange-400 px-20  border-b-2 border-white text-center pb-10">Fight <span className="text-white">Gym</span></h1>

    <nav className='p-6 text-white flex flex-row justify-center w-full '>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', padding: 0 }}>
            {footerItems.map((item) => (
                <li key={item.href} className=' hover:text-orange-400 text-[10px] sm:text-sm md:text-lg'>
                    <Link href={item.href}>{item.label}</Link>
                </li>
            ))}
        </ul>
    </nav>
    </div>
);

export default Footer;