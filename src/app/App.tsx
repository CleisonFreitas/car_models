import { AppContainer } from '../layout/AppContainer'
import { Header } from '../layout/Header'
import { Main } from '../layout/Main'
import { SideBarData } from '../shared/contexts/sidebar/SideBarContext'
import './App.css'
import { useAuth } from '../shared/contexts/auth/AuthContext'
import { FormLogin } from '../shared/components'

const App = () => {
  const auth = useAuth();

  
  return (
    <>
      {auth.isLogged ? (
        <SideBarData>
          <AppContainer>
            <Header />
            <Main />
          </AppContainer>
        </SideBarData>
      ) : (
        <FormLogin />
      )}

    </>

  )
}

export default App
