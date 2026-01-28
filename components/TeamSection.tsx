import React from 'react';
import Image from 'next/image';

const TeamMember = ({ name, role, imageSrc }: { name: string; role: string; imageSrc: string }) => (
    <div className="flex flex-col items-center sketch-card p-8 hover:-translate-y-2 transition-transform">
        <div className="w-32 h-32 bg-secondary/20 rounded-full mb-6 flex items-center justify-center border-2 border-primary/20 overflow-hidden">
            <Image
                src={imageSrc}
                alt={name}
                width={128}
                height={128}
                className="w-full h-full object-cover rounded-full"
            />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-1 font-heading">{name}</h3>
        <p className="text-text text-lg font-medium bg-paper px-3 py-1 rounded-sm border border-text/10 font-body rotate-[-2deg]">{role}</p>
    </div>
);

export const TeamSection = () => {
    return (
        <section id="team" className="py-24 bg-white/30 relative overflow-hidden border-t-4 border-primary/20">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-white to-transparent opacity-50"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-wider uppercase text-lg mb-2 block font-heading rotate-1">Our Team</span>
                    <h2 className="text-6xl font-bold text-primary font-heading">
                        Meet the Founders
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TeamMember name="Aashritha I." role="Founder" imageSrc="/images/aashi.jpeg" />
                    <TeamMember name="Sadhana S." role="Founder" imageSrc="/images/sadhana.png" />
                    <TeamMember name="Srihitha P." role="Founder" imageSrc="/images/srihita.png" />
                </div>
            </div>
        </section>
    );
};
