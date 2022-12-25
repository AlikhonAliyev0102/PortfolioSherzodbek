import React from 'react';
import Image from 'next/image';

const services = () => {
    return (
        <div className='container'>
            <div className="services">
                <div className="services__head">
                    <h1>Services</h1>

                </div>
                <div className="services__cart">
                    <div className="services__cart-items">
                        <div className="img">
                            <Image src='/laptop.svg' width={12} height={12}/>
                        </div>
                        <h1 className="title">
                            Frontend Developer
                        </h1>
                        <p className="text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque.

                        </p>
                    </div>
                    <div className="services__cart-items">
                        <div className="img">
                            <Image src='/cyber.svg' width={12} height={12}/>
                        </div>
                        <h1 className="title">
                            Cyber security
                        </h1>
                        <p className="text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque.

                        </p>
                    </div>
                    <div className="services__cart-items">
                        <div className="img">
                            <Image src='/network.svg' width={12} height={12}/>
                        </div>
                        <h1 className="title">
                            Network security Raspberry PI
                        </h1>
                        <p className="text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque.

                        </p>
                    </div>
                    <div className="services__cart-items">
                        <div className="img">
                            <Image src='/hack.svg' width={12} height={12}/>
                        </div>
                        <h1 className="title">
                            Ethical hacking
                        </h1>
                        <p className="text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque.

                        </p>
                    </div>
                    <div className="services__cart-items">
                        <div className="img">
                            <Image src='/linux.svg' width={12} height={12}/>
                        </div>
                        <h1 className="title">
                            Linux admin
                        </h1>
                        <p className="text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque.

                        </p>
                    </div>
                    <div className="services__cart-items">
                        <div className="img">
                            <Image src='/code.svg' width={12} height={12}/>
                        </div>
                        <h1 className="title">
                            Backend Developer Node Js
                        </h1>
                        <p className="text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default services;