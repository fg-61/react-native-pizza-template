import React from "react"
import { SafeAreaView } from "react-native"
import PizzaTemplate from "./templateSample/PizzaTemplate"

function App() {

  return (
    <>
      <SafeAreaView style={{flex:1}}>
        <PizzaTemplate></PizzaTemplate>
      </SafeAreaView>
    </>
  )

}

export default App