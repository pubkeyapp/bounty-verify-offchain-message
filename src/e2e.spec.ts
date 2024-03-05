import * as ed25519 from '@noble/ed25519'
import * as bs58 from 'bs58'

import { expect } from 'vitest'
import { createChallenge } from './lib/create-challenge'
import { constructSolanaMessage, verifySignature } from './lib/verify-signature'

describe('e2e', () => {
  it('should be implemented', async () => {
    // ARRANGE
    const message = 'Test Message'
    const privateKey = ed25519.utils.randomPrivateKey()
    const publicKeyBytes = await ed25519.getPublicKey(privateKey)
    const publicKey = bs58.encode(publicKeyBytes)
    const challenge = createChallenge({ message, publicKey })

    // Signing the message
    const messageBytes = constructSolanaMessage(challenge)
    const signatureBytes = await ed25519.sign(messageBytes, privateKey)
    const signature = bs58.encode(signatureBytes)

    // ACT
    const isValid = await verifySignature({ challenge, signature, publicKey })

    // ASSERT
    expect(createChallenge).toBeDefined()
    expect(verifySignature).toBeDefined()
    expect(isValid).toBeTruthy()
  })
})
