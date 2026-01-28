import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FactCard = ({ question, answer }: { question: string; answer: string }) => (
    <div className="sketch-card group hover:-rotate-1">
        <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0 text-primary">
                <HelpCircle className="w-5 h-5" />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-primary mb-3 font-heading group-hover:text-secondary transition-colors">{question}</h3>
                <p className="text-text leading-relaxed font-body text-lg">{answer}</p>
            </div>
        </div>
    </div>
);

export const TriviaSection = () => {
    return (
        <section id="trivia" className="py-24 bg-paper/50 relative border-t-4 border-accent/20">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="bg-white px-4 py-2 rounded-full text-lg font-bold text-primary shadow-sm inline-block mb-4 font-heading border-2 border-primary/20 rotate-2">Did You Know?</span>
                    <h2 className="text-6xl font-bold text-primary mb-6 font-heading">
                        Understanding IBD
                    </h2>
                    <p className="text-text text-xl font-body">Key facts to help raise awareness and support.</p>
                </div>

                <div className="flex flex-col gap-6">
                    <FactCard
                        question="How many children in the US are affected by IBD?"
                        answer="Approximately 80,000 children in the United States are currently diagnosed with Inflammatory Bowel Disease."
                    />
                    <FactCard
                        question="Is IBD the same thing as IBS?"
                        answer="No. IBD (Inflammatory Bowel Disease) is an autoimmune condition causing inflammation, while IBS (Irritable Bowel Syndrome) is a functional disorder without visible damage to the digestive tract."
                    />
                    <FactCard
                        question="Can diet cure IBD?"
                        answer="While diet can help manage symptoms and maintain remission, there is currently no known cure for IBD. Treatment typically involves medication and monitoring."
                    />
                </div>
            </div>
        </section>
    );
};
