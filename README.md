## This is NPM react module for type text by letter (modulefortypetext); 
Interval = 100 ms.
## How to use?
  1. You must have React framework to use this module.
  2. Type `npm i modulefortypetext`, after call this custom hook for `useTypeNamesLikeAKeyboard()`.
  3. In brackets first argument should be array of names (like `['ME','YOU','WE']`). Second argument should be setter from useState hook like `const [name,setName] = useState('');`. Third argument is interval option in ms(100 ms as default).
  4. call `name` from useState hook in your layout. As result code will be looks like `useTypeNamesLikeAKeyboard(array,setName,120)`.
  5. Greetings!
# Version now 1.0.5 
If u have problems with import try `import { useTypeNamesLikeAKeyboard } from "modulefortypetext/typetext.jsx";`
