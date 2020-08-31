import { css } from 'linaria';

export default css` { 
  :global() {
    .alert {
      padding: 1rem;
      border-radius: 2px;

      &-critical {
        background: red;
        color: white;
      }

      &-warning {
        background: orange;
        color: black;
      }

    }
  }
}
`;