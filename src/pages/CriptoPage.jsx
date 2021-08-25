import Header from "../components/Header"
import Main from "../components/Main"
import {investments} from '../data/investments'
import Investments from '../components/Investments';

export default function CriptoPage() {

  return (
    <div>
      <Header/>
      <Main>
        <Investments>
          {
            investments.map(({id, description}) => {
              return (
                <p>{id}</p>
              )
            })
          }
        </Investments>
      </Main>
    </div>
  )
}
