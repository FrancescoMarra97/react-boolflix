import { useState } from 'react'
import { GlobalContext } from './context/GlobalContext'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
import SearchBar from './components/SearchBar'

function App() {


  return (
    <>
      <SearchBar />
      <AppFooter />

    </>
  )
}

export default App
