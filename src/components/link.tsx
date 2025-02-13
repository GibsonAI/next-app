const linkStyles = "font-bold text-lime-400 hover:text-lime-500";

export function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={linkStyles}>
      {children}
    </a>
  );
}

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={linkStyles} target="_blank">
      {children}
    </a>
  );
}
