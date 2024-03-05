import { encode } from 'bs58'

import { createChallenge } from './lib/create-challenge'
import { ed25519GetPublicKey, ed25519RandomPrivateKey, ed25519Sign } from './lib/ed25519-helpers'
import { constructSolanaMessage, verifySignature } from './lib/verify-signature'

describe('e2e', () => {
  it('should be implemented', () => {
    // ARRANGE
    const message = 'Test Message'
    const privateKey = ed25519RandomPrivateKey()
    const publicKeyBytes = ed25519GetPublicKey(privateKey)
    const publicKey = encode(publicKeyBytes)
    const challenge = createChallenge({ message, publicKey })

    // Signing the message
    const messageBytes = constructSolanaMessage(challenge)
    const signatureBytes = ed25519Sign(messageBytes, privateKey)
    const signature = encode(signatureBytes)

    // ACT
    const isValid = verifySignature({ challenge, signature, publicKey })

    // ASSERT
    expect(createChallenge).toBeDefined()
    expect(verifySignature).toBeDefined()
    expect(isValid).toBeTruthy()
  })
})
