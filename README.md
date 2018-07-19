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
1. Add react-md and modify the Simple Navigation Drawer
    * [react-md simple setup](https://github.com/mlaursen/react-md/tree/master/examples/with-create-react-app)
    * [Simple Navagation Drawer](https://react-md.mlaursen.com/components/navigation-drawers#simple-example)
