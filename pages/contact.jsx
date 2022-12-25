import React from 'react';
import Image from 'next/image';

const contact = () => {
    return (
        <div className='container'>
            <div className="contact">
                <div className="contact__head">
                    <h1>Contact Me</h1>
                </div>
                <div className="contact__item">
                    <div className="contact__item-title">
                        <h1>Have You Any Questions ?</h1>
                        <p className='p'>I'M AT YOUR SERVICES</p>
                        <div className="inform">
                            <div className="inform__top">
                                <Image src='/phone.svg' width={20} height={20}></Image>
                                <h4>Call Us On</h4>
                                <p>+998(90) 157 33 40</p>
                            </div>
                            <div className="inform__top">
                                <Image src='/map.svg' width={20} height={20}></Image>
                                <h4>Office</h4>
                                <p>Uzbekistan, Fergana</p>
                            </div>
                            <div className="inform__top">
                                <Image src='/email.svg' width={20} height={20}></Image>
                                <h4>Email</h4>
                                <p>sherzodbekmuhamadaliyev@gmail.com</p>
                            </div>
                            <div className="inform__top">
                                <Image src='/sites.svg' width={20} height={20}></Image>
                                <h4>website</h4>
                                <p>www.sherzodbek.uz</p>
                            </div>
                        </div>

                    </div>
                    <div className="contact__item-inp">
                        <h1>SEND ME AN EMAIL</h1>
                        <p>I'M VERY RESPOSIVE TO MESSAGES</p>
                        <div className="inpt">
                            <div className="inpt__name">
                                <input type="text" name="" id="" placeholder='Name'/>
                                <input type="email" name="" id="" placeholder='Email'/>
                            </div>
                            <input type="text" placeholder='Subject'/>
                            <textarea name="" placeholder='Message' id="" cols="30" rows="10"></textarea>
                            <button className='btn'>Send Message</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default contact;