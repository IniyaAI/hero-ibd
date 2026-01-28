'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart } from 'lucide-react';

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export const Navbar = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const handleNavClick = (target: string) => {
        if (isHomePage && target.startsWith('#')) {
            scrollToSection(target.substring(1));
        }
    };

    return (
        <nav className="absolute top-0 left-0 w-full z-50 py-6 px-6 md:px-12 bg-transparent">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <Link 
                    href="/"
                    className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                >
                    <Heart className="w-8 h-8 text-accent fill-accent transform -rotate-12" />
                    <span className="font-heading text-3xl font-bold text-primary tracking-wide">Heroes for IBD</span>
                </Link>

                {/* Navigation Links - Hidden on mobile, flex on md */}
                <div className="hidden md:flex items-center gap-8">
                    {isHomePage ? (
                        <>
                            <button
                                onClick={() => scrollToSection('mission')}
                                className="font-heading text-2xl text-primary hover:text-accent transition-colors relative group"
                            >
                                About Us
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full opacity-60 rounded-full"></span>
                            </button>
                            <button
                                onClick={() => scrollToSection('stories')}
                                className="font-heading text-2xl text-primary hover:text-accent transition-colors relative group"
                            >
                                Stories
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full opacity-60 rounded-full"></span>
                            </button>
                            <button
                                onClick={() => scrollToSection('team')}
                                className="font-heading text-2xl text-primary hover:text-accent transition-colors relative group"
                            >
                                Team
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full opacity-60 rounded-full"></span>
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/#mission"
                                className="font-heading text-2xl text-primary hover:text-accent transition-colors relative group"
                            >
                                About Us
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full opacity-60 rounded-full"></span>
                            </Link>
                            <Link
                                href="/#stories"
                                className="font-heading text-2xl text-primary hover:text-accent transition-colors relative group"
                            >
                                Stories
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full opacity-60 rounded-full"></span>
                            </Link>
                            <Link
                                href="/#team"
                                className="font-heading text-2xl text-primary hover:text-accent transition-colors relative group"
                            >
                                Team
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full opacity-60 rounded-full"></span>
                            </Link>
                        </>
                    )}
                    <Link
                        href="/events"
                        className="font-heading text-2xl text-primary hover:text-accent transition-colors relative group"
                    >
                        Events
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full opacity-60 rounded-full"></span>
                    </Link>
                </div>

                {/* CTA Button */}
                <Link 
                    href="/fundraising"
                    className="sketch-btn text-lg px-6 py-2 bg-accent text-white border-2 border-primary/20 hover:scale-105 hover:shadow-md transform rotate-1"
                >
                    Get Involved
                </Link>
            </div>
        </nav>
    );
};
