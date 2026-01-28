import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const StoryCard = ({ title, category, description, imageSrc, link }: { 
    title: string; 
    category: string; 
    description: string;
    imageSrc: string;
    link: string;
}) => (
    <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="sketch-card group cursor-pointer p-0 overflow-hidden hover:rotate-1 block"
    >
        {/* Image */}
        <div className="h-56 bg-paper relative overflow-hidden group-hover:opacity-90 transition-opacity border-b-2 border-text/10">
            <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
            />

            {/* Category Badge */}
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-sm text-sm font-bold text-primary shadow-sm font-heading border border-primary/20 -rotate-2">
                {category}
            </span>
        </div>

        <div className="p-8">
            <h3 className="text-3xl font-bold text-primary mb-4 group-hover:text-accent transition-colors font-heading">
                {title}
            </h3>
            <p className="text-text mb-6 line-clamp-3 font-body text-lg">
                {description}
            </p>

            <div className="flex items-center text-primary font-bold group-hover:gap-2 transition-all font-heading text-xl">
                Listen Now <ArrowRight className="w-5 h-5 ml-2" />
            </div>
        </div>
    </a>
);

export const StoriesSection = () => {
    const podcastLink = "https://open.spotify.com/show/2eW4ghzCBqdazzHaDs70qR?si=dPjRscCWRleM-NXhJO4y1g";

    return (
        <section id="stories" className="py-24 bg-white/30 relative border-t-4 border-secondary/20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-accent font-bold tracking-wider uppercase text-lg mb-2 block font-heading rotate-[-1deg]">Inspiring Stories</span>
                        <h2 className="text-6xl font-bold text-primary font-heading">
                            Real Stories, Real Heroes
                        </h2>
                    </div>
                    <a 
                        href={podcastLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all font-heading text-2xl"
                    >
                        View All Episodes <ArrowRight className="w-6 h-6" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <StoryCard 
                        title="Finding Strength: Living with Crohn's at 15"
                        category="Podcast Episode"
                        description="In this episode, we talk with Makayla Allison, a 15-year-old Crohn's disease warrior who has been navigating life with IBD for 7 years. Makayla shares her journey of managing symptoms, the emotional toll of chronic illness, and the power of self-advocacy. From facing depression to continuing her passion for soccer, she opens up about what it really means to live with Crohn's disease as a teenager and why sharing your story can make a difference."
                        imageSrc="/images/first.jpeg"
                        link={podcastLink}
                    />
                    <StoryCard 
                        title="Beyond the Win: An Athlete's Life with Crohn's"
                        category="Podcast Episode"
                        description="In this episode of Voices of IBD, we speak with Rob Nunnery, a professional pickleball player with 19 titles, an ostomy athlete, and a Crohn's & Colitis Foundation Ambassador. With a social media following of over 13,000 people, Rob uses his platform to openly share what it is like to live and compete with Crohn's disease and an ostomy. He discusses resilience, body confidence, advocacy, and how visibility can empower others living with chronic illness to pursue their passions without limitation."
                        imageSrc="/images/second.jpeg"
                        link={podcastLink}
                    />
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a 
                        href={podcastLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sketch-btn px-8 py-3 bg-white text-primary inline-block"
                    >
                        View All Episodes
                    </a>
                </div>
            </div>
        </section>
    );
};
