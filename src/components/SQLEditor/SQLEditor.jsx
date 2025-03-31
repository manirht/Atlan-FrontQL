import React from 'react';
import AceEditor from 'react-ace';
import { useMainContext } from '../../context/MainContext';
import ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import styles from './SQLEditor.module.css';
ace.config.set(
  'basePath', 
  'https://cdn.jsdelivr.net/npm/ace-builds@1.24.0/src-noconflict/'
);
const SQLEditor = () => {
  const { queryHistory, setQueryHistory } = useMainContext();
  console.log('Editor Content:', queryHistory.currentQuery);
  return (
    <div className={styles.editorContainer}>
      <AceEditor
        mode="sql"
        theme="monokai"
        name="sql-editor"
        width="100%"
        height="200px"
        fontSize={14}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        value={queryHistory.currentQuery}
        placeholder="Enter SQL query (e.g. SELECT * FROM customers)"
        onChange={(value) => {
          setQueryHistory(prev => ({
            ...prev,
            currentQuery: value
          }));
        }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default SQLEditor;