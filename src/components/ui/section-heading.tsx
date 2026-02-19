interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="text-center space-y-3 max-w-2xl mx-auto px-4 pt-12 pb-8 md:pt-20 md:pb-12">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
