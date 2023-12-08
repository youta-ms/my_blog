import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useState } from 'react';

const CodeBlock: CodeComponent = ({ children }) => {
  const childProps = typeof children[0] === 'object' && 'props' in children[0] ? children[0].props : {}
  const { className, children: code } = childProps
  const classList = className ? className.split(':') : []
  const language = classList[0]?.replace('language-', '')
  const fileName = classList[1]

  const [showCopyToClipboard, setShowCopyToClipboard] = useState(false);
  const [styleTooltip, setStyleTooltip] = useState({
    opacity: '0',
    visiblity: 'hidden',
  });

  const handleClick = () => {
    setStyleTooltip({ opacity: '1', visiblity: 'visible' });
    setTimeout(function () {
      setStyleTooltip({ opacity: '0', visiblity: 'hidden' });
    }, 3000);
  };

  return (
    <>
      {fileName && (
        <div className='code_file_name'>
          <span>{fileName}</span>
        </div>
      )}
      <div
        style={{ position: 'relative' }}
        onMouseEnter={() => setShowCopyToClipboard(true)}
        onMouseLeave={() => setShowCopyToClipboard(false)}
      >
        <SyntaxHighlighter language={language} style={atomDark}>
          {String(code[0]).replace(/\n$/, '')}
        </SyntaxHighlighter>
        {showCopyToClipboard && (
          <div className="code-block-copy-button">
            <div className="copied-tooltip" style={styleTooltip}>
              Copied!
            </div>
            <CopyToClipboard text={String(code[0]).replace(/\n$/, '')} onCopy={() => handleClick()}>
              <svg
                id="btnTarget"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
              </svg>
            </CopyToClipboard>
          </div>
        )}
      </div>
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
          .code-block-copy-button {
            position: absolute;
            cursor: pointer;
            color: #9ca3af;
            top: 5px;
            right: 5px;
            width: 1.5em;
            height: auto;
          }
          .code-block-copy-button .copied-tooltip {
            cursor: default;
            position: absolute;
            top: 0px;
            right: 26px;
            padding: 0px 3px;
            display: inline-block;
            white-space: nowrap;
            color: #9ca3af;
            border-radius: 3px;
            transition: 0.3s ease-in;
          }
        `}
      </style>
    </>
  );
};

export default CodeBlock;
