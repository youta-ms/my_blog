import Link from "next/link";

export function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Link href={href} className="link-button" prefetch={false}>
        {children}
      </Link>
      <style jsx>
        {`
          :global(.link-button) {
            border-radius: 20px;
            padding: 12px 50px;
            display: inline-block;
            background-color: var(--c-primary);
            color: #fff;
            font-size: var(--text-lg);
            transition:box-shadow 0.3s, transform 0.3s;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);

            &:hover {
              box-shadow:0 6px 14px rgba(0, 0, 0, 0.24);
              transform:translate(0, -2px);
            }
          }
        `}
      </style>
    </>
  );
}
