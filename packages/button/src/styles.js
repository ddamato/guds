import { css } from 'linaria';

export default css` { 
  :global() {
    .button {
      font: inherit;
      background: dodgerblue;
      color: white;
      border: 1px solid transparent;
      padding: .5em 1em;
      border-radius: 2px;
      cursor: pointer;
    }
  }
}
`;