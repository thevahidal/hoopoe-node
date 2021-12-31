
<div id="top"></div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/thevahidal/hoopoe-node/">
    <img src="docs/images/logo.png" alt="Logo">
    <span>Node.js</span>
  </a>

  <h3 align="center">Hoopoe Node.js</h3>

  <p align="center">
    Node.js SDK for Hoopoe | Get notified of what's important
    <br />
    <a href="https://github.com/thevahidal/hoopoe-node/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/thevahidal/hoopoe-node/">View Demo</a>
    ·
    <a href="https://github.com/thevahidal/hoopoe-node/issues">Report Bug</a>
    ·
    <a href="https://github.com/thevahidal/hoopoe-node/issues">Request Feature</a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

[Hoopoe](https://github.com/thevahidal/hoopoe) is a platform that helps you notify yourself when something important happens in your platform!



<!-- GETTING STARTED -->
## Getting Started
There's two ways to use hoopoe, either you can user [Hoopoe.app](https://hoopoe.app) or host it yourself.

### Installation

1. Get a free API Key at [https://hoopoe.app](https://hoopoe.app)
2. Install NPM packages
   ```sh
   npm install hoopoe-node
   ```


<!-- USAGE EXAMPLES -->
## Usage

First import hoopoe-node and create an instance of it.

```js
const Hoopoe = require('hoopoe-node');

const hoopoe = new Hoopoe({
    api_key: 'your_hoopoe_api_key',
    version: '1', // API version, default 1
    base_url: 'https://...', // self-hosted only 
})
```
Then you can send a notification to yourself using like this:
```js
await hoopoe.upupa("Your message here", {
    "extra": "info",
    "could": "be",
    "added": "here",
})
```

By default the ```upupa``` command will send the code trace back, you have the option to disable it:
```python
await hoopoe.upupa("", {}, false)
```
<!-- ROADMAP -->
<!-- ## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish -->

See the [open issues](https://github.com/thevahidal/hoopoe-node/issues) for a full list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'Add some amazing-feature'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

