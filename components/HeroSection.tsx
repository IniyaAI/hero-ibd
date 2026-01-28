'use client';

import React from 'react';
import Image from 'next/image';

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center p-6 pt-32 overflow-hidden border-b-4 border-primary/20">

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Column: Text */}
                <div className="text-left z-10">
                    <h1 className="font-heading text-8xl md:text-9xl font-bold text-primary tracking-wide leading-[0.9] mb-6">
                        Helping Children<br />
                        <span className="text-primary pl-4 block transform rotate-1">Thrive & Soar!</span>
                    </h1>

                    <p className="font-body text-xl md:text-2xl text-text leading-relaxed mb-10 max-w-lg text-opacity-80 ml-2 border-l-4 border-accent/20 pl-6 rounded-sm">
                        Supporting bright futures with care, compassion, and awareness for pediatric IBD. Every child deserves to be a superhero.
                    </p>

                    <div className="flex flex-wrap gap-4 pl-2">
                        <button 
                            onClick={() => scrollToSection('mission')}
                            className="sketch-btn bg-accent text-white px-8 py-3 text-2xl hover:rotate-1"
                        >
                            Learn More
                        </button>
                        <button 
                            onClick={() => scrollToSection('mission')}
                            className="sketch-btn bg-white text-primary px-8 py-3 text-2xl hover:-rotate-1"
                        >
                            Our Programs
                        </button>
                    </div>
                </div>

                {/* Right Column: Image Placeholder */}
                <div className="relative h-[500px] w-full flex items-center justify-center">
                    {/* Decorative Blobs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-pulse absolute-center -z-10 blur-xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-primary/5 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] -z-10"></div>

                    {/* Image Container */}
                    <div className="relative w-full h-full max-w-[500px] max-h-[500px] p-6">
                        <div className="w-full h-full bg-paper rounded-[255px_15px_225px_15px/15px_225px_15px_255px] border-2 border-primary/20 flex items-center justify-center overflow-hidden shadow-lg transform rotate-2">
                            <Image 
                                src="/images/logo.jpg" 
                                alt="Heroes for Pediatric IBD Logo" 
                                width={400}
                                height={400}
                                className="object-contain w-full h-full p-4"
                            />
                        </div>

                        {/* Floating Element */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-md border border-primary/10 rotate-[-5deg]">
                            <span className="font-heading text-2xl text-accent">Superheroes!</span>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};
