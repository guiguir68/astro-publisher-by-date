# Astro Publisher by Date

This project is a module designed for the Astro framework, enabling the filtering and generation of markdown pages based on their chosen publication date.

## Table of Contents
- [Project origin](#project-origin)
- [How it works](#how-it-works)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Project Origin

The inspiration behind this project stems from my desire to write articles in advance for my Astro-powered blog, while keeping them from being published immediately. I aimed to establish an automated system centered around article dates, eliminating the need for manual intervention.

## How it works

During the generation of the static pages, the plugin checks the "pubDate" field within the Markdown pages. If the date is earlier than or equal to the current date, the module facilitates the page generation process. This ensures that pages are generated and published automatically based on their specified publication date.

## Installation

You can install the module with yarn:

```bash
yarn add astro-publisher-by-date
```

Then, in your `astro.config.mjs`, add the configuration bellow:

```js
import { defineConfig } from "astro/config";
import publisherByDate from "astro-publisher-by-date";

export default defineConfig({
  // ...
  integrations: [
    publisherByDate()
    ],
});

```

## Contributing

Contributions are welcome to further enhance and refine this project's functionality. Don't hesitate to open an issue ticket if you encounter any issues or to send a pull request with your proposed changes. 🫶

## License

Astro Out Proxy is licensed under the MIT License. Feel free to use, modify, and distribute the library as per the terms of the license.