# To-do List (Blockchain)

This a decentralized to-do list web3 application where users can create some lists, edit and delete them.
This project uses motoko as a backend and interface it with our react front end. 

(This website has a backend so the data doesnot get lost when refreshing websites or servers.)

## Technologies
* React.js
* Web 3.0
* Blockchain
  - Motoko
* Node.js
  - Javascript


To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

To learn more before you start working with this project, see the following documentation available online:

- [Quick Start](https://sdk.dfinity.org/docs/quickstart/quickstart-intro.html)
- [SDK Developer Tools](https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html)
- [Motoko Programming Language Guide](https://sdk.dfinity.org/docs/language-guide/motoko.html)
- [Motoko Language Quick Reference](https://sdk.dfinity.org/docs/language-guide/language-manual.html)
- [JavaScript API Reference](https://erxue-5aaaa-aaaab-qaagq-cai.raw.ic0.app)
  
Please open the editor of your choice in Ubuntu/Linux environment.

If you want to start working on your project right away, you might want to try the following commands:

```bash
# Clone this repository
git clone https://github.com/HimanthReddyGurram/To-do-List_Web3_DApp.git

# Go into the repository
$ cd To-do-List_Web3_DApp.git

# Install dependencies
npm install

#for help(optional)
dfx help
dfx config --help
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Open another terminal
#Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:8000?canisterId={asset_canister_id}`.

Additionally, if you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 8000.

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`NODE_ENV` to `production` if you are using Webpack
- use your own preferred method to replace `process.env.NODE_ENV` in the autogenerated declarations
- Write your own `createActor` constructor
