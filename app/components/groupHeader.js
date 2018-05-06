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

export class GroupHeader extends React.Component {

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
<View style={{flex:1,backgroundColor:'#dfe3db',borderBottomColor:'#a2a39e',borderBottomWidth:1}}>
         
         <LinearGradient colors={['#e3d7df','#d8dbd4']}
                       start={{x: 0.0, y: 0.0}}
                       end={{x: 0.0, y: 1}}
                       style={{paddingVertical:5,paddingLeft:10,flexDirection:'row'}}
                       >
                       {this.state.label}
       </LinearGradient> 
         </View>
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