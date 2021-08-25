import Header from "../components/Header"
import Main from "../components/Main"
import { investments } from '../data/investments'
import Investments from '../components/Investments';
import Investment from "../components/Investment";

export default function CriptoPage() {

  return (
    <div>
      <Header />
      <Main>
        <Investments>
          {
            investments.map(({ id, description, reports, balance }) => {
              return (
                <Investment 
                  key={id} 
                  description={description} 
                  reports={reports} 
                  balance={balance}
                />
              )
            })
          }
        </Investments>
      </Main>
    </div>
  )
}
