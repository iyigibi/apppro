import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  StatusBar,AsyncStorage
} from 'react-native';
import {
  RkText,
  RkTheme
} from 'react-native-ui-kitten'
import {ProgressBar} from '../../components';
import {
  KittenTheme
} from '../../config/theme';
import {NavigationActions} from 'react-navigation';
import {scale, scaleModerate, scaleVertical} from '../../utils/scale';
import User from '../../data/globals';

let timeFrame = 500;



export class SplashScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      nereye:'Home'
    }
  }

  componentWillMount(){
    var self = this;
    AsyncStorage.getItem('@eduadisc8:token').then((value)=>{console.log(value);
    if(value==null){
      
      
      console.log(value);
      this.setState({nereye:'signUP'});

      //self.props.navigation.navigate('SignUP', {id: 'asd'});



    }else{
      User.setCurrentUser(value);
    }
    });
  }





  componentDidMount() {
    var self = this;
    StatusBar.setHidden(true, 'none');
    RkTheme.setTheme(KittenTheme);

    this.timer = setInterval(() => {
      if (this.state.progress == 1) {
        clearInterval(this.timer);
        setTimeout(() => {

          if(this.state.nereye=='Home'){
            StatusBar.setHidden(false, 'slide');
            let toHome = NavigationActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({routeName: 'Home'})]
            });
            this.props.navigation.dispatch(toHome)
          }else{
            self.props.navigation.navigate('SignUP', {id: 'asd'});
          }

          



        }, timeFrame);
      } else {
        let random = 1;
        let progress = this.state.progress + random;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({progress});
      }
    }, timeFrame)

  }


  render() {
    let width = Dimensions.get('window').width;
    return (
      <View style={styles.container}>
        <View>
          <Image style={[styles.image, {width}]} source={require('../../assets/images/logo.png')}/>
          <View style={styles.text}>
            <RkText rkType='light' style={styles.hero}>EDUASPORTIN</RkText>
            <RkText rkType='logo' style={styles.appName}>Mobile</RkText>
          </View>
        </View>
        <ProgressBar
          color={RkTheme.current.colors.accent}
          style={styles.progress}
          progress={this.state.progress} width={scale(320)}/>
      </View>
    )
  }
}



let styles = StyleSheet.create({
  container: {
    backgroundColor: '#888888',
    justifyContent: 'center',
    alignSelf:'center',
    flex: 1
  },
  image: {
    resizeMode: 'cover',
    height: scaleVertical(50),
  },
  text: {
    alignItems: 'center'
  },
  hero: {
    fontSize: 37,
  },
  appName: {
    fontSize: 62,
  },
  progress: {
    alignSelf: 'center',
    marginBottom: 35,
    backgroundColor: '#e5e5e5'
  }
});