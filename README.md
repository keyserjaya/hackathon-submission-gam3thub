# Flow Hackathon Submission Catalog

## How To Submit Your Project

1. Fork this repository
2. Add your project to the catalog by creating a new yaml file in the `projects` directory. You need to follow the format and structure of `.template.yml`.
3. Submit a pull request to this repository


"Web3 Game Launcher for Web"

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Test our demo in vercel here: https://gam3thub.vercel.app/

## Getting Started
1. extract google-credential.zip
2. do `npm i`
3. npm run dev
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## SmartContract Note
1. If deploying SmartContract that originally from 0x3eB818638c8b0D5eBAcA1Fdd5CB7Ab637C67745a > Send G3TH to that deployed SmartContract (ex: 0x3eB818638c8b0D5eBAc....)
  *That SmartContract need G3TH (it work as deposits, so user can claim the airdrop)
2. SelfClaimAirdropContract.js.privateKey can be changed

## Other Note
1. Feel free to use and edit the .env and google-services.json file
2. Firebase credential is here: app/lib/firebase.js
3. Google Sheet credential is here: utils/googlesheets.js

## Partners Bounty
This project uses:
1. ['Dynamic'](https://www.dynamic.xyz/)
   - Used for auth system
2. ['Flow'](https://developer.flow.com/)
   - Used for airdrop. We are using SmartContract build on Solidity (via Remix) (EVM support)
3. ['Blockscout'](https://docs.blockscout.com/)
   - Used for exploring transaction in our wallet
## Team
1. Nyoman Jaya Temara ["X"](https://x.com/keyserjaya)
2. Orlando Nandito Nehemia ["X"](https://x.com/orlandonandito)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
