import React from 'react';

// Renaming internal component to match style, but keeping export name for compatibility
interface ComicPanelProps {
    children: React.ReactNode;
    className?: string;
    variant?: string; // Kept for compat but unused
}

export const ComicPanel: React.FC<ComicPanelProps> = ({
    children,
    className = '',
}) => {
    return (
        <div className={`
      sketch-card
      bg-white
      ${className}
    `}>
            {children}
        </div>
    );
};
