import React from "react";

// Fix for build-time ReferenceError: BentoGridItem is not defined
// Some templates reference <BentoGridItem /> without importing/defining it.
// Define a safe local component so prerendering succeeds.

type BentoGridItemProps = {
  className?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
};

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: BentoGridItemProps) {
  return (
    <div className={className}>
      {header}
      {icon}
      {title}
      {description}
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <BentoGridItem title={"Welcome"} description={"Home"} />
    </main>
  );
}
