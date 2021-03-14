# Omid.Pizza via Middleman + TailwindCSS
Basic Middleman app setup, and adding in Tailwind via npx.

## Building Tailwind and using in Middleman
Tailwind is not part of Middleman's build process at all, so in order to make that happen, there is a custom Tailwind source file at the root called `tailwind-customize.css`. From there I use the following command to build Tailwind and place the output into the Middlman source CSS:

`npx tailwindcss-cli@latest build tailwind-customize.css -o ./source/stylesheets/tailwind.css`

I also have a Tailwind configuration file at `tailwind.config.js` which sets the purge layouts to look for. Since the resulting CSS lives in the Middleman source folder, it gets picked up by the Middleman build process and is then part of the static site.