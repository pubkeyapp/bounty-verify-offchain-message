import { createInterface } from 'node:readline/promises'
import { createChallenge } from './lib/create-challenge'
import { verifySignature } from './lib/verify-signature'

// This is the message that we want the end user to sign.
const messageToSign = 'Sign this message to verify your identity.'

async function main() {
  // Create a readline interface to prompt the user for input.
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  // Prompt the user for their public key.
  const publicKey = await rl.question('Enter your public key: ')

  // Create the challenge
  const challenge = createChallenge({ message: messageToSign, publicKey })

  // Display the challenge and the command to sign it.
  console.log({
    challenge,
    publicKey,
    command: `solana sign-offchain-message '${challenge}' `,
  })

  // Prompt the user for their signature.
  const signature = await rl.question('Enter your signature: ')

  // Verify the signature.
  const isValid = verifySignature({
    challenge,
    signature,
    publicKey: publicKey,
  })

  // Display the result.
  console.log({
    signature,
    isValid,
  })

  // Exit the process.
  console.log('Bye.')
  rl.close()
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
