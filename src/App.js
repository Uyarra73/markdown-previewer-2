import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text, setText] = useState(`
# H1

## H2

[title](https://www.example.com)

\`code\`

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**
`);

  // Configuración de marked
  marked.setOptions({
    breaks: true,
  });

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <div className="group">
        <h1>Markdown Previewer V2</h1>
        <textarea 
          id="editor" 
          onChange={handleInputChange} 
          value={text}
        />  
      </div>
      <div 
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
        
      ></div>
    </div>
  );
}

export default App;
