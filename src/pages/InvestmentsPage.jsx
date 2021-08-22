import Header from "../components/Header"
import Main from "../components/Main"
import {data} from '../data/investments'

export default function InvestmentsPage() {

  // console.log(data);

  const fundoId = data.investments[0].id;
  const criptoInvestments = data.reports.filter(e => e.investmentId === fundoId);

  return (
    <div>
      <Header/>
      <Main>
        <h1 className="font-extrabold text-xl text-center p-2">
          {data.investments[1].description}
        </h1>
      </Main>
    </div>
  )
}
