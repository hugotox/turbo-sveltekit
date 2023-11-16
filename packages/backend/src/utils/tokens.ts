import crypto from 'crypto'

const secretKey = process.env.SECRET_KEY ?? ''
const encryptionMethod = process.env.SECRET_KEY ?? ''

const key = crypto
  .createHash('sha256')
  .update(secretKey)
  .digest('base64')
  .substring(0, 32)

export const encrypt = (plainText: string) => {
  try {
    const iv = crypto.randomBytes(16)
    const cipher = crypto.createCipheriv(encryptionMethod, key, iv)
    let encrypted = cipher.update(plainText)
    encrypted = Buffer.concat([encrypted, cipher.final()])
    return iv.toString('hex') + ':' + encrypted.toString('hex')
  } catch (error) {
    console.log(error)
  }
}

export const decrypt = (encryptedText: string) => {
  try {
    const textParts = encryptedText.split(':')
    const firstPart = textParts.shift()
    if (firstPart) {
      const iv = Buffer.from(firstPart, 'hex')

      const encryptedData = Buffer.from(textParts.join(':'), 'hex')
      const decipher = crypto.createDecipheriv(encryptionMethod, key, iv)

      const decrypted = decipher.update(encryptedData)
      const decryptedText = Buffer.concat([decrypted, decipher.final()])
      return decryptedText.toString()
    }
  } catch (error) {
    console.log(error)
  }
}
