import Header from "../components/Header"
import Main from "../components/Main"
import {data} from '../data/investments'
import Investments from './../components/Investments';

export default function InvestmentsPage() {

  const criptoId = data.investments[0].id;
  const criptoInvestments = data.reports
  .filter(e => e.investmentId === criptoId)
  .sort((a, b) => a.month - b.month)

  return (
    <div>
      <Header/>
      <Main>
        <h1 className="font-extrabold text-xl text-center p-2">
          {data.investments[1].description}
        </h1>
        <Investments>{criptoInvestments}</Investments>
      </Main>
    </div>
  )
}
