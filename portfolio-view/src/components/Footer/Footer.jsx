import React from 'react'
import './footer.css';
import { ButtonPrimary } from '../Button/Button';


const Footer = () => {

    const sitemap = [
        {
            label: 'Home',
            href: '#home'
        },
        {
            label: 'About',
            href: '#about'
        },
        {
            label: 'Work',
            href: '#work'
        },
        {
            label: 'Contact me',
            href: '#contact'
        }
    ];

    const socials = [
        {
            label: 'GitHub',
            href: 'https://www.github.com/akshay-sanap'
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/akshaysanap7'
        },
        {
            label: 'Twitter X',
            href: 'https://x.com/aksh_sanap'
        },
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/aksh_sanap'
        },

    ];



    return (
        <footer className="section">
            <div className="container">


                <div className="lg:grid lg:grid-cols-2">

                    <div className=" mb-10  ">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                            Let's Work Together Today!!
                        </h2>

                        <ButtonPrimary
                            href="mailto:akshaynsanap@gmail.com"
                            label="Start-Project"
                            icon="chevron_right"
                        />

                    </div>


                    <div className="grid grid-cols-2 gap-4 lg:pl-20">


                        <div>

                            <p className="mb-2">Sitemap</p>

                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a href="href"
                                            className="block text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                        </div>


                        <div>

                            <p className="mb-2">Socials</p>

                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a href={href}
                                            target="_blank"
                                            className="block text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                        </div>


                    </div>

                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a href=""
                        className=''
                    >
                        <img src="/images/logo.svg"
                            width={40}
                            height={40}
                            alt="logo" />
                    </a>
                    <p className="text-zinc-500 text-sm">
                        &copy;2024 <span className="text-zinc-200">Portfolio - Akshay Sanap</span>
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
