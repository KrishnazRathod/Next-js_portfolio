import { Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { GitHub, Instagram } from 'react-feather'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import ProjectButton from './projectButton'

function HeroSection() {
    return (
        <section
            id="home"
            className="lg:h-screen w-full flex flex-col lg:flex-row items-center px-10  max-w-7xl mx-auto py-28"
        >
            <div className="text w-full lg:w-1/2">
                <h1 className="text-2xl lg:text-3xl">
                    Hi I{"'"}m <br />
                    <span className="text-6xl md:text-7xl lg:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-primary  to-accent">
                        Krishna
                    </span>
                </h1>
                <p className="lg:text-lg text-muted mt-4 font-medium max-w-xl">
                    I'm a skilled Frontend Developer with nearly 1 years of
                    experience creating dynamic web applications using React,
                    Redux, TypeScript, UI frameworks, and RESTful APIs. I excel
                    in enhancing user interfaces and optimizing performance.
                    Ready to bring your web applications to the next level!
                </p>
                <div className="links mt-10 flex items-center gap-6">
                    <Link
                        href={'https://github.com/KrishnazRathod'}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="hover:scale-110 cursor-pointer"
                    >
                        <GitHub height={35} width={35} />
                        <div className="sr-only">Github</div>
                    </Link>
                    <Link
                        href={
                            'hhttps://www.linkedin.com/in/krishna-rathod-00b155232/'
                        }
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="hover:scale-110 cursor-pointer"
                    >
                        <Linkedin height={35} width={35} />
                        <div className="sr-only">Linkedin</div>
                    </Link>
                    <Link
                        href={'https://www.instagram.com/its._hritik/'}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="hover:scale-110 cursor-pointer"
                    >
                        <Instagram height={35} width={35} />
                        <div className="sr-only">Instagram</div>
                    </Link>
                    <Link
                        href={'mailto:krishnarathod7089@gmail.com'}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="hover:scale-110 cursor-pointer"
                    >
                        <Mail height={35} width={35} />
                        <div className="sr-only">Email</div>
                    </Link>
                </div>
                <div className="button gap-2 flex items-center flex-col md:flex-row my-5">
                    <Link
                        href="#contact"
                        className={cn(
                            buttonVariants({ variant: 'default', size: 'lg' }),
                            'font-bold text-xl md:w-auto w-full'
                        )}
                    >
                        Contact Me
                    </Link>
                    <ProjectButton />
                </div>
            </div>
            <div className="image w-full lg:w-1/2 relative aspect-square -mt-10 ">
                {/* <Image
                    src="/krishna_image.png"
                    className="w-full aspect-square"
                    alt=""
                    fill={true}
                    priority={true}
                /> */}
                <div className="gradient absolute w-full h-1/2 bg-gradient-to-t from-background to-transparent bottom-0 left-0 right-0"></div>
            </div>
        </section>
    )
}

export default HeroSection
