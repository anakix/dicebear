import type {
  ComponentGroup,
  ComponentPickCollection,
  ColorPickCollection,
} from '../static-types';

export const accessories: ComponentGroup = {
  kurt: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M71 15.111c-11.038 0-12.63-9.084-35.33-10.37C12.985 3.717 5.815 10.45 5.776 15.11c.037 4.293-1.128 15.45 13.588 28.519 14.773 15.512 29.906 10.252 35.33 5.185C60.135 46.473 66.34 25.46 71 25.482c4.66.021 10.865 20.991 16.306 23.333 5.423 5.067 20.557 10.327 35.329-5.185 14.717-13.069 13.552-24.226 13.588-28.519-.038-4.662-7.209-11.394-29.894-10.37-22.7 1.286-24.292 10.37-35.33 10.37Z" fill="#000" fill-opacity=".1"/>
  <path d="M71 13.111c-11.038 0-12.63-9.084-35.33-10.37C12.985 1.717 5.815 8.449 5.776 13.11c.037 4.293-1.128 15.45 13.588 28.519 14.773 15.512 29.906 10.252 35.33 5.185C60.135 44.473 66.34 23.46 71 23.482c4.66.021 10.865 20.991 16.306 23.333 5.423 5.067 20.557 10.327 35.329-5.185 14.717-13.069 13.552-24.226 13.588-28.519-.038-4.662-7.209-11.394-29.894-10.37-22.7 1.286-24.292 10.37-35.33 10.37Z" fill="${colors.accessories.value}"/>
  <path d="M32.953 7.926c14.262-.284 27.557 7.897 27.176 15.555-.22 5.053-2.932 22.825-19.023 23.334-16.092.489-24.808-17.793-24.46-25.926.195-3.51 2.051-12.664 16.307-12.963ZM109.047 7.926C94.784 7.642 81.49 15.823 81.871 23.48c.22 5.053 2.932 22.825 19.023 23.334 16.091.489 24.808-17.793 24.459-25.926-.195-3.51-2.05-12.664-16.306-12.963Z" fill="#2F383B"/>
`,
  prescription01: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <g fill-rule="evenodd" clip-rule="evenodd">
    <path d="M111.712 10.488c4.666.16 8 .887 10.548 4.519 3.012.155 6.253.373 8.981 1.632 3.385 1.562 3.908 5.1-.359 5.587-1.859.213-3.72-.12-5.552-.448l-.186-.033a9.133 9.133 0 0 0-.339-.054c1.104 9.461-6.207 20.869-14.228 24.346-10.977 4.76-23.24-.508-29.043-10.033-2.626-4.31-4.142-10.515-4.466-15.86-.42-.204-.83-.441-1.23-.673a18.141 18.141 0 0 0-1.119-.616c-2.007-.978-5.338-1.098-7.506 0a20.01 20.01 0 0 0-1.039.582c-.426.25-.864.505-1.313.722-.325 5.343-1.841 11.54-4.465 15.847-5.804 9.526-18.067 14.793-29.044 10.033-8.021-3.477-15.333-14.886-14.227-24.348a9.56 9.56 0 0 0-.338.054l-.185.033c-1.833.328-3.694.66-5.553.448-4.267-.487-3.744-4.025-.359-5.587 2.728-1.259 5.969-1.476 8.982-1.633 2.547-3.63 5.881-4.355 10.546-4.515l23.291-.457c5.189-.14 9.718-.01 11.033 4.606 2.089-.814 4.505-1.255 6.35-1.255 1.858 0 4.348.448 6.49 1.274 1.306-4.638 5.842-4.767 11.039-4.627l23.291.456Zm-24.031 6.785c-2.372.022-3.493.416-3.897 2.89-.41 2.505-.012 5.322.46 7.79.721 3.767 1.92 7.459 4.708 10.213 1.47 1.45 3.261 2.606 5.167 3.396 1.012.419 2.081.722 3.15.951.114.025.544.09.963.153.626.094 1.228.185.711.132l-.095-.01-.065-.008a47.075 47.075 0 0 1 .16.017c3.724.397 7.719.312 10.814-2.047 3.533-2.692 5.952-6.952 7.016-11.196.623-2.483 1.93-8.422-.459-10.407-2.737-2.275-28.633-1.874-28.633-1.874Zm-33.432.002c2.372.023 3.493.417 3.897 2.89.41 2.506.011 5.322-.46 7.79-.721 3.768-1.92 7.46-4.708 10.214-1.47 1.45-3.261 2.606-5.167 3.395-1.012.42-2.081.722-3.15.952-.114.024-.544.09-.962.152-.64.097-1.255.19-.678.128-3.734.4-7.743.323-10.849-2.044-3.532-2.692-5.952-6.952-7.015-11.196-.623-2.483-1.93-8.422.459-10.407 2.737-2.274 28.633-1.874 28.633-1.874ZM43.318 42.764Z" fill="#000" fill-opacity=".1"/>
    <path d="M111.712 8.488c4.666.16 8 .887 10.548 4.519 3.012.155 6.253.373 8.981 1.632 3.385 1.562 3.908 5.1-.359 5.587-1.859.213-3.72-.12-5.552-.448l-.186-.033a9.133 9.133 0 0 0-.339-.054c1.104 9.461-6.207 20.869-14.228 24.346-10.977 4.76-23.24-.508-29.043-10.033-2.626-4.31-4.142-10.515-4.466-15.86-.42-.204-.83-.441-1.23-.673a18.141 18.141 0 0 0-1.119-.616c-2.007-.978-5.338-1.098-7.506 0a20.01 20.01 0 0 0-1.039.582c-.426.25-.864.505-1.313.722-.325 5.343-1.841 11.54-4.465 15.847-5.804 9.526-18.067 14.793-29.044 10.033-8.021-3.477-15.333-14.886-14.227-24.348a9.56 9.56 0 0 0-.338.054l-.185.033c-1.833.328-3.694.66-5.553.448-4.267-.487-3.744-4.025-.359-5.587 2.728-1.259 5.969-1.476 8.982-1.633 2.547-3.63 5.881-4.355 10.546-4.515l23.291-.457c5.189-.14 9.718-.01 11.033 4.606 2.089-.814 4.505-1.255 6.35-1.255 1.858 0 4.348.448 6.49 1.274 1.306-4.638 5.842-4.767 11.039-4.627l23.291.456Zm-24.031 6.785c-2.372.022-3.493.416-3.897 2.89-.41 2.505-.012 5.322.46 7.79.721 3.767 1.92 7.459 4.708 10.213 1.47 1.45 3.261 2.606 5.167 3.396 1.012.419 2.081.722 3.15.951.114.025.544.09.963.153.626.094 1.228.185.711.132l-.095-.01-.065-.008a47.075 47.075 0 0 1 .16.017c3.724.397 7.719.312 10.814-2.047 3.533-2.692 5.952-6.952 7.016-11.196.623-2.483 1.93-8.422-.459-10.407-2.737-2.275-28.633-1.874-28.633-1.874Zm-33.432.002c2.372.022 3.493.417 3.897 2.89.41 2.506.011 5.322-.46 7.79-.721 3.768-1.92 7.46-4.708 10.214-1.47 1.45-3.261 2.606-5.167 3.395-1.012.42-2.081.722-3.15.952-.114.024-.544.09-.962.152-.64.097-1.255.19-.678.128-3.734.4-7.743.323-10.849-2.044-3.532-2.692-5.952-6.952-7.015-11.196-.623-2.483-1.93-8.422.459-10.407 2.737-2.275 28.633-1.874 28.633-1.874ZM43.318 40.764Z" fill="${colors.accessories.value}"/>
  </g>
`,
  prescription02: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <g fill-rule="evenodd" clip-rule="evenodd">
    <path d="M38.5 9C17.21 9 9.646 14.096 8.955 14.772 7.324 14.772 6 16.062 6 17.657v2.886c0 1.596 1.324 2.886 2.955 2.886 0 0 5.909 0 5.909 2.886 0 .435.067.644.181.68A62.59 62.59 0 0 0 15 29.5C15 42.336 23.315 50 37.242 50H40c14.721 0 25-8.431 25-20.5 0-1.502-.038-2.999-.17-4.46l1.583-.773a7.917 7.917 0 0 1 1.891-.633c1.855-.38 3.952-.227 5.992.276.732.18 1.26.354 1.504.45l1.381.547C77.041 26.41 77 27.953 77 29.5 77 42.336 85.315 50 99.242 50H102c14.721 0 25-8.431 25-20.5 0-1.536-.04-3.067-.178-4.56 1.739-1.511 6.223-1.511 6.223-1.511 1.634 0 2.955-1.29 2.955-2.886v-2.886c0-1.596-1.321-2.885-2.955-2.885C132.354 14.096 124.79 9 103.5 9H100.53c-1.79 0-3.445.069-4.975.201-9.533.539-14.679 2.15-19.913 4.696-.542.188-2.396.776-4.563.869-2.379-.076-4.412-.767-4.81-.908l-.419-.206-.006-.003c-4.935-2.415-8.429-4.125-20.772-4.547A61.165 61.165 0 0 0 41.47 9H38.5ZM19 30.502C19 21.84 19 15 38.385 15h3.23C61 15 61 21.841 61 30.502 61 39.627 52.365 46 40 46h-3.03C22.117 46 19 37.572 19 30.502Zm62 0C81 21.84 81 15 100.385 15h3.23C123 15 123 21.841 123 30.502 123 39.627 114.365 46 102 46h-3.03C84.12 46 81 37.572 81 30.502Z" fill="#000" fill-opacity=".1"/>
    <path d="M38.5 7C17.21 7 9.646 12.096 8.955 12.772 7.324 12.772 6 14.062 6 15.657v2.886c0 1.596 1.324 2.886 2.955 2.886 0 0 5.909 0 5.909 2.886 0 .435.067.644.181.68A62.59 62.59 0 0 0 15 27.5C15 40.336 23.315 48 37.242 48H40c14.721 0 25-8.431 25-20.5 0-1.502-.038-2.999-.17-4.46l1.583-.773a7.917 7.917 0 0 1 1.891-.633c1.855-.38 3.952-.227 5.992.276.732.18 1.26.354 1.504.45l1.381.547C77.041 24.41 77 25.953 77 27.5 77 40.336 85.315 48 99.242 48H102c14.721 0 25-8.431 25-20.5 0-1.536-.04-3.067-.178-4.56 1.739-1.511 6.223-1.511 6.223-1.511 1.634 0 2.955-1.29 2.955-2.886v-2.886c0-1.595-1.321-2.885-2.955-2.885C132.354 12.096 124.79 7 103.5 7H100.53c-1.79 0-3.445.069-4.975.2-9.533.54-14.679 2.152-19.913 4.697-.542.188-2.396.776-4.563.869-2.379-.076-4.412-.767-4.81-.908l-.419-.206-.006-.003c-4.935-2.415-8.429-4.125-20.772-4.547A61.165 61.165 0 0 0 41.47 7H38.5ZM19 28.502C19 19.84 19 13 38.385 13h3.23C61 13 61 19.841 61 28.502 61 37.627 52.365 44 40 44h-3.03C22.117 44 19 35.572 19 28.502Zm62 0C81 19.84 81 13 100.385 13h3.23C123 13 123 19.841 123 28.502 123 37.627 114.365 44 102 44h-3.03C84.12 44 81 35.572 81 28.502Z" fill="${colors.accessories.value}"/>
  </g>
`,
  round: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g fill-rule="evenodd" clip-rule="evenodd">
    <path d="M40 53c-13.255 0-24-10.745-24-24 0-2.435.363-4.785 1.037-7H10.5a2.5 2.5 0 0 1 0-5h8c.229 0 .45.03.66.088C23.297 9.866 31.08 5 40 5c9.352 0 17.455 5.35 21.416 13.155C63.493 15.039 66.949 13 70.862 13c4.013 0 7.545 2.144 9.603 5.394C84.38 10.46 92.553 5 102 5c8.92 0 16.703 4.866 20.84 12.088.21-.057.432-.088.66-.088h8a2.5 2.5 0 1 1 0 5h-6.537A24.006 24.006 0 0 1 126 29c0 13.255-10.745 24-24 24S78 42.255 78 29c0-1.422.124-2.815.36-4.169C78.277 20.455 74.915 17 70.863 17c-3.736 0-6.887 2.94-7.42 6.83.365 1.665.558 3.395.558 5.17 0 13.255-10.745 24-24 24Zm0-4c11.046 0 20-8.954 20-20S51.046 9 40 9s-20 8.954-20 20 8.954 20 20 20Zm82-20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20Z" fill="#000" fill-opacity=".1"/>
    <path d="M40 51c-13.255 0-24-10.745-24-24 0-2.435.363-4.785 1.037-7H10.5a2.5 2.5 0 0 1 0-5h8c.229 0 .45.03.66.088C23.297 7.866 31.08 3 40 3c9.352 0 17.455 5.35 21.416 13.155C63.493 13.039 66.949 11 70.862 11c4.013 0 7.545 2.144 9.603 5.394C84.38 8.46 92.553 3 102 3c8.92 0 16.703 4.866 20.84 12.088.21-.057.432-.088.66-.088h8a2.5 2.5 0 1 1 0 5h-6.537A24.006 24.006 0 0 1 126 27c0 13.255-10.745 24-24 24S78 40.255 78 27c0-1.422.124-2.815.36-4.169C78.277 18.455 74.915 15 70.863 15c-3.736 0-6.887 2.94-7.42 6.83.365 1.665.558 3.395.558 5.17 0 13.255-10.745 24-24 24Zm0-4c11.046 0 20-8.954 20-20S51.046 7 40 7s-20 8.954-20 20 8.954 20 20 20Zm82-20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20Z" fill="${colors.accessories.value}"/>
  </g>
`,
  sunglasses: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <g fill-rule="evenodd" clip-rule="evenodd">
    <path d="M111.712 10.488c4.666.16 8 .887 10.548 4.519 3.012.155 6.253.373 8.981 1.632 3.385 1.562 3.908 5.1-.359 5.587-1.859.213-3.72-.12-5.552-.448l-.186-.033a9.133 9.133 0 0 0-.339-.054c1.104 9.461-6.207 20.869-14.228 24.346-10.977 4.76-23.24-.508-29.043-10.033-2.626-4.31-4.142-10.515-4.466-15.86-.42-.204-.83-.441-1.23-.673a18.141 18.141 0 0 0-1.119-.616c-2.007-.978-5.338-1.098-7.506 0a20.01 20.01 0 0 0-1.039.582c-.426.25-.864.505-1.313.722-.325 5.343-1.841 11.54-4.465 15.847-5.804 9.526-18.067 14.793-29.044 10.033-8.021-3.477-15.333-14.886-14.227-24.348a9.336 9.336 0 0 0-.338.054l-.185.033c-1.833.328-3.694.66-5.553.448-4.267-.487-3.744-4.025-.359-5.587 2.728-1.259 5.969-1.476 8.982-1.633 2.547-3.63 5.881-4.355 10.546-4.515l23.291-.457c5.189-.14 9.718-.01 11.033 4.606 2.089-.814 4.505-1.255 6.35-1.255 1.858 0 4.348.448 6.49 1.274 1.306-4.638 5.842-4.767 11.039-4.627l23.291.456Zm-24.031 6.785c-2.372.022-3.493.416-3.897 2.89-.41 2.505-.012 5.322.46 7.79.721 3.767 1.92 7.459 4.708 10.213 1.47 1.45 3.261 2.606 5.167 3.396 1.012.419 2.081.722 3.15.951.114.025.544.09.963.153.626.094 1.228.185.711.132 3.724.396 7.719.311 10.814-2.048 3.533-2.692 5.952-6.952 7.016-11.196.623-2.483 1.93-8.422-.459-10.407-2.737-2.275-28.633-1.874-28.633-1.874Zm-33.432.002c2.372.023 3.493.417 3.897 2.89.41 2.506.011 5.322-.46 7.79-.721 3.768-1.92 7.46-4.708 10.214-1.47 1.45-3.261 2.606-5.167 3.395-1.012.42-2.081.722-3.15.952-.114.024-.544.09-.962.152-.64.097-1.255.19-.678.128-3.734.4-7.743.323-10.849-2.044-3.532-2.692-5.952-6.952-7.015-11.196-.623-2.483-1.93-8.422.459-10.407 2.737-2.274 28.633-1.874 28.633-1.874ZM43.318 42.764Z" fill="#000" fill-opacity=".1"/>
    <path d="M55.01 14.277c2.512.024 3.698.45 4.126 3.115.434 2.7.012 5.736-.488 8.395-.762 4.06-2.03 8.04-4.983 11.008-1.556 1.563-3.453 2.808-5.47 3.66-1.072.451-2.204.777-3.335 1.025-.33.072-3.154.468-1.422.267-4.041.47-8.425.45-11.8-2.168-3.74-2.901-6.301-7.493-7.427-12.066-.66-2.676-2.044-9.076.486-11.216 2.898-2.452 30.314-2.02 30.314-2.02Z" fill="#000" fill-opacity=".7"/>
    <path d="M55.01 14.277c2.512.024 3.698.45 4.126 3.115.434 2.7.012 5.736-.488 8.395-.762 4.06-2.03 8.04-4.983 11.008-1.556 1.563-3.453 2.808-5.47 3.66-1.072.451-2.204.777-3.335 1.025-.33.072-3.154.468-1.422.267-4.041.47-8.425.45-11.8-2.168-3.74-2.901-6.301-7.493-7.427-12.066-.66-2.676-2.044-9.076.486-11.216 2.898-2.452 30.314-2.02 30.314-2.02Z" fill="url(#accessoriesSunglasses-a)" style="mix-blend-mode:screen"/>
    <path d="M86.92 14.275c-2.512.024-3.699.449-4.126 3.114-.434 2.7-.012 5.736.487 8.395.763 4.061 2.032 8.04 4.984 11.008 1.556 1.563 3.453 2.809 5.47 3.66 1.072.451 2.204.778 3.335 1.025.33.072 3.153.469 1.422.267 4.041.47 8.425.45 11.799-2.167 3.741-2.902 6.302-7.493 7.428-12.066.659-2.677 2.043-9.077-.486-11.217-2.898-2.451-30.314-2.02-30.314-2.02Z" fill="#000" fill-opacity=".7"/>
    <path d="M86.92 14.275c-2.512.024-3.699.449-4.126 3.114-.434 2.7-.012 5.736.487 8.395.763 4.061 2.032 8.04 4.984 11.008 1.556 1.563 3.453 2.809 5.47 3.66 1.072.451 2.204.778 3.335 1.025.33.072 3.153.469 1.422.267 4.041.47 8.425.45 11.799-2.167 3.741-2.902 6.302-7.493 7.428-12.066.659-2.677 2.043-9.077-.486-11.217-2.898-2.451-30.314-2.02-30.314-2.02Z" fill="url(#accessoriesSunglasses-b)" style="mix-blend-mode:screen"/>
    <path d="M111.712 8.488c4.666.16 8 .887 10.548 4.519 3.012.155 6.253.373 8.981 1.632 3.385 1.562 3.908 5.1-.359 5.587-1.859.213-3.72-.12-5.552-.448l-.186-.033a9.133 9.133 0 0 0-.339-.054c1.104 9.461-6.207 20.869-14.228 24.346-10.977 4.76-23.24-.508-29.043-10.033-2.626-4.31-4.142-10.515-4.466-15.86-.42-.204-.83-.441-1.23-.673a18.141 18.141 0 0 0-1.119-.616c-2.007-.978-5.338-1.098-7.506 0a20.01 20.01 0 0 0-1.039.582c-.426.25-.864.505-1.313.722-.325 5.343-1.841 11.54-4.465 15.847-5.804 9.526-18.067 14.793-29.044 10.033-8.021-3.477-15.333-14.886-14.227-24.348a9.336 9.336 0 0 0-.338.054l-.185.033c-1.833.328-3.694.66-5.553.448-4.267-.487-3.744-4.025-.359-5.587 2.728-1.259 5.969-1.476 8.982-1.633 2.547-3.63 5.881-4.355 10.546-4.516l23.291-.456c5.189-.14 9.718-.01 11.033 4.606 2.089-.814 4.505-1.255 6.35-1.255 1.858 0 4.348.448 6.49 1.274 1.306-4.638 5.842-4.767 11.039-4.627l23.291.456Zm-24.031 6.785c-2.372.022-3.493.416-3.897 2.89-.41 2.505-.012 5.322.46 7.79.721 3.767 1.92 7.459 4.708 10.213 1.47 1.45 3.261 2.606 5.167 3.396 1.012.419 2.081.722 3.15.951.114.025.544.09.963.153.626.094 1.228.185.711.132 3.724.396 7.719.311 10.814-2.048 3.533-2.692 5.952-6.952 7.016-11.196.623-2.483 1.93-8.422-.459-10.407-2.737-2.275-28.633-1.874-28.633-1.874Zm-33.432.002c2.372.022 3.493.417 3.897 2.89.41 2.506.011 5.322-.46 7.79-.721 3.768-1.92 7.46-4.708 10.214-1.47 1.45-3.261 2.606-5.167 3.395-1.012.42-2.081.722-3.15.952-.114.024-.544.09-.962.152-.64.097-1.255.19-.678.128-3.734.4-7.743.323-10.849-2.044-3.532-2.692-5.952-6.952-7.015-11.196-.623-2.483-1.93-8.422.459-10.407 2.737-2.275 28.633-1.874 28.633-1.874ZM43.318 40.763Z" fill="${colors.accessories.value}"/>
  </g>
  <defs>
    <linearGradient id="accessoriesSunglasses-a" x1="28.557" y1="14.248" x2="28.557" y2="33.801" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff" stop-opacity=".5"/>
      <stop offset="1" stop-opacity=".5"/>
    </linearGradient>
    <linearGradient id="accessoriesSunglasses-b" x1="82.613" y1="14.245" x2="82.613" y2="41.978" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff" stop-opacity=".5"/>
      <stop offset=".705" stop-opacity=".5"/>
    </linearGradient>
  </defs>
`,
  wayfarers: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M39.25 9c-21.127 0-28.632 5.172-29.318 5.857A2.93 2.93 0 0 0 7 17.786v2.928a2.93 2.93 0 0 0 2.932 2.929s5.864 0 5.864 2.928c0 .19.012.337.035.447a62.957 62.957 0 0 0-.044 2.482c0 12.836 8.29 20.5 22.179 20.5h2.75c14.68 0 24.93-8.431 24.93-20.5 0-1.44-.036-2.875-.154-4.28l1.456-.727a7.739 7.739 0 0 1 1.877-.642c1.84-.386 3.922-.23 5.946.28.726.183 1.25.36 1.493.458l1.255.507c-.127 1.444-.164 2.921-.164 4.404 0 12.836 8.291 20.5 22.18 20.5h2.749c14.68 0 24.929-8.431 24.929-20.5 0-.83-.011-1.66-.044-2.483.023-.109.036-.256.036-.446 0-2.928 5.863-2.928 5.863-2.928A2.928 2.928 0 0 0 136 20.714v-2.928a2.928 2.928 0 0 0-2.932-2.929C132.382 14.172 124.877 9 103.75 9h-2.932c-1.831 0-3.52.072-5.079.211-9.379.555-14.462 2.187-19.633 4.759a16.54 16.54 0 0 1-4.527.881c-2.361-.077-4.38-.778-4.774-.92l-.415-.21-.007-.004c-4.888-2.446-8.35-4.179-20.545-4.612A60.677 60.677 0 0 0 42.182 9H39.25Zm-1.117 5.863a192.746 192.746 0 0 1 7.599.09c14.05.845 14.05 6.956 14.05 14.547 0 8.622-7.84 14.643-19.066 14.643h-2.75C24.48 44.143 21.65 36.18 21.65 29.5c0-8.006 0-14.365 16.483-14.637Zm26.11 4.353.088.036-.063.031a49.3 49.3 0 0 0-.026-.067Zm14.512.007-.067.027.05.02.017-.047Zm16.705-4.124c2.404-.16 5.134-.242 8.29-.242.378 0 .751.002 1.118.006 16.482.272 16.482 6.632 16.482 14.637 0 8.622-7.84 14.643-19.066 14.643h-2.75c-13.483 0-16.315-7.963-16.315-14.643 0-7.25 0-13.15 12.241-14.4Z" fill="#000" fill-opacity=".1"/>
  <path d="M40.716 45.071c13.747 0 21.997-7.869 21.997-17.571 0-9.705-1.284-17.571-20.531-17.571H39.25c-19.248 0-20.532 7.866-20.532 17.571 0 9.7 5.5 17.571 19.248 17.571h2.75Z" fill="#000" fill-opacity=".7"/>
  <path d="M40.716 45.071c13.747 0 21.997-7.869 21.997-17.571 0-9.705-1.284-17.571-20.531-17.571H39.25c-19.248 0-20.532 7.866-20.532 17.571 0 9.7 5.5 17.571 19.248 17.571h2.75Z" fill="url(#accessoriesWayfarers-a)" style="mix-blend-mode:screen"/>
  <path d="M102.284 45.071c13.75 0 21.997-7.869 21.997-17.571 0-9.705-1.287-17.571-20.531-17.571h-2.932c-19.247 0-20.531 7.866-20.531 17.571 0 9.7 5.5 17.571 19.247 17.571h2.75Z" fill="#000" fill-opacity=".7"/>
  <path d="M102.284 45.071c13.75 0 21.997-7.869 21.997-17.571 0-9.705-1.287-17.571-20.531-17.571h-2.932c-19.247 0-20.531 7.866-20.531 17.571 0 9.7 5.5 17.571 19.247 17.571h2.75Z" fill="url(#accessoriesWayfarers-b)" style="mix-blend-mode:screen"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M39.25 7c-21.127 0-28.632 5.172-29.318 5.857A2.93 2.93 0 0 0 7 15.786v2.928a2.93 2.93 0 0 0 2.932 2.929s5.864 0 5.864 2.928c0 .19.012.337.035.447a62.957 62.957 0 0 0-.044 2.482c0 12.836 8.29 20.5 22.179 20.5h2.75c14.68 0 24.93-8.431 24.93-20.5 0-1.44-.036-2.875-.154-4.28l1.456-.727a7.739 7.739 0 0 1 1.877-.642c1.84-.386 3.922-.23 5.946.28.726.183 1.25.36 1.493.458l1.255.507c-.127 1.444-.164 2.921-.164 4.404 0 12.836 8.291 20.5 22.18 20.5h2.749c14.68 0 24.929-8.431 24.929-20.5 0-.83-.011-1.66-.044-2.483.023-.109.036-.256.036-.446 0-2.928 5.863-2.928 5.863-2.928A2.928 2.928 0 0 0 136 18.714v-2.928a2.928 2.928 0 0 0-2.932-2.929C132.382 12.172 124.877 7 103.75 7h-2.932c-1.831 0-3.52.072-5.079.211-9.379.555-14.462 2.187-19.633 4.759a16.54 16.54 0 0 1-4.527.881c-2.361-.077-4.38-.778-4.774-.92l-.415-.21-.007-.004c-4.888-2.446-8.35-4.179-20.545-4.612A60.677 60.677 0 0 0 42.182 7H39.25Zm-1.117 5.863a192.746 192.746 0 0 1 7.599.09c14.05.845 14.05 6.956 14.05 14.547 0 8.622-7.84 14.643-19.066 14.643h-2.75C24.48 42.143 21.65 34.18 21.65 27.5c0-8.006 0-14.365 16.483-14.637Zm26.11 4.353.088.036-.063.031a49.3 49.3 0 0 0-.026-.067Zm14.512.007-.067.027.05.02.017-.047Zm16.705-4.124c2.404-.16 5.134-.242 8.29-.242.378 0 .751.002 1.118.006 16.482.272 16.482 6.632 16.482 14.637 0 8.622-7.84 14.643-19.066 14.643h-2.75c-13.483 0-16.315-7.963-16.315-14.643 0-7.25 0-13.15 12.241-14.4Z" fill="${colors.accessories.value}"/>
  <defs>
    <linearGradient id="accessoriesWayfarers-a" x1="80.287" y1="9.929" x2="80.287" y2="45.071" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff" stop-opacity=".5"/>
      <stop offset=".705" stop-opacity=".5"/>
    </linearGradient>
    <linearGradient id="accessoriesWayfarers-b" x1="80.287" y1="9.929" x2="80.287" y2="45.071" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff" stop-opacity=".5"/>
      <stop offset=".705" stop-opacity=".5"/>
    </linearGradient>
  </defs>
`,
};
