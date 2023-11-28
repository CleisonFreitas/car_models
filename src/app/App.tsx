import { AppContainer } from '../layout/AppContainer'
import { Header } from '../layout/Header'
import { Main } from '../layout/Main'
import { SideBarData } from '../shared/contexts/sidebar/SideBarContext'
import './App.css'

const App = () => {

  return (
    <SideBarData>
      <AppContainer>
        <Header />
        <Main />
      </AppContainer>
    </SideBarData>
  )
}

export default App
