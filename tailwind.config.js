const theme       = require('./tailwind-config/theme')
const corePlugins = require('./tailwind-config/core-plugins')

module.exports = {
    theme,
    plugins: [],
    corePlugins,
    content: [
        "./assets/**/*.{html,js,vue,js,jsx,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
}
