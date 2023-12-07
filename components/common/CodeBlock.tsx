import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock: CodeComponent = ({ children }) => {
  const childProps = typeof children[0] === 'object' && 'props' in children[0] ? children[0].props : {}
  const { className, children: code } = childProps
  const classList = className ? className.split(':') : []
  const language = classList[0]?.replace('language-', '')
  const fileName = classList[1]

  return (
    <>
      {fileName && (
        <div className='code_file_name'>
          <span>{fileName}</span>
        </div>
      )}
      <SyntaxHighlighter language={language} style={atomDark}>
        {String(code[0]).replace(/\n$/, '')}
      </SyntaxHighlighter>
      <style jsx>
        {`
          .code_file_name {
            display: table;
            max-width: 100%;
            background: #334155;
            color: #f8fafc;
            font-size: 0.875rem;
            line-height: 1.25rem;
            border-radius: 4px 4px 0 0;
            padding: 6px 12px 20px;
            padding-top: 6px;
            padding-right: 12px;
            padding-bottom: 20px;
            padding-left: 12px;
            margin-bottom: -20px;
          }
        `}
      </style>
    </>
  );
};

export default CodeBlock;
