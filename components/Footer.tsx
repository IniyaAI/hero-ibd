import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
    return (
        <footer id="footer" className="bg-paper/50 pt-20 pb-10 relative mt-20 border-t-4 border-primary/20">
            {/* Wave top */}
            <div className="absolute top-0 left-0 w-full h-20 -translate-y-full overflow-hidden opacity-10">
                <svg viewBox="0 0 1440 320" className="w-full h-full object-cover transform rotate-180">
                    <path fill="#000000" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                            <Heart className="w-5 h-5 text-white fill-white" />
                        </span>
                        <span className="font-bold text-2xl text-primary font-heading">Heroes for IBD</span>
                    </div>
                    <p className="text-text text-lg font-body leading-relaxed max-w-2xl">
                        Dedicated to helping every child reach their full potential through health, support, and community.
                    </p>
                </div>

                <div className="border-t border-primary/10 pt-8 text-center text-sm text-text/60 font-body">
                    <p>&copy; 2026 Heroes for IBD. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
