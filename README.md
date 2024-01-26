<h3 align="center">GROWI Plugin Numigi Theme</h3>

  <p align="center">
    A GROWI plugin to add the Numigi brand flavor.
  </p>
</div>

## About The Project

This theme is based off a [starter template from the editor](https://github.com/weseek/growi-plugin-theme-welcome-to-fumiya-room).

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* `yarn`

### Setup

1. Have an available GROWI instance for testing
2. Clone the repo

   ```sh
   git clone https://github.com/Numigi/growi-plugin-theme-numigi.git
   ```

3. Install the project dependencies

   ```sh
   yarn
   ```

4. Make your changes, and build your code

   ```sh
   yarn build
   ```

5. See [Contributing](#contributing) for how to submit changes

## Development

Theme metadata is set directly in the `package.json` file, as an object of the `themes` array.

```json
    "themes": [
      {
        "name": "numigi",
        "manifestKey": "src/styles/style.scss",
        "schemeType": "light",
        "bg": "#EEEFF2",
        "topbar": "#1F2128",
        "sidebar": "#F5BE5C",
        "accent": "#F5BE5C"
      }
    ]
```

**Determine your primary and secondary colors**

Everything should be included in the `:root` selector, e.g.:

```scss
:root[data-theme='dark'] {
  --primary: hsl(var(--primary-hs),var(--primary-l)) !important;
  --primary-hs: 53,56%;
  --primary-l: 61%;
  --secondary: hsl(var(--secondary-hs),var(--secondary-l)) !important;
  --secondary-hs: 208,7%;
  --secondary-l: 46%;
```

The `--primary-hs` and `--primary-1` variables use the `hsl()` function[^1]. It is used to determine colors value based three factors:

- Hue: Tint
- Saturation: Intensity, where 0% is gray and 100% is full color
- Lightness: Brightness, where 0% is black and 100% is white

Using the `--primary-hs` and `--primary-l` variables allows to reuse and modify the tint and saturation without affecting brightness, i.e., the `--primary-l` variable can be used to change the lightness of the primary color without altering tint or saturation:

```scss
:root {
  --primary-hs: 197, 100%; // Blue tint to full saturation
  --primary-l: 24%; // Quite dark

  // Usage in a CSS selector
  --primary: hsl(var(--primary-hs), var(--primary-l));
}
```

To use for a personalized theme:

```scss
:root[data-theme='dark'] {
  --primary-hs: [Tint], [Saturation]%;
  --primary-l: [Brightness]%;
  --secondary-hs: [Tint], [Saturation]%;
  --secondary-l: [Brightness]%;
}
```

[^1]: [hsl() - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl())

### File Structure

* `src/styles/bootstrap/_variables.scss` - Base Bootstrap variables
* `src/styles/_variables.scss` - Default base variables

## Contributing

1. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
2. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the Branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## Resources

* [Othneildrew README Template](https://github.com/othneildrew/Best-README-Template)
* [Choosing an Open Source License](https://choosealicense.com/)
* [GROWI Documentation](https://docs.growi.org/)
* [GROWI Install Plugins](https://docs.growi.org/en/admin-guide/management-cookbook/plugins.html#how-to-install-plugins)
