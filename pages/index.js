import Head from "next/head";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
    AiFillInstagram,
    AiOutlineInstagram,
    AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

import deved from "../public/perfil2.png";
import sql from "../public/sql.png";
import frontend from "../public/frontend.svg";
import hcj from "../public/hcj.svg";
import java from "../public/java.svg";
import Image from "next/image";
import web1 from "../public/plqs1.png";
import web2 from "../public/plqs2.png";
import web3 from "../public/plqs4.png";
import web4 from "../public/plqs3.png";
import web5 from "../public/dm.png";
import web6 from "../public/web6.png";
import styles from '../styles/Home.module.css' 


export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Darío Marquínez</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"/>

            </Head>
            <main className=" bg-white px-10 dark:bg-gray-900 sm:px-10 md:px-20 lg:px-40">
                <section className="min-h-screen">
                    <nav className="py-10 mb-12 flex justify-between dark:text-white">
                        <h1 className="font-burtons text-xl">DM-logo</h1>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={() => setDarkMode(!darkMode)}
                                    className=" cursor-pointer text-2xl"
                                />
                            </li>
                            <li>
                                <a
                                    id="resume"
                                    target="_blank"
                                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                                    href="https://www.youtube.com/watch?v=C1WTqvU9pIY"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div>
                        <div className=" relative">

                        <div className=" mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 ms:w-56 ms:h-56 sm:w-64 sm:h-64">
                            <Image src={deved} layout="fill" objectFit="cover" alt={""} />
                        </div>

                        

                    </div>
                    
                    <div className="text-center p-10 py-10">
                        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                            <b>Darío Marquínez</b>
                        </h2>
                        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                            Desarrollador de software.
                        </h3>
                        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                            Soy freelancer, apasionado por las nuevas tecnologías y por crear soluciones de software que satisfagan 
                            necesidades no cubiertas.
                        </p>
                        
                    </div>

                    
                        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 ">
                            <a target="_blank" href="https://www.instagram.com/dario_m70/" className={styles.ig}><FaInstagram/> </a> 
                            <a target="_blank" href="https://www.linkedin.com/in/darío-marquínez-803609222/" className={styles.linkedin}><FaLinkedin /></a>
                            <a target="_blank" href="https://github.com/DarioM70" className={styles.github}><AiFillGithub/></a> 
                        </div>
                        
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white "><b>Skills</b></h3>
                        <p className="text-md py-2 leading-8 text-gray-800 text-lg dark:text-gray-200">
                            Yo soy una persona muy interesada en aprender cada vez más y pienso que es muy importante para el area del 
                            desarrollo de software, ya que este campo está en constante desarrollo y evolucion drástica. Mis proyecciones
                            se basan en la inteligencia artificial (una de mis mayores metas) y el analisis de datos. Por ahora mi enfoque 
                            se dá por el area del desarrollo web, desarrollo de aplicaciones mobiles y bases de datos.
                            
                        </p>
                        
                    </div>
                    <div className="lg:flex gap-10" >
                        <div data-aos="zoom-in-right" className="ease-in duration-300 text-center shadow-lg p-10 rounded-xl my-10 dark:border dark:text-white flex-1 border-b dark:border-white  border-black border-solid" >
                            <div className={styles.imgCenter} >

                                <Image src={sql} width={300} height={200} alt={""} />

                            </div>
                            
                            <h3 className="text-2xl font-medium pt-8 pb-2  ">
                                <b>Back-end</b>
                            </h3>
                            <p className="py-2">
                                Me encanta desarrollar la parte del servidor y me gusta la gestion de bases de datos y
                                el desarollo de api's rest.
                            </p>
                            <h4 className="py-4 text-teal-600">Tecnologías usadas</h4>
                            <p className="text-gray-800 py-1 dark:text-white ">Python</p>
                            <p className="text-gray-800 py-1 dark:text-white ">Django</p>
                            <p className="text-gray-800 py-1 dark:text-white ">Django-Rest-Framework</p>
                            <p className="text-gray-800 py-1 dark:text-white ">PostgreSQL</p>
                            
                        </div>
                        <div data-aos="zoom-in-right" className="ease-in duration-300 text-center shadow-lg p-10 rounded-xl my-10 dark:border dark:text-white flex-1 border-b dark:border-white  border-black border-solid">
                            <div className={styles.imgCenter} >

                                <Image src={frontend} width={200} height={200} alt={""} />

                            </div>
                            <h3 className="text-2xl font-medium pt-8 pb-2 ">
                                <b>Front-end</b>
                            </h3>
                            <p className="py-2">
                                El frontend me permite liberal el sentido de la creatividad y 
                                hace que mis proyectos tengan una buena carta de presentación.
                            </p>
                            <h4 className="py-4 text-teal-600">Tecnologías usadas</h4>
                            <p className="text-gray-800 py-1 dark:text-white">JavaScript</p>
                            <p className="text-gray-800 py-1 dark:text-white">CSS</p>
                            <p className="text-gray-800 py-1 dark:text-white">HTML</p>
                            <h4 className="py-4 text-teal-600">Tecnologías de diseño</h4>
                            <p className="text-gray-800 py-1 dark:text-white">Adobe ilustrator</p>
                            <p className="text-gray-800 py-1 dark:text-white">Canva</p>
                        </div>
                        <div data-aos="zoom-in-right" className="ease-in duration-300 text-center shadow-lg p-10 rounded-xl my-10 dark:border dark:text-white flex-1 border-b dark:border-white  border-black border-solid">
                            <div className="flex flex-wrap px-5">
                                <div className={styles.imgCenterLg}>
                                    <Image src={hcj} width={300} height={300} alt={""} />
                                </div>
                                
                                

                            </div>
                            
                            <h3 className="text-2xl font-medium pt-8 pb-2 "><b>Tecnologías en aprendizaje:</b> </h3>
                            <div className={styles.imgCenterLg}>
                                <Image src={java} width={300} height={300} alt={""} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="basis-1/3 flex-1 altu " >
                <iframe data-aos="zoom-in" className="rounded-2xl w-full ms:h-full ease-in duration-75"  src="https://www.youtube.com/embed/C1WTqvU9pIY" title="Portafolio Dario Marquínez" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </section>

                <section className="py-10">
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white "><b>Portofolio</b> </h3>
                        <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200 pb-8">
                            Aquí, los proyectos que se irán anexando según mi experiencia vaya progresando.
                            
                        </p>
                       
                    </div>

                    <a target="_blank" href="https://plqssolutions.up.railway.app/"><h2 className="dark:decoration-white dark:text-white text-2xl decoration-solid decoration-black underline"><b>Pa' Las Que Sea Solutions | proyecto empresarial de servicios integrales.</b> </h2></a> 
                    
                    <div className="flex flex-col gap-10 py-8 lg:flex-row lg:flex-wrap">
                        
                        <div data-aos="fade-right" className="basis-1/3 flex-1 ease-in duration-300">
                            <Image
                                className="rounded-lg object-cover border border-black"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web1}
                            />
                        </div>
                        <div data-aos="fade-left" className="ease-in duration-300 basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover border border-black"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web3}
                            />
                        </div>
                        <div data-aos="fade-right" className="ease-in duration-300 basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover border border-black"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web3}
                            />
                        </div>
                        <div data-aos="fade-left" className=" ease-in-out duration-300 basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover border border-black"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web4}
                            />
                        </div>

                        
                        <div className="basis-1/3 flex-1">
                        <h2 className="pb-4 text-2xl decoration-solid decoration-black underline dark:text-white dark:decoration-white"><b>Portafolio web | Darío Marquínez</b></h2>
                            <Image
                                data-aos="zoom-in-right"
                                className="rounded-lg object-cover border border-black"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web5}
                            />
                        </div>
                       
                    </div>
                </section>
                
            </main>


            
        </div>
        
    );
}
