import { createHash } from 'crypto'

export function createChallenge({ message, publicKey }: { message: string; publicKey: string }) {
  const createdAt = Date.now()
  const challengeStr = JSON.stringify({ message, publicKey, createdAt })
  const hashStr = createHash('sha256').update(challengeStr).digest('hex')

  return hashStr
}
