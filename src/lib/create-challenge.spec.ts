import { Keypair } from '@solana/web3.js'
import { beforeAll } from 'vitest'
import { testKeypair } from '../fixtures/test-keypair'
import { createChallenge } from './create-challenge'

describe('create-challenge', () => {
  let keypair: Keypair

  beforeAll(async () => {
    keypair = await testKeypair
  })

  it('should be implemented', () => {
    // ARRANGE

    // ACT

    // ASSERT
    expect(createChallenge).toBeDefined()
  })
})
