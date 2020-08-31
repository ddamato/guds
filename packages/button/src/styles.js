import { css } from 'linaria';

export default css` { 
  :global() {
    button {
      font: inherit;
      background: blue;
    }
  }
}
`;