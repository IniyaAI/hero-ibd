'use client';

import React, { useState } from 'react';
import { Heart, Activity, Users, Star, X } from 'lucide-react';

const ImpactCard = ({ icon: Icon, value, label, colorClass }: any) => (
    <div className={`sketch-card flex flex-col items-center justify-center text-center py-10 px-12 hover:scale-105 transition-transform flex-1`}>
        <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${colorClass} bg-opacity-20`}>
            <Icon className={`w-12 h-12 ${colorClass.replace('bg-', 'text-')}`} fill="currentColor" />
        </div>
        <h3 className="text-6xl font-bold text-primary mb-3 font-heading">{value}</h3>
        <p className="text-text font-medium font-body text-2xl">{label}</p>
    </div>
);

const OfferCard = ({ title, description, imagePlaceholder, rotation, onLearnMore }: any) => (
    <div className={`sketch-card text-center hover:bg-paper transform ${rotation} h-full flex flex-col`}>
        <div className="h-56 bg-secondary/10 rounded-[50%_40%_30%_70%/60%_30%_70%_40%] mb-6 flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-2 border border-dashed border-primary/20 rounded-[50%_40%_30%_70%/60%_30%_70%_40%]"></div>
            <span className="text-secondary font-bold opacity-50 font-heading text-3xl">{imagePlaceholder}</span>
        </div>
        <h3 className="text-4xl font-bold text-primary mb-3 font-heading">{title}</h3>
        <p className="text-text mb-8 font-body text-xl flex-grow px-4">{description}</p>
        <button 
            onClick={onLearnMore}
            className="sketch-btn px-8 py-2 text-primary hover:bg-secondary/10 self-center"
        >
            Learn more
        </button>
    </div>
);

const Modal = ({ isOpen, onClose, title, content }: any) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div 
                className="sketch-card max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-paper transform rotate-0"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-5xl font-bold text-primary font-heading">{title}</h2>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors text-primary"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="text-text font-body text-lg leading-relaxed space-y-4">
                    {content}
                </div>
            </div>
        </div>
    );
};

export const MissionSection = () => {
    const [openModal, setOpenModal] = useState<string | null>(null);

    const pillarContent: { [key: string]: string } = {
        Awareness: `Our awareness pillar educates the public about pediatric IBD through pop-up informational booths, school and community seminars, charity activities, local events, and social media outreach. We share patient stories, educational posts, and health resources on social media to complement our in-person initiatives and reach a broader audience. These efforts highlight early recognition of symptoms, treatment options, and ways to support children living with IBD. By engaging directly with families, educators, peers, and online communities, we foster empathy and reduce stigma surrounding chronic illness. Together, these activities create accessible opportunities for the public to learn, ask questions, and actively support pediatric IBD patients.`,
        
        Support: `Our support pillar focuses on empowering patients and families through access to resources, mentorship, and community programs tailored to their needs. Engagement through social media posts and direct messages provided encouragement and connection for individuals and families affected by Crohn's disease and colitis. In addition, the campaign's podcast created a platform for IBD patients to share their personal experiences, amplify their voices, and feel heard within the community. A central initiative of this effort was a toy drive that resulted in the donation of over 100 toys to children living with IBD, offering comfort, joy, and a sense of normalcy during challenging moments. This pillar reflects a continued commitment to compassionate, community centered support for those impacted by IBD.`,
        
        Advocacy: `Our advocacy pillar focuses on promoting systemic recognition and action for IBD. We collaborate with city officials to advance proclamations honoring a Pediatric IBD Awareness Week, raising public visibility of the condition. Future plans include working with local organizations, schools, and healthcare institutions to expand similar initiatives, such as awareness campaigns and community engagement projects. By amplifying patient and family voices in policy and civic spaces, we aim to secure accommodations, resources, and ongoing support for pediatric patients. These efforts translate awareness into tangible change and demonstrate the impact of youth-led advocacy.`
    };

    return (
        <section id="mission" className="py-24 bg-paper/50 relative border-t-4 border-primary/20">

            {/* Our Impact Section - Centered Cards */}
            <div className="max-w-[95%] mx-auto px-6 mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-bold text-primary mb-4 font-heading">Our Impact</h2>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16">
                    <ImpactCard
                        icon={Star}
                        value="170k+"
                        label="people reached"
                        colorClass="text-accent"
                    />
                    <ImpactCard
                        icon={Activity}
                        value="100+"
                        label="children impacted"
                        colorClass="text-secondary"
                    />
                    <ImpactCard
                        icon={Heart}
                        value="20+"
                        label="events and collaborations"
                        colorClass="text-primary"
                    />
                </div>
            </div>

            {/* Mission Pillars Section - 3 Columns */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-bold text-primary mb-4 font-heading">Mission Pillars</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <OfferCard
                        title="Advocacy"
                        description="Championing the needs and rights of children with IBD."
                        imagePlaceholder="Advocacy"
                        rotation="rotate-1"
                        onLearnMore={() => setOpenModal('Advocacy')}
                    />
                    <OfferCard
                        title="Awareness"
                        description="Educating communities about pediatric IBD."
                        imagePlaceholder="Awareness"
                        rotation="-rotate-1"
                        onLearnMore={() => setOpenModal('Awareness')}
                    />
                    <OfferCard
                        title="Support"
                        description="Providing resources and community for families."
                        imagePlaceholder="Support"
                        rotation="rotate-1"
                        onLearnMore={() => setOpenModal('Support')}
                    />
                </div>
            </div>

            {/* Modal */}
            {openModal && (
                <Modal
                    isOpen={!!openModal}
                    onClose={() => setOpenModal(null)}
                    title={openModal}
                    content={pillarContent[openModal]}
                />
            )}

        </section>
    );
};
