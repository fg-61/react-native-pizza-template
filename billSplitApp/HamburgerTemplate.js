import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'


export class HamburgerTemplate extends Component {
  render() {
    return (
      <View style={{flex:1, padding: 20}}>

        <View style={styles.title}>
            <Text style={styles.titleGreeting}>Hi Sefa</Text>
            <Text style={styles.titleMainText}>Split your bill</Text>
        </View>
        <View style={styles.bill}>
            <Image style={{flex:1, width:52, height:52, borderRadius:50, alignSelf:'flex-end'}} source={require('./BurgerKing.jpg')}></Image>
            <View style={{flex:4, alignItems: 'center'}}>   
                <Image style={styles.imageHamburger} source={require('./Hamburger.jpg')} />
                <Text style={{flex:1, fontWeight: 'bold'}}>Total Bill</Text>
                <Text style={{flex:2,fontSize:30, color: 'white'}}>$80.00</Text>
                <Text style={{flex:1}}>5 Cheese burger</Text>
            </View>
            <Image style={{flex:1}}></Image>
            
        </View>
        <View style={{flex:1, flexDirection:'row', marginTop:10, justifyContent:'space-between'}}>
            <TouchableOpacity ><Text style={styles.recentBills}>Recent bills</Text></TouchableOpacity>
            <TouchableOpacity><Text>See all</Text></TouchableOpacity>
        </View>

        <TouchableOpacity style={{flex:2, flexDirection: 'row', alignItems:'center',borderRadius:20}}>
            <Image style={{flex:1, width:50, height:50}} source={require('./Sandwich.jpg')} />
            <View style={{flex:3, height:50, justifyContent: 'space-between'}}>
                <Text style={{fontSize:18, fontWeight: 'bold', color: 'black'}}>Sandwich Bar</Text>
                <Text>24 Mar, 2022</Text>
            </View>
            <View style={{flex:2, height:50, alignItems: 'flex-end', justifyContent: 'space-between'}}>
                <Text style={{fontSize:18, fontWeight: 'bold', color: 'black'}}>$128.60</Text>
                <Text>4 Persons</Text>
            </View>
        </TouchableOpacity>
        <View style={{flex:2, flexDirection: 'row', }}>
            <Image style={{flex:1, width:50, height:50}} source={require('./LittleHamburger.jpg')} />
            <View style={{flex:3, height:50, justifyContent: 'space-between'}}>
                <Text style={{fontSize:18, fontWeight: 'bold', color: 'black'}}>Big E Party</Text>
                <Text>24 Mar, 2022</Text>
            </View>
            <View style={{flex:2, height:50, alignItems: 'flex-end', justifyContent: 'space-between'}}>
                <Text style={{fontSize:18, fontWeight: 'bold', color: 'black'}}>$87.90</Text>
                <Text>4 Persons</Text>
            </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    recentBills: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    title: {
        flex:2
    },
    titleGreeting: {
        color: 'gray',
        fontSize: 20
    },
    titleMainText: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
    },
    imageHamburger: {
        width: 150, 
        height: 150,
        borderRadius: 100
    },
    bill: {
        flex: 5,
        flexDirection: 'row',
        backgroundColor: '#71C2FF',
        borderRadius:30,
        padding: 20
    }
})
export default HamburgerTemplate

// https://dribbble.com/shots/17903372-Bill-Split-App