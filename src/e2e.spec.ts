import { Keypair } from '@solana/web3.js'
import { beforeAll, expect } from 'vitest'
import { testKeypair } from './fixtures/test-keypair'
import { createChallenge } from './lib/create-challenge'
import { verifySignature } from './lib/verify-signature'

describe('e2e', () => {
  let keypair: Keypair

  beforeAll(async () => {
    keypair = await testKeypair
  })

  it('should be implemented', () => {
    // ARRANGE
    // Use createChallenge

    // ACT
    // Use verifySignature

    // ASSERT
    expect(createChallenge).toBeDefined()
    expect(verifySignature).toBeDefined()
  })
})
