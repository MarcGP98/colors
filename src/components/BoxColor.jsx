import { forwardRef } from 'react';

const BoxColor = forwardRef(({ color, inputValue, isMatch }, ref) => {
  return (
    <div
      ref={ref}
      className={`box ${color}`}
      style={{
        backgroundColor: isMatch ? color : 'transparent',
      }}
    >
      <p>{inputValue}</p>
      <p>{isMatch ? `Sí soy el color ${color}` : 'No soy el color'}</p>
    </div>
  );
});

export default BoxColor;