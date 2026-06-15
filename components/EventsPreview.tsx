import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export const EventsPreview = () => {
    return (
        <section className="py-24 bg-white/30 relative border-t-4 border-secondary/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="sketch-card p-12 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                            <Calendar className="w-10 h-10 text-accent" />
                        </div>
                    </div>
                    <h2 className="text-5xl font-bold text-primary mb-4 font-heading">
                        Join Us at Our Events
                    </h2>
                    <p className="text-text text-xl font-body mb-8 max-w-2xl mx-auto">
                        Discover our past achievements and upcoming events. From awareness campaigns to community outreach, see how we're making a difference.
                    </p>
                    <Link
                        href="/events"
                        className="sketch-btn bg-accent text-white px-10 py-4 text-2xl hover:rotate-1 inline-flex items-center gap-3"
                    >
                        View All Events
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
