interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="border-b hairline bg-[var(--color-wash)]">
      <div className="container-full py-10 md:py-14">
        <div className="accent-rule mb-5" />
        <h1 className="font-brand text-2xl md:text-[1.875rem] xl:text-[2.125rem] font-bold text-[var(--color-plum)] text-balance max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-[var(--color-plum-light)] text-pretty leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
