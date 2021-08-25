const formatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default function helpersFormatMoney(value) {
  return formatter.format(value)
}