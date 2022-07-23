/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img':"url('/public/backgroundImg.jpg')",
        'feature-img1': "url('/public/featureimg1.svg')",
        'feature-img2': "url('/public/featureimg2.svg')",
        'feature-img3': "url('/public/featureimg3.svg')",
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}