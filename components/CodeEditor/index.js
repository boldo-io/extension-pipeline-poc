import { useState } from 'react';

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Editor from 'react-simple-code-editor'
import Prism from "prismjs";
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import css from "./CodeEditor.module.scss";

const initialCode = `const add = (a, b) => {
  return a + b;
}
`;

const styles = {
  // root: {
    minHeight: "100%",
    boxSizing: 'border-box',
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    ...theme.plain
  // }
};

const highlight = code => (
  <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <>
        {tokens.map((line, i) => (
          <div className={css.Line} {...getLineProps({ line, key: i })}>
            {/* <span className={css.LineNo}>{i + 1}</span>
            <span className={css.LineContent}> */}
              {line.map((token, key) => <span key={key} {...getTokenProps({ token, key })} />)}
            {/* </span> */}
          </div>
        ))}
      </>
    )}
  </Highlight>
);

const CodeEditor = () => {
  const [ code, setCode ] = useState(initialCode);
  const [ output, setOutput ] = useState();

  const _setOutput = txt => {
    setOutput(txt);
  };

  return(
    <Paper elevation={3} className={css.editorContainer}>
      <Editor
        value={code}
        onValueChange={setCode}
        highlight={highlight}
        padding={10}
        style={styles}
      />
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {output}
      </pre>
      <Button
        variant="contained"
        color='secondary'
        fullWidth
        sx={{ 
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          color: "white"
        }}
        onClick={() => _setOutput(eval(code))}
      >
        Run Code
      </Button>
    </Paper>
  );
};

export default CodeEditor;