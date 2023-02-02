export function validateCPF(cpf = ''): boolean {
  cpf = cpf.replace(/\./g, '').replace('-', '')

  const cpfSplited = cpf.split('')

  let v1 = 0
  let v2 = 0
  let aux = false

  for (let index = 1; cpfSplited.length > index; index++) {
    if (cpfSplited[index - 1] !== cpfSplited[index]) aux = true
  }

  if (aux === false) return false

  for (let index = 0, number = 10; cpfSplited.length - 2 > index; index++, number--) {
    v1 += Number(cpfSplited[index]) * number
  }

  v1 = (v1 * 10) % 11

  if (v1 === 10) v1 = 0

  if (v1 !== Number(cpfSplited[9])) return false

  for (let index = 0, number = 11; cpfSplited.length - 1 > index; index++, number--) {
    v2 += Number(cpfSplited[index]) * number
  }

  v2 = (v2 * 10) % 11

  if (v2 === 10) v2 = 0

  return v2 !== Number(cpfSplited[10])
}
