# README

### how this was made

1. Basic app setup
    * `$ yarn create react-app address-book-client`
    * `$ git init`
    * `$ yarn start` and check out the new app!
1. Adding testing
    * add `src/test/basic.test.js` with the following content to ensure basic testing is functional

        ```js
        test('basic setup', () => {
          expect(true).toBe(false);
        });
        ```

        Once you get a good red by running `yarn test`, change false to true.
