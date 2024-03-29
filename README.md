# React Unicons Solid

1,100+ Pixel-perfect vector icons as React Components. These icons are designed by [IconScout](https://iconscout.com).

## Getting Started
You can easily install [react-unicons-solid](https://iconscout.com/unicons) using npm.
```bash
npm install --save @iconscout/react-unicons-solid
```
Or using `yarn`
```bash
yarn add @iconscout/react-unicons-solid
```

## Usage
### Use individual icons
```js
import React from 'react';
import UilStar from '@iconscout/react-unicons-solid/icons/uil-react'

const App = () => {
  return <UilStar size="140" color="#61DAFB" />
};

export default App;
````

You can customize icons as below:
```html
<Unicons.UilStar size="140" color="#61DAFB" />
```

### Usage as full Package
```js
import React from 'react';
import * as Unicons from '@iconscout/react-unicons-solid';

const App = () => {
  return <Unicons.UilStar />
};

export default App;
````

## PRO Icons
If you've subscribed to Unicons PRO, you can [request](mailto:support@iconscout.com?subject=Unicons) your own NPM Token to get an access to all the PRO icons as NPM Package.

### More ways
- [React-native-unicons](https://github.com/Iconscout/react-native-unicons)
- [Vue-unicons](https://github.com/antonreshetov/vue-unicons) by [Anton Reshetov](https://github.com/antonreshetov)
- [Vector SVGs](https://iconscout.com/unicons)
- [Icon Font](https://github.com/Iconscout/unicons)

## Contributing
We will be happy to have community support for Unicons. Feel free to fork and create pull requests. We have given a small roadmap above so that you can help us build these features.

### Request icons
Can't find the icon you are looking for? No worries, we will design it for you. And we'll be happy to design them in upcoming weeks.

[Request Icon](mailto:support@iconscout.com)

## License
Unicons are Open Source icons and licensed under [IconScout Digital License](https://iconscout.com/licenses#iconscout). You're free to use these icons in your personal and commercial project. We would love to see the attribution in your app's **about** screen, but it's not mandatory.
```html
React Unicons Solid by <a href="https://iconscout.com/">IconScout</a>
```