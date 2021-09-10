import type {
  ComponentGroup,
  ComponentPickCollection,
  ColorPickCollection,
} from '../static-types';

export const mouth: ComponentGroup = {
  concerned: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M35.118 29.872C36.176 20.38 44.226 13 54 13c9.804 0 17.874 7.426 18.892 16.96.082.767-.775 2.04-1.85 2.04H37.088c-1.08 0-2.075-1.178-1.97-2.128Z" fill="#000" fill-opacity=".7"/>
  <path d="M69.586 32H38.414c1.306-4.617 5.55-8 10.586-8 1.8 0 3.5.433 5 1.2 1.5-.767 3.2-1.2 5-1.2 5.035 0 9.28 3.383 10.586 8Z" fill="#FF4F6D"/>
  <path d="M66.567 17.75c-.493.162-1.02.25-1.567.25H44a4.98 4.98 0 0 1-2.243-.53A18.923 18.923 0 0 1 54 13c4.818 0 9.218 1.794 12.567 4.75Z" fill="#fff"/>
`,
  default: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M40 15c0 7.732 6.268 14 14 14s14-6.268 14-14" fill="#000" fill-opacity=".7"/>
`,
  disbelief: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M40 29c0-7.732 6.268-14 14-14s14 6.268 14 14" fill="#000" fill-opacity=".7"/>
`,
  eating: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path d="M28 26.244c1.358.488 2.84.756 4.392.756 5.322 0 9.821-3.153 11.294-7.486 2.475 2.156 6.177 3.525 10.314 3.525 4.137 0 7.84-1.37 10.314-3.525C65.787 23.847 70.286 27 75.608 27c1.552 0 3.034-.268 4.392-.756h-.054l-.063.001h-.06c-6.33 0-11.803-4.9-11.803-10.568 0-4.182 2.32-7.718 5.687-9.677-5.5.797-9.725 4.995-9.898 10.106-2.564 1.736-6.014 2.8-9.809 2.8-3.795 0-7.245-1.064-9.81-2.8-.172-5.11-4.398-9.309-9.896-10.106 3.366 1.959 5.687 5.495 5.687 9.677 0 5.668-5.474 10.568-11.804 10.568H28Z" fill="#000" fill-opacity=".6" opacity=".6"/>
  <path d="M17 24a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM91 24a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" fill="#FF4646" fill-opacity=".2"/>
`,
  grimace: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <rect x="22" y="7" width="64" height="26" rx="13" fill="#000" fill-opacity=".6"/>
  <rect x="24" y="9" width="60" height="22" rx="11" fill="#fff"/>
  <path d="M24.181 18H32V9.414c.954-.27 1.96-.414 3-.414h1v9h9V9h4v9h9V9h4v9h9V9h2c.683 0 1.351.062 2 .181V18h8.819l.048.282v3.436l-.048.282H75v8.819c-.649.119-1.317.181-2 .181h-2v-9h-9v9h-4v-9h-9v9h-4v-9h-9v9h-1c-1.04 0-2.046-.144-3-.414V22h-7.819a11.057 11.057 0 0 1 0-4Z" fill="#E6E6E6"/>
`,
  sad: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M40.058 27.723C40.708 20.693 46.702 16 54 16c7.342 0 13.363 4.75 13.953 11.848.03.378-.876.676-1.324.451-5.539-2.772-9.749-4.159-12.63-4.159-2.843 0-6.992 1.356-12.445 4.069-.507.252-1.534-.069-1.496-.486Z" fill="#000" fill-opacity=".7"/>
`,
  screamOpen: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M34.008 38.864C35.128 24.876 38.234 13.008 53.996 13c15.762-.008 18.92 11.943 19.998 25.994.087 1.13-.82 2.006-1.957 2.006-6.687 0-9.367-1.994-18.048-2-8.68-.006-13.232 2-17.896 2-1.144 0-2.197-.737-2.085-2.136Z" fill="#000" fill-opacity=".7"/>
  <path d="M67.024 17.573A4.982 4.982 0 0 1 65 18H44a4.977 4.977 0 0 1-2.672-.773c2.897-2.66 6.95-4.224 12.668-4.227 5.95-.003 10.104 1.698 13.028 4.573Z" fill="#fff"/>
  <path d="M69.804 40.922c-2.05-.146-3.757-.477-5.547-.824C61.53 39.57 58.61 39.003 53.99 39c-5.013-.004-8.65.664-11.725 1.229-1.45.266-2.774.509-4.06.648C39.195 35.818 43.652 32 49 32c1.8 0 3.5.433 5 1.2 1.5-.767 3.2-1.2 5-1.2 5.365 0 9.832 3.84 10.804 8.922Z" fill="#FF4F6D"/>
`,
  serious: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <rect x="42" y="18" width="24" height="6" rx="3" fill="#000" fill-opacity=".7"/>
`,
  smile: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M35.118 15.128C36.176 24.62 44.226 32 54 32c9.804 0 17.874-7.426 18.892-16.96.082-.767-.775-2.04-1.85-2.04H37.088c-1.08 0-2.075 1.178-1.97 2.128Z" fill="#000" fill-opacity=".7"/>
  <path d="M70 13H39a5 5 0 0 0 5 5h21a5 5 0 0 0 5-5Z" fill="#fff"/>
  <path d="M66.694 27.138A10.964 10.964 0 0 0 59 24c-1.8 0-3.5.433-5 1.2-1.5-.767-3.2-1.2-5-1.2-2.995 0-5.71 1.197-7.693 3.138A18.93 18.93 0 0 0 54 32c4.88 0 9.329-1.84 12.694-4.862Z" fill="#FF4F6D"/>
`,
  tongue: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M29 15.609C30.41 25.23 41.062 33 54 33c12.968 0 23.646-7.817 25-18.26.101-.4-.225-1.74-2.174-1.74H31.174c-1.79 0-2.304 1.24-2.174 2.609Z" fill="#000" fill-opacity=".7"/>
  <path d="M70 13H39a5 5 0 0 0 5 5h21a5 5 0 0 0 5-5Z" fill="#fff"/>
  <path d="m43 23.5.001.067-.001.063v8.87C43 38.851 48.149 44 54.5 44S66 38.851 66 32.5v-8.87l-.001-.063L66 23.5c0-1.933-2.91-3.5-6.5-3.5-2.01 0-3.808.491-5 1.264-1.192-.773-2.99-1.264-5-1.264-3.59 0-6.5 1.567-6.5 3.5Z" fill="#FF4F6D"/>
`,
  twinkle: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path d="M40 16c0 5.372 6.158 9 14 9s14-3.628 14-9c0-1.105-.95-2-2-2-1.293 0-1.87.905-2 2-1.242 2.938-4.317 4.716-10 5-5.683-.284-8.758-2.062-10-5-.13-1.095-.707-2-2-2-1.05 0-2 .895-2 2Z" fill="#000" fill-opacity=".6"/>
`,
  vomit: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M34.008 30.398c1.12-10.49 4.226-19.392 19.988-19.398 15.762-.006 18.92 8.957 19.998 19.495.087.848-.82 1.505-1.957 1.505-6.687 0-9.367-1.495-18.048-1.5-8.68-.005-13.232 1.5-17.896 1.5-1.144 0-2.197-.552-2.085-1.602Z" fill="#000" fill-opacity=".7"/>
  <path d="M67.862 15.1c-.81.567-1.798.9-2.862.9H44a4.982 4.982 0 0 1-3.376-1.311c2.933-2.31 7.174-3.687 13.372-3.689 6.543-.002 10.914 1.54 13.866 4.1Z" fill="#fff"/>
  <path d="M42 25a6 6 0 0 0-6 6v7a6 6 0 0 0 12 0v-2h.083a6.002 6.002 0 0 1 11.834 0H60a6 6 0 0 0 12 0v-5a6 6 0 0 0-6-6H42Z" fill="#7BB24B"/>
  <path d="M72 31a6 6 0 0 0-6-6H42a6 6 0 0 0-6 6v6a6 6 0 0 0 12 0v-2h.083a6.002 6.002 0 0 1 11.834 0H60a6 6 0 0 0 12 0v-4Z" fill="#88C553"/>
`,
};
