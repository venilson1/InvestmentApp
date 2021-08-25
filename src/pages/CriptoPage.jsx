import Header from "../components/Header"
import Main from "../components/Main"
import {data, investments} from '../data/investments'
import Investments from '../components/Investments';
import calculatePercetageGeneral from './../helpers/calculatePercetageGeneral';

export default function CriptoPage() {

  const criptoId = data.investments[1].id;
  const criptoInvestments = data.reports
  .filter(e => e.investmentId === criptoId)
  .sort((a, b) => a.month - b.month)

  console.log(investments);

  const income = calculatePercetageGeneral(criptoInvestments)

  return (
    <div>
      <Header/>
      <Main title={data.investments[1].description} income={income}>
        <Investments>{criptoInvestments}</Investments>
      </Main>
    </div>
  )
}
