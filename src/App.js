import React from 'react';
import * as munsell from 'munsell';

import './styles.css';

function App() {
  const [val, setVal] = React.useState('');

  let l, a, b;
  try {
    [l, a, b] = munsell.munsellToLab(val);
  } catch (err) {
    console.error(err);
  }

  return (
    <>
      <form>
        <label>
          Input munsell color:
          <br />
          <input
            type="text"
            value={val}
            onChange={(ev) => setVal(ev.target.value)}
          />
        </label>
      </form>
      <p style={{ marginTop: 16, color: '#555' }}>
        Example Munsell color: <em>2.3YR 6.7/4.22</em>
      </p>
      <br />
      <br />
      <br />
      <p>
        L: {l}
        <br />
        a: {a}
        <br />
        b: {b}
        <br />
      </p>
      <br />
      <br />
      <br />
      <p>
        <a href="https://privet-kitty.github.io/munsell.js/modules.html">
          Source
        </a>
      </p>
    </>
  );
}

export default App;
