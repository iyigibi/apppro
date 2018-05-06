import React from 'react';
import {
  RkButton,
  RkTextInput,
  RkText,
  RkStyleSheet
} from 'react-native-ui-kitten';
import {
  View,
} from 'react-native';
import {FontAwesome} from '../assets/icons';
import {LinearGradient} from 'expo';

export class StatCell extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      label: props.label,
    }
  }



  render() {

    let {
      ...inputProps
    } = this.props;



    return (

      
      
          <View style={{paddingTop:5,paddingLeft:0}}>
          <View style={{flexDirection:'row',alignItems:'flex-end'}}>
          <View style={{flexDirection:'row',flex:1,justifyContent:'flex-start'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,marginHorizontal:10,alignItems:'flex-end',backgroundColor:'#ff0000',borderRadius:5}}>
            <RkText rkType='possession'>{this.props.val1}</RkText>
            </View>
          </View>

          <View style={{justifyContent:'center',flexDirection:'row'}}>
            <RkText>{this.props.label}</RkText>
          </View>

          <View style={{flexDirection:'row',flex:1,justifyContent:'flex-end'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,marginHorizontal:10,alignItems:'flex-end',backgroundColor:'#000000',borderRadius:5}}>
            <RkText rkType='possession'>{this.props.val2}</RkText>
            </View>
          </View>
         </View>
         <LinearGradient colors={['#ffffff','#f6f6f6']}
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1}}
          style={{paddingVertical:5,paddingLeft:10}}
          ></LinearGradient></View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  icon: {
    fontSize: 24
  },
  button: {
    right: 17
  }
}));