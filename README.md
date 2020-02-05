# devocoin &middot; [![Build Status](https://travis-ci.org/typekev/react-mk.svg?branch=master)](https://travis-ci.org/typekev/react-mk)

## Getting started

- Make an account on [Azure](https://azure.microsoft.com/)
- Create an [Azure Blockchain Service and member](https://docs.microsoft.com/en-us/azure/blockchain/service/overview)
- Download [Visual Studio Code](https://code.visualstudio.com/)
- Install the extension [Azure Blockchain Development Kit for Ethereum and it's prerequisites](https://marketplace.visualstudio.com/items?itemName=AzBlockchain.azure-blockchain)
- Clone the [devocoin repository](https://github.com/Devoteam-LU/devocoin)
- Pick a [task](#contribute) and open a [pull request](https://github.com/Devoteam-LU/devocoin/pulls)

## Install

Ìnstall yarn
```
npm install -g yarn
```

Clone the project
```
$ git clone https://github.com/Devoteam-LU/devocoin.git
```

Move to the project directory 
```
$ cd devocoin
```

Install NPM dependencies for drizzle:
```
$ yarn
```

Deploy and run test blockchain
```
$ truffle develop 
$ compile
$ migrate
```

Open a new terminal and move to the app directory 
```
$ cd devocoin/app
```

Install NPM dependencies for the React application :
```
$ yarn
```

Run Devocoin application
```
$ npm run start
```

## Contribute

Please follow the gitflow workflow to contribute, quick update :
$ git flow init -d

Develop a feature
These steps will create a feature branch, introduce a feature, merge it back to the develop branch, and finally delete the feature branch.
Make a feature branch
```
$ git flow feature start awesome-thing
# Switched to a new branch ‘feature/awesome-thing’
```
Commit a change
```
$ git add .
$ git commit -m ‘Implemented an awesome thing.’
```

Merge commits from develop and upstream
```
$ git rebase develop
# Manage conflicts by updating your commits if needed.
```

Merge the feature
```
$ git flow feature finish awesome-thing
# The feature is merged into develop.
# Switched to branch ‘develop’
```

Create a release
Start the release
```
$ git flow release start v1.0
# Switched to branch ‘release/v1.0’
```
Perform release specific changes
```
$ echo ‘v1.0’ > version.txt
$ git add .
$ git commit -m ‘Added version file and set initial v1.0 version.’
```
Complete the release
``
$ git flow release finish -m ‘v1.0’ v1.0
# The release is merged into master and develop.
# Switched to branch ‘develop’.
```

See [Devocoin Project Board](https://github.com/Devoteam-LU/devocoin/projects/1)

## Help

- The video series [Getting started with Azure Blockchain Service](https://www.youtube.com/watch?v=lYBhn7kRVHw) is useful if this is your first time working with the service.
- The video [Introduction to Drizzle | Ethereum Dapp Tutorial with Drizzle](https://www.youtube.com/watch?v=QH_yLPYQEs4) is very helpful if you are new to [Drizzle](https://www.trufflesuite.com/boxes/drizzle), [Truffle](https://www.trufflesuite.com/), or [Dapps](https://en.wikipedia.org/wiki/Decentralized_application)
