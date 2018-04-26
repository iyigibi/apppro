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
import axios from 'axios';
let moment = require('moment');


let w__=Dimensions.get('window').width;
RkTheme.setType('RkText','f40',{
  fontSize: w__/13
 });

export class MatchDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'MAÇ DETAY'.toUpperCase()
  };

  constructor(props) {
    super(props);
    let {params} = this.props.navigation.state;
    let id = params ? params.id : 1;
    //this.data = data.getArticle(id);
    this.data = params.data_;
    this.state = {
      stories:[]
    }
   // matchXMLID;
   
  }

  componentWillMount() {
    // this.data =data.getArticles('mainNews');
    self=this;
        // console.log(this.data.ID);
         axios.get('http://eduasportin.com/json/listLiveMatchStatistics.js?criteria=matchXMLID='+this.data.matchXMLID+'&a='+Math.random())
         .then(function (response) {
         //  console.log('burada '+response.data.list);
           let arr=response.data.list;
          // arr.unshift({ID:"topGal"});
           self.setState({ stories : arr, isFetching : false });
         
           //this.data=response.data.list;
         })
         .catch(function (error) {
 
          // console.log(error);
         });
   }




   etkinlikEkle(etkinlikler_) {

    return etkinlikler_.map((data) => {
      let hangiTaraf;
      if(data.eventType=='Goal'){
        if(data.ScoringTeam=='1'){
          return (<View key={data} style={{flexDirection:'row',borderWidth:1}}><View style={{flex:8}}><RkText>{'gol '+data.Player.text}</RkText></View><View style={{flex:1}}><RkText>{data.Time}</RkText></View><View style={{flex:8}}></View></View>)
        }else{
          return (<View key={data} style={{flexDirection:'row',borderWidth:1}}><View style={{flex:8}}></View><View style={{flex:1}}><RkText>{data.Time}</RkText></View><View style={{flex:8}}><RkText>{'gol '+data.Player.text}</RkText></View></View>)        
       }
     }else{
      if(data.PlayerTeam=='1'){
        return (<View key={data} style={{flexDirection:'row',borderWidth:1}}><View style={{flex:8}}><RkText>{data.type+' card '+data.Player.text}</RkText></View><View style={{flex:1}}><RkText>{data.Time}</RkText></View><View style={{flex:8}}></View></View>)
      }else{
        return (<View key={data} style={{flexDirection:'row',borderWidth:1}}><View style={{flex:8}}></View><View style={{flex:1}}><RkText>{data.Time}</RkText></View><View style={{flex:8}}><RkText>{data.type+' card '+data.Player.text}</RkText></View></View>)        
     }
      }
      
    })

}


  //<RkText rkType='secondary2 hintColor'>{moment().add(this.data.time, 'seconds').fromNow()}</RkText>
  render() {
    let w_= Dimensions.get('window').width;
   // w__=w_
    w_=w_/5;
    let saat='asdasd';
    let strm='123123';
    let tarihvar=strm.indexOf('-');
    let tarih='';
    if(tarihvar>0){
      tarih=strm.substring(0,tarihvar);
      saat=strm.substring(tarihvar+1);
    }else{
      saat=strm;
    }
    

if(this.state.stories.length>0){
  var str_=this.state.stories[0].jsonText;
  str_ = str_.replace('/','');
let detailsObj=JSON.parse(str_);

let goals_=detailsObj.Match.Goals.Goal;
goals_.forEach(function(obj) { obj.eventType = "Goal"; });
let cards_=detailsObj.Match.Cards.Card;
cards_.forEach(function(obj) { obj.eventType = "Card"; });
var etkinlikler_ = goals_.concat(cards_);
etkinlikler_.sort(function(a,b) {return (a.Time > b.Time) ? 1 : ((b.Time > a.Time) ? -1 : 0);} );
//console.log(JSON.stringify(etkinlikler_));
etkinlikler_.reverse();
let etkinlikComp=this.etkinlikEkle(etkinlikler_);



    return (
      <ScrollView style={styles.root}>
        <View  style={styles.stun}>
            <View style={styles.kutu2}>
            <View style={{paddingVertical:5}}></View>
                <RkText>{this.data.team1}</RkText>
                <View style={{paddingVertical:5}}></View>
            </View>
            <View style={styles.kutu}>
                <RkText>{tarih}</RkText>
            </View>
            <View style={styles.kutu2}>
                <View style={{paddingVertical:5}}></View>
                <RkText>{this.data.team2}</RkText>
                <View style={{paddingVertical:5}}></View>
            </View>
          </View>
          <View  style={styles.stun2}>
            <View style={styles.kutu2}>
            <View style={{paddingVertical:5}}></View>
            <Image  style={{width:w_,height:w_}} source={{uri:'https://v1.eduacdn.com/v01/teamlogo/'+this.state.stories[0].team1UniqueID+'.png'}}/>
            <View style={{paddingVertical:10}}></View>
            </View>
            <View style={styles.kutu}>
                <RkText rkType='f40'>{this.state.stories[0].score}</RkText>
            </View>
            <View style={styles.kutu2}>
            <View style={{paddingVertical:5}}></View>
            <Image  style={{width:w_,height:w_}} source={{uri:'https://v1.eduacdn.com/v01/teamlogo/'+this.state.stories[0].team2UniqueID+'.png'}}/>
            </View>
          </View>
          <View  style={styles.stun}>
            <View style={{paddingVertical:2}}>
            

            </View>
          </View>
          
          <View style={styles.root}>

            <RkText>ETKİNLİKLER</RkText>
            

          </View>
          <View style={styles.stun}>
          <View style={styles.kutu}>
            {etkinlikComp}
            </View>
          </View>
      </ScrollView>
    )
  }else{
    return (<View></View>);
  }
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