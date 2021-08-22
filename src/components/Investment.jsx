export default function Investment({
  children: investment = null,
}) {

  const {month, year, value} = investment;

  return (
    <div>
      <ul>
      <li className="space-x-4">
        <span>{`${month}/${year}`}</span>
        <strong>R$ {value.toFixed(2)}</strong></li>
      </ul>
    </div>
  )
}
