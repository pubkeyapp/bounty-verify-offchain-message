import * as ed25519 from '@noble/ed25519'
import * as bs58 from 'bs58'

import { createChallenge } from './create-challenge'

describe('create-challenge', () => {
  it('should be implemented', async () => {
    // ARRANGE
    const message = 'Test Message'
    const privateKey = ed25519.utils.randomPrivateKey()
    const publicKeyBytes = await ed25519.getPublicKey(privateKey)
    const publicKey = bs58.encode(publicKeyBytes)

    // ACT
    createChallenge({ message, publicKey })

    // ASSERT
    expect(createChallenge).toBeDefined()
  })
})
