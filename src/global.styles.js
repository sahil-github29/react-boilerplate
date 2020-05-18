import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: inherit;
  font-size: inherit;
}
:root {
  --bg-primary: #ffa45c;
  --bg-secondary: #302822;

  --text-color-1: #766d66;
  --text-color-2: #696059;
}
html {
  box-sizing: border-box;
  font-size: 62.5%; /* 10px/16px = 62.5% -> 1rem = 10px */
}
body {
  font-family: 'Montserrat', sans-serif;
  color: var(--text-color-1);
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.6;
}

a,
a:link {
  color: currentColor;
  text-decoration: none;
}

/* ATOMIC CLASSES */
.mb-sm {
  margin-bottom: 2rem;
}
.mb-md {
  margin-bottom: 4rem;
}
.mb-lg {
  margin-bottom: 6rem;
}
.mb-xl {
  margin-bottom: 8rem;
}

/* MIXINS */
@mixin shadow {
  box-shadow: 0px 0px 5px 0px rgba(138, 133, 138, 1);
}

`;
