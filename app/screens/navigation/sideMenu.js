import React from 'react';
import {
  TouchableHighlight,
  View,
  ScrollView,
  Image,
  Platform,
  StyleSheet,
  TextInput,TouchableOpacity
} from 'react-native';
import {NavigationActions} from 'react-navigation';

import {
  RkTextInput,
  RkButton, 
  RkStyleSheet,
  RkText,
  RkTheme,
  Icon
} from 'react-native-ui-kitten';
import {MainRoutes} from '../../config/navigation/routes';
import {FontAwesome} from '../../assets/icons';

import {Avatar} from '../../components/avatar';

export class SideMenu extends React.Component {

  constructor(props) {
    super(props);
    this._navigateAction = this._navigate.bind(this);
  }

  _navigate(route) {
    let resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: route.id})
      ]
    });
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    let menu = MainRoutes.map((route, index) => {
      if(index<2){
        return (
          <TouchableHighlight
            style={styles.container}
            key={route.id}
            underlayColor={RkTheme.current.colors.button.underlay}
            activeOpacity={1}
            onPress={() => this._navigateAction(route)}>
            <View style={styles.content}>
              <View style={styles.content}>
                <RkText style={styles.icon}
                        rkType='moon primary xlarge'>{route.icon}</RkText>
                <RkText>{route.title}</RkText>
              </View>
              <RkText rkType='awesome secondaryColor small'>{FontAwesome.chevronRight}</RkText>
            </View>
          </TouchableHighlight>
        )
      }else{
        return (
        <TouchableHighlight
          style={styles.container}
          key={route.id}
          underlayColor={RkTheme.current.colors.button.underlay}
          activeOpacity={1}
          onPress={() => this._navigateAction(route)}>
          <View style={styles.content}>
            <View style={styles.content}>
              <RkText style={styles.icon}
                      rkType='moon primary xlarge'>{route.icon}</RkText>
              <RkText>{route.title}</RkText>
            </View>
            <RkText rkType='awesome secondaryColor small'>{FontAwesome.chevronRight}</RkText>
          </View>
        </TouchableHighlight>
      )
      }
      
    });


    return (
      <View style={styles.root}>
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <TouchableOpacity
          key={'asdas'}
          onPress={() => this._navigateAction({id: 'settings'})}>
              <RkText rkType='header2'>ayarlar</RkText>
            </TouchableOpacity>
          <View style={[styles.header]}>
          
         
          
          <Avatar img={require('../../data/img/avatars/Image6.png')} rkType='big'/>
          <RkText rkType='header2'>ahmet</RkText>
         

          <View style={styles.searchContainer}>
          <RkTextInput autoCapitalize='none'
                       autoCorrect={false}
                      // onChange={(event) => this._filter(event.nativeEvent.text)}
                       label={<RkText rkType='awesome'>{FontAwesome.search}</RkText>}
                       rkType='row row2'
                       placeholder='Ara'/>
        </View>
        </View>
          {menu}
        </ScrollView>
      </View>
    )
  }
}



RkTheme.setType('RkTextInput', 'row2', {
     input: {
      backgroundColor: '#d9d8de',
      fontSize:20,
      marginLeft:5
    },
    label: {
      backgroundColor: '#d9d8de',
      marginLeft:-5
    },
    
    color: 'gray',
   backgroundColor: '#d9d8de',
    


 });

let styles = RkStyleSheet.create(theme => ({

  searchContainer: {
    backgroundColor: theme.colors.screen.bold,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 60,
    alignItems: 'center',
    borderWidth:0
  },

  container: {
    height: 55,
    paddingHorizontal: 0,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#d9d8de'
  },
  root: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#f0eff5'
  },
  label: {
    backgroundColor: theme.colors.screen.base
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 13,
  },
  header: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 17
  },
  userInfo: {
    flexDirection: 'row',
    paddingVertical: 18,
  },
  bordered: {
    borderBottomWidth: 1,
  //  borderColor: theme.colors.border.base
  },
  section: {
    flex: 1,
    alignItems: 'center'
  },
  space: {
    marginBottom: 3
  },
  separator: {
   // backgroundColor: theme.colors.border.base,
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 0,
    width: 1,
    height: 42
  },
  buttons: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  button: {
    flex: 1,
    alignSelf: 'center'
  }
}));
