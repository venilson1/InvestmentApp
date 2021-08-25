
import { helpersFormatDate } from '../helpers/helpersFormatDate';
import helpersFormatMoney from '../helpers/helpersFormatMoney';
export default function Investment({
  description = '',
  reports = []
}) {
  return (
    <div>
      <div>
        <p>{description}</p>
      </div>
      {
          reports.map(({id, month, year, value, percent}) => {
            return (
              <div key={id} className="flex justify-between">
                <div className="flex flex-grow space-x-4">
                  <span>{helpersFormatDate(month)}/{year}</span>
                  <span>{helpersFormatMoney(value)}</span>
                </div>
                <span>{percent}%</span>
                
              </div>
            )
          })
      }
    </div>
  )
}
