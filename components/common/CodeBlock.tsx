import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock: CodeComponent = ({ inline, className, children }) => {
  const match = /language-(\w+)(:.+)/.exec(className || '');
  const match1 = /language-(\w+)/.exec(className || '');

  if (!match && !match1) {
    return <code className={className}>{children}</code>;
  }

  let lang;
  if (match) {
    lang = match && match[1] ? match[1] : '';
  } else {
    lang = match1 && match1[1] ? match1[1] : '';
  }
  const name = match && match[2] ? match[2].slice(1) : '';

  // const name_start = className ? className.indexOf(",") + 1 : 0;
  // const name = className ? className.substring(name_start) : '';

  return (
    <div className="code_box">
      {name && <p className='code_file_name'>{name}</p>}
      <SyntaxHighlighter
        style={ atomDark }
        language={ lang }
        children={ String(children).replace(/\n$/, '') }
        useInlineStyles={true}
      />
      <style jsx>
        {`
          .code_box {
            position: relative;
          }

          .code_file_name {
            display: inline-block;
            position: absolute;
            top: -1.5em;
            left: 0;
            background-color: #ccc;
            padding: 0.2em;
            color: #000;
          }
        `}
      </style>
    </div>
  );
};

export default CodeBlock;
