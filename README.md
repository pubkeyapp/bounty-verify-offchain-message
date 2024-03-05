# Bounty: Verify Offchain Message

## Description

The goal of this project is to make a TypeScript implementation of off-chain message signing that's compatible with the `solana` cli.

This allows people to verify keypairs they can access with the `solana` cli without having to import that keypair into a wallet.

## Expected flow:

1. We use TypeScript to create a message and a command to sign it.
2. The user executes the command to sign the message and the signature is printed to the console.
3. The user can then use the `solana` cli to verify the signature.
4. We can use the TypeScript implementation to verify the signature as well.

Steps 2 and 3 are already implemented in the `solana` cli. We need to implement steps 1 and 4.

## Implementation

This project implements a basic setup that prompts for the public key and prints the instructions.

You can run this using the following command:

```shell
pnpm build && pnpm start
```

The logic must be implemented in the files `./src/lib/create-challenge.ts` and `./src/lib/verify-signature.ts`.

Both files have a test suite that must be implemented and pass, as well as a complete test in `./src/e2e.spec.ts`.

You can use the fixture keypair in `./src/fixtures/test-keypair.json` to sign the messages in your tests.

## Example using `solana` cli

This example uses the fixture keypair in `./src/fixtures/test-keypair.json` to sign the message `test`.

```shell
$ solana sign-offchain-message -k ./src/fixtures/test-keypair.json 'test'
3pWh55arC5NykkrQS1g2JFJAjZRULPB6jamE9sCsMQ99HcgA462ji4yZHekczgupPcoAFhw3P7XdYfsMcbDv2Rjd
```

To verify the signature using the `solana` cli:

```shell
$ solana verify-offchain-signature -k ./src/fixtures/test-keypair.json 'test' 3pWh55arC5NykkrQS1g2JFJAjZRULPB6jamE9sCsMQ99HcgA462ji4yZHekczgupPcoAFhw3P7XdYfsMcbDv2Rjd
Signature is valid
```

The goal is to make a TypeScript implementation compatible with the `solana` cli to let people verify keypairs the want to access with `solana` cli, not by importing the keypair to a wallet.

## Sources and references

- [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools)
- [Off-Chain Message Signing with tje Solana CLI](https://docs.solanalabs.com/cli/examples/sign-offchain-message)
- [Off-chain message signing spec](https://github.com/solana-labs/solana/blob/master/docs/src/proposals/off-chain-message-signing.md)
- [`prepareSolanaOffchainMessage` method in BackPack wallet](https://github.com/coral-xyz/backpack/blob/5a538a41d060d2c48507007f96c766483115aecc/packages/secure-clients/src/SolanaClient/BackpackSolanaWallet.ts#L74-L117)
- [Usage of the above method in BackPack](https://github.com/coral-xyz/backpack/blob/5a538a41d060d2c48507007f96c766483115aecc/examples/clients/simple/src/solana/SignMessageButtonSolanaOffchain.tsx#L16)
