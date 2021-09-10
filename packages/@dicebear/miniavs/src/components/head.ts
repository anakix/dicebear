import type { ComponentGroup, ComponentPickCollection, ColorPickCollection } from '../static-types';

export const head: ComponentGroup = {
  normal: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M45.887 36.1c0 8.5-1.257 18.859-10.887 19.82v9.95S31.357 68 26.5 68 18 64.523 18 64.523V42a5 5 0 0 1-1.303-9.829C15.36 22.643 17.51 13 32.002 13c14.587 0 14.235 11.08 13.957 19.815-.037 1.145-.072 2.25-.072 3.284Z" fill="${colors.skin.value}"/>
  <path d="M35 55.92c-.478.048-.978.072-1.498.072-8.883 0-13.9-7.153-15.502-14.605v23.135s3.643 3.477 8.5 3.477 8.5-2.13 8.5-2.13V55.92Z" fill="#000" fill-opacity=".07"/>
  <path d="M34.629 55.952c-.364.026-.74.04-1.128.04-6.53 0-10.97-3.866-13.501-8.875v.424l.001.695c0 5.385 2.614 9.75 8.276 9.75.484 0 .932.004 1.348.007 3.346.028 4.59.038 5.004-2.041ZM16.697 32.172A5.002 5.002 0 0 0 18 42c.047 0 .093 0 .14-.002a25.38 25.38 0 0 1-.71-5.898 46.698 46.698 0 0 1-.733-3.928Z" fill="#000" fill-opacity=".07"/>
  <rect x="36" y="41" width="3" height="2" rx="1" fill="#000" fill-opacity=".07"/>
`,
  wide: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M46.07 40.409c.47 7.492.939 14.986-11.07 15.55v9.912S31.357 68 26.5 68 18 64.523 18 64.523V45.096a27.765 27.765 0 0 1-.412-3.113 5 5 0 0 1-.89-9.812C15.36 22.643 17.508 13 32.001 13c14.587 0 14.235 11.08 13.957 19.815-.037 1.145-.072 2.25-.072 3.284 0 1.403.091 2.856.183 4.31Z" fill="${colors.skin.value}"/>
  <path d="M17.588 41.984c-.158-1.97-.158-3.974-.158-5.884a46.698 46.698 0 0 1-.733-3.928 5.002 5.002 0 0 0 .89 9.812ZM18 45.094V64.52s3.643 3.477 8.5 3.477 8.5-2.13 8.5-2.13v-9.91c-.48.022-.979.033-1.498.033-10.792 0-14.337-4.946-15.502-10.897Z" fill="#000" fill-opacity=".07"/>
  <path d="M34.932 55.96c-.459.021-.935.032-1.43.032-7.248 0-11.227-2.231-13.412-5.5.503 4.823 3.162 8.493 8.293 8.493.49 0 .944.004 1.365.007 3.796.033 4.922.043 5.184-3.031Z" fill="#000" fill-opacity=".07"/>
  <rect x="36" y="41" width="3" height="2" rx="1" fill="#000" fill-opacity=".07"/>
`,
  thin: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M45.887 36.1C45.887 45.021 42 55 35.5 56.5a14.512 14.512 0 0 1-.5-.062v9.433S31.357 68 26.5 68 18 64.523 18 64.523V42a5 5 0 0 1-1.303-9.829C15.36 22.643 17.51 13 32.002 13c14.587 0 14.235 11.08 13.957 19.815-.037 1.145-.072 2.25-.072 3.284Z" fill="${colors.skin.value}"/>
  <path d="M18 42.002v22.523s3.643 3.477 8.5 3.477 8.5-2.13 8.5-2.13V56.44c-7.26-1.02-13.894-7.502-16.454-14.467-.18.02-.361.03-.546.03Z" fill="#000" fill-opacity=".07"/>
  <path d="M16.697 32.172A5.002 5.002 0 0 0 18 42c.185 0 .367-.01.546-.03-.718-1.955-1.116-3.949-1.116-5.87a46.698 46.698 0 0 1-.733-3.928ZM34.696 56.392C27.951 55.3 21.79 49.53 19.001 43.105L19 43.5c0 5.654 6.267 14.474 9.383 15.487 2.568.835 5.397.657 6.313-2.594Z" fill="#000" fill-opacity=".07"/>
  <rect x="36" y="41" width="3" height="2" rx="1" fill="#000" fill-opacity=".07"/>
`,
};
