
import { helpersFormatDate } from '../helpers/helpersFormatDate';
import helpersFormatMoney from '../helpers/helpersFormatMoney';
export default function Investment({
  description = '',
  reports = []
}) {
  return (
    <div className=" shadow-xl bg-purple-100-100 p-2 mb-6">
      <div className="font-bold text-center p-6 text-xl">
        <p>{description}</p>
      </div>
      {
          reports.map(({id, month, year, value, percent}) => {
            
            const valueColor =
            percent === 0 ? 'text-black': 
            percent > 0 ? 'text-green-600': 'text-red-600';

            const positive = percent > 0? '+' : ''
            
            return (
              <div key={id} className="flex justify-between m-2 font-semibold items-center bg-gray-300 p-2">
                <div className="flex flex-grow space-x-4 p-2 items-center">
                  <span className="bg-purple-500 p-1 rounded-md font-normal">{helpersFormatDate(month)}/{year}</span>
                  <span className={`${valueColor}`}>{helpersFormatMoney(value)}</span>
                </div>
                <span className={`${valueColor}`}>{positive}{percent.toFixed(2)} %</span>
                
              </div>
            )
          })
      }
    </div>
  )
}
