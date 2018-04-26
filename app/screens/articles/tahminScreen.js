import React from 'react';
import {
  ScrollView,
  Image,
  View,
  TouchableOpacity,Dimensions
} from 'react-native';
import {
  RkCard,
  RkText,
  RkStyleSheet ,RkTheme
} from 'react-native-ui-kitten';
import {data} from '../../data';
import {Avatar} from '../../components';
import {WinLose,TahminBars} from '../../components';
let moment = require('moment');


let w__=Dimensions.get('window').width;
RkTheme.setType('RkText','f40',{
  fontSize: w__/13
 });

export class TahminScreen extends React.Component {
  static navigationOptions = {
    title: 'TAHMİN'.toUpperCase()
  };

  constructor(props) {
    super(props);
    let {params} = this.props.navigation.state;
    let id = params ? params.id : 1;
    //this.data = data.getArticle(id);
    this.data = params.data_;
   
  }


  //<RkText rkType='secondary2 hintColor'>{moment().add(this.data.time, 'seconds').fromNow()}</RkText>
  render() {
    let w_= Dimensions.get('window').width;
   // w__=w_
    w_=w_/5;
    let saat='asdasd';
    let strm=this.data.date;
    let tarihvar=strm.indexOf('-');
    let tarih='';
    if(tarihvar>0){
      tarih=strm.substring(0,tarihvar);
      saat=strm.substring(tarihvar+1);
    }else{
      saat=strm;
    }
    
    return (
      <ScrollView style={styles.root}>
        <View  style={styles.stun}>
            <View style={styles.kutu2}>
            <View style={{paddingVertical:5}}></View>
                <RkText>{this.data.homeTeam}</RkText>
                <View style={{paddingVertical:5}}></View>
            </View>
            <View style={styles.kutu}>
                <RkText>{tarih}</RkText>
            </View>
            <View style={styles.kutu2}>
                <View style={{paddingVertical:5}}></View>
                <RkText>{this.data.awayTeam}</RkText>
                <View style={{paddingVertical:5}}></View>
            </View>
          </View>
          <View  style={styles.stun2}>
            <View style={styles.kutu2}>
            <View style={{paddingVertical:5}}></View>
            <Image  style={{width:w_,height:w_}} source={{uri:'https://v1.eduacdn.com/v01/teamlogo/'+this.data.home_team_id+'.png'}}/>
            <View style={{paddingVertical:10}}></View>
            </View>
            <View style={styles.kutu}>
                <RkText rkType='f40'>{saat}</RkText>
            </View>
            <View style={styles.kutu2}>
            <View style={{paddingVertical:5}}></View>
            <Image  style={{width:w_,height:w_}} source={{uri:'https://v1.eduacdn.com/v01/teamlogo/'+this.data.away_team_id+'.png'}}/>
            </View>
          </View>
          <View  style={styles.stun}>
            <View style={{paddingVertical:2}}>
            
            </View>
          </View>
          <View  style={styles.stun}>
            <View style={styles.kutu3}>
              <WinLose status='W'/>
              <WinLose status='D'/>
              <WinLose status='L'/>
              <WinLose status='W'/>
              <WinLose status='L'/>
            </View>
            <View style={styles.kutu}>
                <RkText></RkText>
            </View>
            <View style={styles.kutu3}>
              <WinLose status='W'/>
              <WinLose status='D'/>
              <WinLose status='L'/>
              <WinLose status='W'/>
              <WinLose status='L'/>
            </View>
          </View>
          <View style={styles.root}>

            <RkText>Tüm Tahminler</RkText>
            

          </View>
          <View  style={styles.stun}>
              <View style={styles.kutu4}>
                  <RkText>1-X-2</RkText>
              </View>
              <View style={styles.kutu}>
                  <RkText></RkText>
              </View>
              <View style={styles.kutu5}>
                 <TahminBars status={this.data}/>
              </View>
          </View>
          <View>
          <RkText> </RkText>
            <RkText> Karşılaşma detayları servisten gelecek</RkText>
          </View>
      </ScrollView>
    )
  }
}





let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.scroll,
  }, stun: {
    flexDirection:'row',
    flex:1,
  }, stun2: {
    flexDirection:'row',
    flex:1,
  },kutu: {
    backgroundColor: '#f7f7f7',
    //borderWidth:1,
    flex:1,
    flexDirection:'column',
    alignItems:'center',

  },kutu2: {
    backgroundColor: '#f7f7f7',
    flex:2,
    flexDirection:'column',
    alignItems:'center',

  },kutu3: {
    backgroundColor: '#f7f7f7',
    flex:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:10,
    paddingBottom:5

  },kutu4: {
    backgroundColor: '#f7f7f7',
    flex:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:10,
    paddingBottom:5

  },kutu5: {
    backgroundColor: '#f7f7f7',
    flex:2,
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'center',
    paddingTop:10,

  },
  title: {
    marginBottom: 5
  },
}));