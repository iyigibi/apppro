import React from 'react';
import {
  RkText,RkTabView,
  RkCard, RkStyleSheet,RkTheme,
  RkComponent
} from 'react-native-ui-kitten';
import axios from 'axios';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity,StyleSheet, Dimensions
} from 'react-native';
import {FontAwesome} from '../../assets/icons';


let w__=Dimensions.get('window').width;
RkTheme.setType('RkText','ff',{
  fontSize: 15,
  color:'#ffffff'
 });




export class TahminBars extends RkComponent {

  constructor(props) {
    super(props);
    this.state={
      status: props.status
    }
  }



render() {
let fazladan=20;
  return (

    <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end'}}>
    <View style={[styles.kutu,{backgroundColor: '#00A354',height: fazladan+parseInt(this.state.status.home_win)}]}>

        <RkText rkType='ff'>{this.state.status.home_win}</RkText>

    </View>
    <View style={[styles.kutu,{backgroundColor: '#52596C',height:fazladan+parseInt(this.state.status.draw)}]}>
        <RkText rkType='ff'>{this.state.status.draw}</RkText>

    </View>
    <View style={[styles.kutu,{backgroundColor: '#3a3b3f',height:fazladan+parseInt(this.state.status.away_win)}]}>
        <RkText rkType='ff'>{this.state.status.away_win}</RkText>

    </View>
    <View style={{flex:1}}>
      </View>
    </View>
  )
  }
}



let styles = RkStyleSheet.create(theme => ({
  kutu: {
    
    flex:1,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    flexDirection:'column',
    alignItems:'center'
  },
}));



