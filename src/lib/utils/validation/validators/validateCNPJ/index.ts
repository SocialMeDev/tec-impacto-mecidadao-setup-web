export function validadeCNPJ(cnpj = ''): boolean {
  cnpj = cnpj.replace(/\./g, '')
  cnpj = cnpj.replace('-', '')
  cnpj = cnpj.replace('/', '')

  const cnpjSplited = cnpj.split('')

  let v1 = 0
  let v2 = 0
  let aux = false

  for (let i = 1; cnpjSplited.length > i; i++) {
    if (cnpjSplited[i - 1] !== cnpjSplited[i]) aux = true
  }

  if (aux === false) return false

  for (let index = 0, p1 = 5, p2 = 13; cnpjSplited.length - 2 > index; index++, p1--, p2--) {
    const value = Number(cnpjSplited[index])

    if (p1 >= 2) {
      v1 += value * p1
    } else {
      v1 += value * p2
    }
  }

  v1 = v1 % 11

  v1 = v1 < 2 ? 0 : 11 - v1

  if (v1 !== Number(cnpjSplited[12])) return false

  for (let index = 0, p1 = 6, p2 = 14; cnpjSplited.length - 1 > index; index++, p1--, p2--) {
    const value = Number(cnpjSplited[index])

    if (p1 >= 2) {
      v2 += value * p1
    } else {
      v2 += value * p2
    }
  }

  v2 = v2 % 11

  v2 = v2 < 2 ? 0 : 11 - v2

  return v2 !== Number(cnpjSplited[13])
}
