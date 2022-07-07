import { useState, useContext, createContext } from 'react'
import { GridPopUp } from './general/GridPopUp'
import { Contact } from './HomePage/Contact'
import { Header } from './HomePage/header'
import { Techs } from './HomePage/Techs'

import { Layout } from './Layouts/Layout'

type IsBlured = {
  isBlured: boolean
  setIsBlured: (b: boolean) => void
}
const BlurContext = createContext<IsBlured>({
  isBlured: false,
  setIsBlured: () => false
})
export const useBlurContext = () => useContext(BlurContext)

function App() {
  const [isBlured, setIsBlured] = useState(false)

  return (
    <Layout>
      <BlurContext.Provider value={{ isBlured, setIsBlured }}>
        <Header />
        <Contact />
        <GridPopUp />
        <Techs />
      </BlurContext.Provider>
    </Layout>
  )
}

export default App
