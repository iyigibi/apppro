import React from 'react';
import {
  RkText,RkTabView,
  RkCard, RkStyleSheet,RkTheme,
  RkComponent
} from 'react-native-ui-kitten';
import axios from 'axios';
import {

  View,StyleSheet,TouchableOpacity
} from 'react-native';
import {ulkeler} from '../../utils/ulkeIsim'
import _ from 'lodash'
import SvgUri from 'react-native-svg-uri';

RkTheme.setType('RkText','baslik',{
  fontSize: 22
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
    //console.log();
    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() => this.props.navigation.navigate('Canlilar', {id: this.props.item.ID,data_: this.props.item,date_str:this.props.date_str})}>
      <View style={{flexDirection:'row',paddingVertical:15}}>
        <View style={{flex:1,borderBottomWidth:1,borderBottomColor:'#dedede'}}>
          <RkText rkType='baslik'>{ulke+' '+this.props.item.country+' '+this.props.item.name+this.props.date_str}</RkText>
        </View>
        <View style={{alignSelf:'flex-end',backgroundColor:'#ff4433',borderRadius:5,paddingHorizontal:5,marginRight:5}}>
          <RkText>{this.props.item.sayi}</RkText>
        </View>
      </View>
      </TouchableOpacity>
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



