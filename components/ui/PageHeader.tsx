interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-[var(--color-subtle)] border-b border-[var(--color-border-light)]">
      <div className="container-wide px-6 py-12 md:py-16">
        <div className="accent-line mb-5" />
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-[var(--color-text)] text-balance max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-[var(--color-text-secondary)] text-pretty leading-relaxed max-w-2xl text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
