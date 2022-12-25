import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const portfolio = () => {
    return (
        <div className='container'>
            <div className="portfolio">
                <div className="portfolio__head">

                    <h1>Portfolio</h1>
                </div>
                <div className="portfolio__project">
                    <h1>My Last Projects :</h1>
                    <div className="portfolio__project-cart">
                        
                        <Link href={'https://sp-adasturi.vercel.app/'} className="items">
                                <Image src="/SPA.PNG" width={300} height={300}></Image>
                                <h3>SPA Shop</h3>
                        </Link>
                        <Link href={'https://twiter-clone-reactjs.vercel.app/'} className="items">
                                <Image src="/Twitter.PNG" width={300} height={300}></Image>
                                <h3>Twitter Clone</h3>
                        </Link>
                        <Link href={'https://reactjs-weatherapp-aliproject.netlify.app/'} className="items">
                                <Image src="/Weather.PNG" width={300} height={300}></Image>
                                <h3>Weather App</h3>
                        </Link>
                        <Link href={'https://vitrinareactjs.netlify.app/'} className="items">
                                <Image src="/Vitrina.PNG" width={300} height={300}></Image>
                                <h3>Vitrina</h3>
                        </Link>
                        <Link href={'https://ovozli-asistent.vercel.app/'} className="items">
                                <Image src="/Ovozli.PNG " width={300} height={300}></Image>
                                <h3>Ovozli assistent</h3>
                        </Link>
                        <Link href={'https://aim.uz/'} className="items">
                                <Image src="/Aimuz.PNG" width={300} height={300}></Image>
                                <h3>Aim.uz</h3>
                        </Link>
                        <Link href={'https://p-school.vercel.app/'} className="items">
                                <Image src="/School.PNG" width={300} height={300}></Image>
                                <h3>School web sites</h3>
                        </Link>
                        <Link href={'https://crypto-price-alikhon.netlify.app/'} className="items">
                                <Image src="/CryptoPrice.PNG" width={300} height={300}></Image>
                                <h3>Crypto Price</h3>
                        </Link>
                        <Link href={'/'} className="items">
                                <Image src="/Portfolio.PNG" width={300} height={300}></Image>
                                <h3>Portfolio</h3>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};


export default portfolio;