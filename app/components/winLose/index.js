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
  fontSize: 15
 });




export class WinLose extends RkComponent {

  constructor(props) {
    super(props);
    this.state={
      status: props.status
    }
  }


  
render() {
if(this.state.status=='W'){
  return (
    <View style={styles.kutu}>
      <RkText rkType='ff'>{this.state.status}</RkText>
    </View>
  )
}else if(this.state.status=='L'){
  return (
    <View style={styles.kutu2}>
      <RkText rkType='ff'>{this.state.status}</RkText>
    </View>
  )
}else{
  return (
    <View style={styles.kutu3}>
      <RkText rkType='ff'>{this.state.status}</RkText>
    </View>
  )
}
    
  }
}





let styles = RkStyleSheet.create(theme => ({
  kutu: {
    backgroundColor: '#ff00ff',
    width:30,
    height:30,
    borderRadius:3,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },kutu2: {
    backgroundColor: '#0000ff',
    width:30,
    height:30,
    borderRadius:3,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },kutu3: {
    backgroundColor: '#ffaa11',
    width:30,
    height:30,
    borderRadius:3,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
}));



