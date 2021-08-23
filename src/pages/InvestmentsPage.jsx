import Header from "../components/Header"
import Main from "../components/Main"
import {data} from '../data/investments'
import Investments from './../components/Investments';

export default function InvestmentsPage() {

  const criptoId = data.investments[1].id;
  const criptoInvestments = data.reports
  .filter(e => e.investmentId === criptoId)
  .sort((a, b) => a.month - b.month)
  
  return (
    <div>
      <Header/>
      <Main title={data.investments[1].description}>
        <Investments>{criptoInvestments}</Investments>
      </Main>
    </div>
  )
}
