import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const about = () => {
    return (
        <div className='container'>

            <div className='about '>
                <div className="about__head">
                    <h1>About Me</h1>
                    <h3>I'm  Muhamadaliyev Sherzodbek and <span>Frontend Developer</span> </h3>
                    <p>I have participated in several real projects only as a freelancer. I study at the Fergana branch of the Tashkent University of Information Technologies. I am currently studying Cyber ​​Security, Network Security and Ethical Hacking. My main goal is to become an expert in cyber security and hacking. I know HTML, CSS, SCSS/LESS, JAVASCRIPT, BOOTSTRAP, TAILWIND CSS, MATERIAL UI, REACT JS NEXT JS from frontend. I also did the portfolio in NEXT JS.</p>
                </div>
                <div className="about__title">
                    <div className="about__title-info">
                        <div className="about__title-info-text">
                            <div className="item">
                                <p>Birthday : 
                                    <span>2 Jan 2001</span>
                                </p>
                                <p>Telegram : 
                                    <span>@Frontend200</span>
                                </p>
                                <p>City : 
                                    <span>UZb, Fergana</span>
                                </p>
                                <p>Age : 
                                    <span>21</span>
                                </p>
                                
                            </div>
                            <div className="item">
                                <p>Email 
                                    <span>sherzodbekmuhamadaliyev@gmail.com</span>
                                </p>
                                <p>Phone : 
                                    <span>+998 (90) 157-33-40</span>
                                </p>
                                <p>Github : 
                                    <span>AlikhonAliyev0102</span>
                                </p>
                                <p>Freelnace : 
                                    <span>Available</span>
                                </p>
                            </div>
                        </div>
                        <div className="about__title-info-btn">
                            <button className='btn'>
                                <Link href='/contact'>Hire Me</Link>
                            </button>
                        </div>

                    </div>
                    <div className="about__title-skills">
                        <div className="skills-items">
                            <div className="progress-title">
                                <h5>Html</h5>
                                <p>
                                    86%
                                </p>
                            </div>
                            <div className="progress">
                                <div className="progress-in" style={{width: 256}}></div>
                            </div>
                        </div>
                        <div className="skills-items">
                            <div className="progress-title">
                                <h5>CSS</h5>
                                <p>
                                    75%
                                </p>
                            </div>
                            <div className="progress">
                                <div className="progress-in" style={{width: 225}}></div>
                            </div>
                        </div>
                        <div className="skills-items">
                            <div className="progress-title">
                                <h5>Scss/Less</h5>
                                <p>
                                    90%
                                </p>
                            </div>
                            <div className="progress">
                                <div className="progress-in" style={{width: 270}}></div>
                            </div>
                        </div>
                        <div className="skills-items">
                            <div className="progress-title">
                                <h5>Bootstrap</h5>
                                <p>
                                    66%
                                </p>
                            </div>
                            <div className="progress">
                                <div className="progress-in" style={{width: 196}}></div>
                            </div>
                        </div>
                        <div className="skills-items">
                            <div className="progress-title">
                                <h5>Tailwind Css</h5>
                                <p>
                                    40%
                                </p>
                            </div>
                            <div className="progress">
                                <div className="progress-in" style={{width: 120}}></div>
                            </div>
                        </div>
                        <div className="skills-items">
                            <div className="progress-title">
                                <h5>Javascript</h5>
                                <p>
                                    50%
                                </p>
                            </div>
                            <div className="progress">
                                <div className="progress-in" style={{width: 150}}></div>
                            </div>
                        </div>
                        <div className="skills-items">
                            <div className="progress-title">
                                <h5>React Js</h5>
                                <p>
                                    45%
                                </p>
                            </div>
                            <div className="progress">
                                <div className="progress-in" style={{width: 135}}></div>
                            </div>
                        </div>
                        <div className="skills-items">
                            <div className="progress-title">
                                <h5>Next Js</h5>
                                <p>
                                    35%
                                </p>
                            </div>
                            <div className="progress">
                                <div className="progress-in" style={{width: 100}}></div>
                            </div>
                        </div>
                        


                    </div>
                </div>
                <div className="about__master">
                    <div className="about__master-education">
                        <h1>Education</h1>
                        <div className="about__master-education-title shadow-dark">
                            <div className="text">
                                <div className="circle"></div>
                                <h3>
                                    <Image src='/calendar.svg' width={12} height={12}/>
                                    2021-2022
                                </h3>
                                <h4>Master In Frontend Developer </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, maiores. Facere, minus? Quam minus autem quidem similique dignissimos cumque dolorum quis optio blanditiis, doloremque veritatis.</p>

                            </div>
                            <div className="text">
                                <div className="circle"></div>
                                <h3>
                                    <Image src='/calendar.svg' width={12} height={12}/>
                                    2021-2022
                                </h3>
                                <h4>Master In Frontend Developer </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, maiores. Facere, minus? Quam minus autem quidem similique dignissimos cumque dolorum quis optio blanditiis, doloremque veritatis.</p>

                            </div>
                            <div className="text">
                                <div className="circle"></div>
                                <h3>
                                    <Image src='/calendar.svg' width={12} height={12}/>
                                    2021-2022
                                </h3>
                                <h4>Master In Frontend Developer </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, maiores. Facere, minus? Quam minus autem quidem similique dignissimos cumque dolorum quis optio blanditiis, doloremque veritatis.</p>

                            </div>
                            
                        </div>

                    </div>
                    <div className="about__master-education">
                        <h1>Experience</h1>
                        <div className="about__master-education-title shadow-dark">
                            <div className="text">
                                <div className="circle"></div>
                                <h3>
                                    <Image src='/calendar.svg' width={12} height={12}/>
                                    2021-2022
                                </h3>
                                <h4>Master In Frontend Developer </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, maiores. Facere, minus? Quam minus autem quidem similique dignissimos cumque dolorum quis optio blanditiis, doloremque veritatis.</p>

                            </div>
                            <div className="text">
                                <div className="circle"></div>
                                <h3>
                                    <Image src='/calendar.svg' width={12} height={12}/>
                                    2021-2022
                                </h3>
                                <h4>Master In Frontend Developer </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, maiores. Facere, minus? Quam minus autem quidem similique dignissimos cumque dolorum quis optio blanditiis, doloremque veritatis.</p>

                            </div>
                            <div className="text">
                                <div className="circle"></div>
                                <h3>
                                    <Image src='/calendar.svg' width={12} height={12}/>
                                    2021-2022
                                </h3>
                                <h4>Master In Frontend Developer </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, maiores. Facere, minus? Quam minus autem quidem similique dignissimos cumque dolorum quis optio blanditiis, doloremque veritatis.</p>

                            </div>
                            
                        </div>

                    </div>
                </div>
                

            </div>
        </div>
    );
};


export default about;