import { useState } from 'react'
import { GlobalProvider } from './context/GlobalContext'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
import SearchBar from './components/SearchBar'

function App() {


  return (
    <>
      <GlobalProvider>
        <SearchBar />
        <AppFooter />
      </GlobalProvider>
    </>
  )
}

export default App
