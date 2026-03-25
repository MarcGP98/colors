import { useRef, useState } from 'react';
import BoxColor from './BoxColor';

function MyFormChallenge() {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

  const [inputValue, setInputValue] = useState('');

  const boxRefs = useRef([]);

  const handleChange = (event) => {
    setInputValue(event.target.value.toLowerCase());
  };

  return (
    <div className="challenge-container">
      <h1>Input Box Colors</h1>

      <input
        type="text"
        placeholder="Escribe un color"
        value={inputValue}
        onChange={handleChange}
      />

      <div className="boxes-container">
        {colors.map((color, index) => {
          let isMatch = false;

          if (boxRefs.current[index]) {
            isMatch = boxRefs.current[index].className.includes(inputValue) && inputValue !== '';
          }

          return (
            <BoxColor
              key={color}
              ref={(element) => (boxRefs.current[index] = element)}
              color={color}
              inputValue={inputValue}
              isMatch={isMatch}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyFormChallenge;