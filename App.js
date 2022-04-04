import React from "react"
import { SafeAreaView } from "react-native"
import HamburgerTemplate from "./billSplitApp/HamburgerTemplate"
import PizzaTemplate from "./templateSample/PizzaTemplate"

function App() {

  return (
    <>
      <SafeAreaView style={{flex:1}}>
        <HamburgerTemplate></HamburgerTemplate>
      </SafeAreaView>
    </>
  )

}

export default App
