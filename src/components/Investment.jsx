
import { helpersFormatDate } from '../helpers/helpersFormatDate';
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
                  <span>{value}</span>
                </div>
                <span>{percent}%</span>
                
              </div>
            )
          })
      }
    </div>
  )
}
