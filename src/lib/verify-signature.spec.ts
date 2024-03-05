import { Keypair } from '@solana/web3.js'
import { beforeAll } from 'vitest'
import { testKeypair } from '../fixtures/test-keypair'
import { verifySignature } from './verify-signature'

describe('verify-signature', () => {
  let keypair: Keypair

  beforeAll(async () => {
    keypair = await testKeypair
  })

  it('should be implemented', () => {
    // ARRANGE

    // ACT

    // ASSERT
    expect(verifySignature).toBeDefined()
  })
})
