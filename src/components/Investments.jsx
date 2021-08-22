export default function Investments({children: investments = []}) {
  return (
    <div>
      {
        investments.map(investment => JSON.stringify(investment))
      }
    </div>
  )
}
