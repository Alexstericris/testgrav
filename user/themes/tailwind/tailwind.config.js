/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../config/**/*.yaml',
    '../../pages/**/*.md',
    './blueprints/**/*.yaml',
    './js/**/*.js',
    './templates/**/*.twig',
    './tailwind.yaml',
    './tailwind.php'
  ],
  darkMode: 'class', //false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "on-primary-container": "#29b089",
        "inverse-on-surface": "#2f2e43",
        "on-background": "#e2e0fc",
        "on-primary": "#003829",
        "surface-container-lowest": "#0c0c1f",
        "surface-dim": "#111125",
        "surface-container-low": "#1a1a2e",
        "secondary-container": "#294a77",
        "secondary-fixed-dim": "#a9c8fc",
        "tertiary": "#ffb782",
        "on-primary-fixed": "#002116",
        "on-secondary": "#09305c",
        "on-secondary-fixed-variant": "#274774",
        "on-secondary-container": "#9bbaee",
        "secondary": "#a9c8fc",
        "surface-container": "#1e1e32",
        "surface-variant": "#333348",
        "surface-bright": "#37374d",
        "outline-variant": "#43474f",
        "on-tertiary-fixed-variant": "#6b3a10",
        "on-error": "#690005",
        "on-tertiary": "#4f2500",
        "primary-container": "#003c2c",
        "on-surface-variant": "#c3c6d0",
        "primary-fixed": "#7ef9cd",
        "on-tertiary-fixed": "#301400",
        "inverse-primary": "#006c51",
        "surface-tint": "#60dcb2",
        "tertiary-fixed-dim": "#ffb782",
        "inverse-surface": "#e2e0fc",
        "surface-container-highest": "#333348",
        "surface-container-high": "#28283d",
        "secondary-fixed": "#d5e3ff",
        "tertiary-container": "#542800",
        "tertiary-fixed": "#ffdcc5",
        "error-container": "#93000a",
        "primary-fixed-dim": "#60dcb2",
        "on-surface": "#e2e0fc",
        "error": "#ffb4ab",
        "on-tertiary-container": "#cf8e5c",
        "surface": "#111125",
        "outline": "#8d919a",
        "on-error-container": "#ffdad6",
        "primary": "#60dcb2",
        "on-secondary-fixed": "#001b3c",
        "background": "#111125",
        "on-primary-fixed-variant": "#00513c",
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens')
  ]
}
