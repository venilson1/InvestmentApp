import calculatePercetage from "../helpers/calculatePercetage";

export default function Investments({
  children: investments = [],
}) {

  const percetage = calculatePercetage(investments)
  let i = 0;

  return (
    <div className="border-2 border-black">
      {
        investments.map(investment =>
          <div key={investment.id} className="border-2 border-black m-2 p-2">
            <ul>
              <li className="space-x-4">
                <span>{`${investment.month}/${investment.year}`}</span>
                <strong>R$ {investment.value.toFixed(2)}</strong>
                <span className="font-semibold float-right">{percetage[i++]} %</span>
              </li>
            </ul>
          </div>
        )
      }
    </div>
  )
}
