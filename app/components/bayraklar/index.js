import React from 'react';
import {
  RkText,RkTabView,
  RkCard, RkStyleSheet,RkTheme,
  RkComponent
} from 'react-native-ui-kitten';
import axios from 'axios';
import {

  View,StyleSheet
} from 'react-native';
import {ulkeler} from '../../utils/ulkeIsim'
import _ from 'lodash'
import SvgUri from 'react-native-svg-uri';

RkTheme.setType('RkText','baslik',{
  fontSize: 16
 });

export class Bayraklar extends RkComponent {

  constructor(props) {
    super(props);
    
  }

  
render()
  {
    let a_=this.props.item.country;
    let i_=_.findIndex(ulkeler, function(o) { return o.Name == a_});
    if(i_<0){
      i_=0;
    }
    let ulke=ulkeler[i_].Code;
    //let i_=_.findIndex(ulkeler, { 'name': this.props.name });
    return (
      <View style={{flexDirection:'row'}}>
        <View style={{flex:1}}>
          <RkText rkType='baslik'>{ulke+' '+this.props.item.country+' '+this.props.item.name}</RkText>
        </View>
        <View style={{alignSelf:'flex-end',backgroundColor:'#ff4433',borderRadius:5,paddingHorizontal:5,marginRight:5}}>
          <RkText>{this.props.item.sayi}</RkText>
        </View>
      </View>
    )
  }
}







let styles = RkStyleSheet.create(theme => ({
  kutu: {
    backgroundColor: '#ff00ff',
    width:30,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
}));



