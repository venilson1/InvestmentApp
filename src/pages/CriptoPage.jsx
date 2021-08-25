import Header from "../components/Header"
import Main from "../components/Main"
import { investments } from '../data/investments'
import Investments from '../components/Investments';
import Investment from "../components/Investment";

export default function CriptoPage() {

  console.log(investments);

  return (
    <div>
      <Header />
      <Main>
        <Investments>
          {
            investments.map(({ id, description, reports }) => {
              return (
                <Investment 
                  key={id} 
                  description={description} 
                  reports={reports} 
                />
              )
            })
          }
        </Investments>
      </Main>
    </div>
  )
}
