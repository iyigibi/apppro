import React from 'react';
import {
  View,
  Image,
  Keyboard,
  TouchableOpacity,
  ScrollView,AsyncStorage,StatusBar
} from 'react-native';
import {
  RkButton,
  RkText,
  RkChoice,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard
} from 'react-native-ui-kitten';
import {GradientButton} from '../../components/';
import {NavigationActions} from 'react-navigation';
import {scale, scaleModerate, scaleVertical} from '../../utils/scale';
import axios from 'axios';
import globalVars from '../../data/globalVars';

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

export class SignUp extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state={
      myVar:'bu değişir'
    }
  }


  render() {
    var self = this;
    AsyncStorage.getItem('@eduadisc8:token').then((value)=>{console.log(value);
    if(value!=null){
      globalVars.token=value;
      
      console.log(value);
      StatusBar.setHidden(false, 'slide');
            let toHome = NavigationActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({routeName: 'Articles4'})]
            });
            self.props.navigation.dispatch(toHome)



    }
    });

    let renderIcon = () => {
      if (RkTheme.current.name === 'light')
        return <Image style={styles.image} source={require('../../assets/images/logo.png')}/>;
      return <Image style={styles.image} source={require('../../assets/images/logoDark.png')}/>
    };
    return (
      <ScrollView>
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={ (e) => true}
        onResponderRelease={ (e) => Keyboard.dismiss()}>
        <View style={{alignItems: 'center'}}>
          {renderIcon()}
          <View>
            </View>
          


        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput rkType='bordered' placeholder='Name' onChangeText={(firstname) => this.setState({firstname})}/>
            <RkTextInput rkType='bordered' placeholder='Surname' onChangeText={(lastname) => this.setState({lastname})}/>
            <RkTextInput rkType='bordered' placeholder='Email' onChangeText={(email) => this.setState({email})}/>
            <RkTextInput rkType='bordered' placeholder='Password' secureTextEntry={true} onChangeText={(password) => this.setState({password})}/>
            <RkTextInput rkType='bordered' placeholder='Confirm Password' secureTextEntry={true} onChangeText={(password) => this.setState({password})}/>
            <View style={{flexDirection:'row'}}>
              <RkChoice rkType='clear' selected={true}/><TouchableOpacity
              onPress={() => {
                this.setState({
                  myVar: "değişti"
                })
              }}
              ><RkText>I agree terms and aggrements</RkText></TouchableOpacity>
            </View>
            <RkText>{this.state.mesaj}</RkText>



            <GradientButton style={styles.save} rkType='medium' text='SIGN UP' onPress={() => {
              const data = new FormData();
              data.append('firstname', this.state.firstname);
              data.append('lastname', this.state.lastname);
              data.append('username', this.state.email);
              data.append('email', this.state.email);
              data.append('password', this.state.password);
              data.append('security_question', this.state.security_question);
              data.append('security_answer', this.state.security_answer);
              axios.post('https://eduasportin.com/json/addWebUser.js', data).then(function (response) {
               // console.log(response);
                if(response.data.result){
                  self.setState({token: response.data.ID});
                  try {
                    AsyncStorage.setItem('@eduadisc8:token', response.data.ID);
                  } catch (error) {
                    // Error saving data
                  }
                  self.setState({mesaj: response.data.message});
                }else{
                  self.setState({mesaj: response.data.message});
                  
                }
                



                
                //this.setState({firstname})
                
              })
              .catch(function (error) {
                //this.setState={mesaj2:error}
                console.log(error);
              });

            }}/>
            <GradientButton style={styles.save} rkType='medium' text='FACEBOOK LOGIN' onPress={() => {
              this.props.navigation.goBack()
            }}/>
            <GradientButton style={styles.save} rkType='medium' text='GOOGLE LOGIN' onPress={() => {
              this.props.navigation.goBack()
            }}/>
          </View>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType='primary3'>Already have an account?</RkText>
              <RkButton rkType='clear'  onPress={() => this.props.navigation.navigate('Login1')}>
                <RkText rkType='header6'> Sign in now </RkText>
              </RkButton>
            </View>
          </View>
        </View>
      </RkAvoidKeyboard>
      </ScrollView>
    )
  }
}


let styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 16,

   // justifyContent: 'space-around',
    backgroundColor: theme.colors.screen.base
  },
  image: {
    paddingBottom: 100,
    height:scaleVertical(77),
    resizeMode:'contain'
  },
  content: {
    //justifyContent: 'space-between'
  },
  save: {
    marginVertical: 20
  },
  buttons: {
    flexDirection: 'row',
    //marginBottom: 24,
  // marginHorizontal: 24,
    //justifyContent: 'space-around'
  },
  footer:{
    justifyContent:'flex-end'
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
}));