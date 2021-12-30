import MonacoEditor from "@uiw/react-monacoeditor";
import CodeMirror from "@uiw/react-codemirror";

const App = () => {
  return (
    <>
      <MonacoEditor
        language="xml"
        height="300px"
        options={{ theme: "vs-dark" }}
        value={`<?xml version="1.0"?>\n<configuration xmlns:xdt="http://schemas.microsoft.com/XML-Document-Transform">\n\t<connectionStrings>\n\t</connectionStrings>\n</configuration>`}
      />

      <CodeMirror
        value={`<?xml version="1.0"?>\n<configuration xmlns:xdt="http://schemas.microsoft.com/XML-Document-Transform">\n\t<connectionStrings>\n\t</connectionStrings>\n</configuration>`}
        options={{
          mode: "xml",
          lineNumbers: true,
        }}
        height="300px"
      />
    </>
  );
};

export default App;
