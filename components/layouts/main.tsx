import blogConfig from "@/blog.config";

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="main">
      {children}
      <style jsx>
        {`
          .main {
            width: calc(100% - (25% + 80px));
            margin-right: 50px;
            word-break: break-all;
            padding: 32px;
            background: var(--c-white);

            @media screen and (max-width: ${blogConfig.styles.breakPoints
                .medium}) {
              margin-right: 0;
              width: 100%;
              padding: 32px 0;
            }
          }
        `}
      </style>
    </div>
  );
}
