import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';

export const FundraisingPreview = () => {
    return (
        <section className="py-24 bg-paper/50 relative border-t-4 border-accent/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="sketch-card p-12 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                            <Heart className="w-10 h-10 text-accent fill-accent" />
                        </div>
                    </div>
                    <h2 className="text-5xl font-bold text-primary mb-4 font-heading">
                        Support Our Mission
                    </h2>
                    <p className="text-text text-xl font-body mb-8 max-w-2xl mx-auto">
                        Join us in supporting the Crohn's & Colitis Foundation through Take Steps. Every dollar raised accelerates breakthroughs in IBD research and improves care for millions.
                    </p>
                    <Link
                        href="/fundraising"
                        className="sketch-btn bg-accent text-white px-10 py-4 text-2xl hover:rotate-1 inline-flex items-center gap-3"
                    >
                        Donate Now
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
