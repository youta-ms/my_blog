import Link from "next/link";

function _List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list">
      {children}
      <style jsx>
        {`
          .list {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            padding: 0;
          }
        `}
      </style>
    </ul>
  );
}

function _ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="list-item">
      {children}
      <style jsx>
        {`
          .list-item {
            list-style: none;
            margin: 16px 4px;
          }
          .list-item :global(.active) {
            background-color: var(--c-primary);
            color: #fff;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </li>
  );
}

function _PagerLink({
  children,
  href,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="link">
      {children}
      <style jsx>
        {`
          :global(.link) {
            color: var(--c-primary);
            border: 1px solid var(--c-primary);
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition:box-shadow 0.3s, transform 0.3s;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);

            &:hover {
              box-shadow:0 6px 14px rgba(0, 0, 0, 0.24);
              transform:translate(0, -2px);
            }
          }
        `}
      </style>
    </Link>
  );
}

type Props = {
  max?: number;
  current?: number;
  className?: string;
  append?: string;
};

export function Pager({ max, current, className, append = "" }: Props) {
  const list: React.ReactNode[] = [];

  if (max && current) {
    for (let i = 1; i <= max; i += 1) {
      if (i === current) {
        list.push(
          <_ListItem key={i}>
            <span className="active">{i}</span>
          </_ListItem>
        );
      } else if (i === 1 && i !== current) {
        list.push(
          <_ListItem key={i}>
            <_PagerLink href={`${append}/`}>
              <span>1</span>
            </_PagerLink>
          </_ListItem>
        );
      } else if (Math.abs(i - current) < 4) {
        list.push(
          <_ListItem key={i}>
            <_PagerLink href={`${append}/index_page/${i}`}>
              <span>{i}</span>
            </_PagerLink>
          </_ListItem>
        );
      } else if (i === max && i !== current) {
        list.push(
          <_PagerLink href={`${append}/index_page/${max}`} key={i}>
            <span>{max}</span>
          </_PagerLink>
        );
      }
    }
  }

  return (
    <div className={className}>
      <_List>{list}</_List>
    </div>
  );
}
