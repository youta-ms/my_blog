export const ResetStyle = () => {
  return (
    <>
      <style global jsx>
        {`
          /* resset.dev • v5.0.2 */
          html {
            box-sizing: border-box;
            -webkit-text-size-adjust: 100%;
            word-break: normal;
            -moz-tab-size: 4;
            tab-size: 4;
          }
          *,
          ::before,
          ::after {
            background-repeat: no-repeat;
            box-sizing: inherit;
          }
          ::before,
          ::after {
            text-decoration: inherit;
            vertical-align: inherit;
          }
          * {
            padding: 0;
            margin: 0;
          }
          hr {
            overflow: visible;
            height: 0;
            color: inherit;
          }
          details,
          main {
            display: block;
          }
          summary {
            display: list-item;
          }
          small {
            font-size: 80%;
          }
          [hidden] {
            display: none;
          }
          abbr[title] {
            border-bottom: none;
            text-decoration: underline;
            text-decoration: underline dotted;
          }
          a {
            background-color: transparent;
          }
          a:active,
          a:hover {
            outline-width: 0;
          }
          code,
          kbd,
          pre,
          samp {
            font-family: monospace, monospace;
          }
          pre {
            font-size: 1em;
          }
          b,
          strong {
            font-weight: bolder;
          }
          /* https://gist.github.com/unruthless/413930 */
          sub,
          sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
          }
          sub {
            bottom: -0.25em;
          }
          sup {
            top: -0.5em;
          }
          table {
            border-color: inherit;
            text-indent: 0;
          }
          iframe {
            border-style: none;
          }
          /* # =================================================================
            # Forms
            # ================================================================= */
          input {
            border-radius: 0;
          }
          [type='number']::-webkit-inner-spin-button,
          [type='number']::-webkit-outer-spin-button {
            height: auto;
          }
          [type='search'] {
            -webkit-appearance: textfield;
            outline-offset: -2px;
          }
          [type='search']::-webkit-search-decoration {
            -webkit-appearance: none;
          }
          textarea {
            overflow: auto;
            resize: vertical;
          }
          button,
          input,
          optgroup,
          select,
          textarea {
            font: inherit;
          }
          optgroup {
            font-weight: bold;
          }
          button {
            overflow: visible;
          }
          button,
          select {
            text-transform: none;
          }
          button,
          [type='button'],
          [type='reset'],
          [type='submit'],
          [role='button'] {
            cursor: pointer;
          }
          button::-moz-focus-inner,
          [type='button']::-moz-focus-inner,
          [type='reset']::-moz-focus-inner,
          [type='submit']::-moz-focus-inner {
            border-style: none;
            padding: 0;
          }
          button:-moz-focusring,
          [type='button']::-moz-focus-inner,
          [type='reset']::-moz-focus-inner,
          [type='submit']::-moz-focus-inner {
            outline: 1px dotted ButtonText;
          }
          button,
          html [type='button'],
          [type='reset'],
          [type='submit'] {
            -webkit-appearance: button;
          }
          button,
          input,
          select,
          textarea {
            background-color: transparent;
            border-style: none;
          }
          a:focus,
          button:focus,
          input:focus,
          select:focus,
          textarea:focus {
            outline-width: 0;
          }
          select {
            -moz-appearance: none;
            -webkit-appearance: none;
          }
          select::-ms-expand {
            display: none;
          }
          select::-ms-value {
            color: currentColor;
          }
          legend {
            border: 0;
            color: inherit;
            display: table;
            max-width: 100%;
            white-space: normal;
            max-width: 100%;
          }
          ::-webkit-file-upload-button {
            /* Correct the inability to style clickable types in iOS and Safari */
            -webkit-appearance: button;
            color: inherit;
            font: inherit;
          }
          [disabled] {
            cursor: default;
          }
          /* # =================================================================
            # Specify media element style
            # ================================================================= */
          img {
            border-style: none;
            position: relative!important;
          }
          progress {
            vertical-align: baseline;
          }
          /* # =================================================================
            # Accessibility
            # ================================================================= */

          [aria-busy='true'] {
            cursor: progress;
          }
          [aria-controls] {
            cursor: pointer;
          }
          [aria-disabled='true'] {
            cursor: default;
          }
        `}
      </style>
    </>
  );
};
