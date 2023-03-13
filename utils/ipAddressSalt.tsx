export function generateIpAddressSalt(): string {
  const characters: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let salt: string = ""

  // Generate a 16-character salt
  for (let i: number = 0; i < 16; i++) {
    const randomIndex: number = Math.floor(Math.random() * characters.length)
    salt += characters[randomIndex]
  }

  return salt
}
console.log(generateIpAddressSalt())