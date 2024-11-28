import { useState } from 'react'
import { GlobalContext } from './context/GlobalContext'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

function App() {


  return (
    <>

      <AppHeader />
      <AppMain />
      <AppFooter />

    </>
  )
}

export default App
