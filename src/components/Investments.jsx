import Investment from "./Investment";

export default function Investments({children: investments = []}) {
  return (
    <div>
      {
        investments.map(investment => <Investment key={investment.id}>{investment}</Investment>)
      }
    </div>
  )
}
