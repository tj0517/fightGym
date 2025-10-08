import React from 'react';
import Menu from '../components/menu';
import Footer from '../components/footer';

const treningi=[
{
name:"Brazylijskie Jiu Jitsu",
desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna eget nunc fringilla ultrices. Etiam semper eros odio, non congue sem ornare nec. Nam sed vulputate lorem. Suspendisse et maximus nibh, a scelerisque ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna eget nunc fringilla ultrices. Etiam semper eros odio, non congue sem ornare nec. Nam sed vulputate lorem. Suspendisse et maximus nibh, a scelerisque ipsum."
},
{
name:"Kickboxing",
desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna eget nunc fringilla ultrices. Etiam semper eros odio, non congue sem ornare nec. Nam sed vulputate lorem. Suspendisse et maximus nibh, a scelerisque ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna eget nunc fringilla ultrices. Etiam semper eros odio."
},
{
name:"MMA",
desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna eget nunc fringilla ultrices. Etiam semper eros odio, non congue sem ornare nec. Nam sed vulputate lorem. Suspendisse et maximus nibh, a scelerisque ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna eget nunc fringilla ultrices. Etiam semper eros odio, non congue sem ornare nec. Nam sed vulputate lorem. "
},
{
name:"Trening siłowy",
desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna eget nunc fringilla ultrices. Etiam semper eros odio, non congue sem ornare nec. Nam sed vulputate lorem. Suspendisse et maximus nibh, a scelerisque ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna eget nunc fringilla ultrices. Etiam semper eros odio."
},
{
name:"Zapasy",
desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna eget nunc fringilla ultrices. Etiam semper eros odio, non congue sem ornare nec. Nam sed vulputate lorem. Suspendisse et maximus nibh, a scelerisque ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et magna eget nunc fringilla ultrices. Etiam semper eros odio, non congue sem ornare nec. Nam sed vulputate lorem. "
}
]


const CoTrenujemyPage = () => {
    return (
        <div className='w-full overflow-x-hidden bg-stone-900 min-h-screen'>
            <Menu/>
             <h1 className="md:text-8xl text-6xl font-bold mb-4 text-orange-400 w-full text-center py-20">Co <span className="text-white">Trenujemy?</span></h1>
            <div className='w-full flex flex-col px-20'>
            {treningi.map((el,idx)=>(
                <div key={idx} className='mb-20 px-10  last:border-0'>
                    <h2 className='text-5xl text-orange-400 font-bold mb-10'>{el.name}</h2>
                    <p className='text-lg font-light text-white'>{el.desc}</p>
                    <div className='w-1/2 mx-auto border-b-2 border-orange-400 mt-15 last:'></div>
                </div>
            ))}
            </div>
            <Footer />
        </div>
    );
};

export default CoTrenujemyPage;