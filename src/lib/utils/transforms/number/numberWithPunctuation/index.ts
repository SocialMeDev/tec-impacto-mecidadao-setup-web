export function numberWithPunctuation(value: number): string {
  const { format } = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
  })

  return format(value)
}
