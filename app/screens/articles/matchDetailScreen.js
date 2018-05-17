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
import {Avatar,GroupHeader,StatCell} from '../../components';
import {WinLose,TahminBars} from '../../components';
import axios from 'axios';
let moment = require('moment');
import {LinearGradient} from 'expo';

let w__=Dimensions.get('window').width;
RkTheme.setType('RkText','f40',{
  fontSize: w__/40,
  color:'#ffffff'
 });

 RkTheme.setType('RkText','fontTeamName',{
  fontSize: w__/24,
  color:'#ffffff'
 });

 RkTheme.setType('RkText','fontScore',{
  fontSize: w__/9,
  color:'#ffffff'
 });
 RkTheme.setType('RkText','fontBottom',{
  fontSize: w__/34,
  color:'#ffffff'
 });
 RkTheme.setType('RkText','fontEvents',{
  fontSize: w__/32,
  color:'#858585'
 });
 RkTheme.setType('RkText','eventsFont',{
  fontSize: w__/27,
  color:'#000000'
 });
 RkTheme.setType('RkText','possession',{
  fontSize: w__/20,
  color:'#ffffff'
 });
 RkTheme.setType('RkText','possessionTeam',{
  fontSize: w__/32,
  color:'#ffffff'
 });

 RkTheme.setType('RkText','greenie',{
  color:'#008800'
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
      if(data.eventType=='halftimeScore'){
          return (<View style={{width:Dimensions.get('window').width,backgroundColor:'#ffffff'}} key={data.id}>
            <GroupHeader label={ <View style={{flexDirection:'row'}}><RkText  rkType='fontEvents'>FIRST HALF SCORE : </RkText><RkText  rkType='fontEvents greenie'> {data.score}</RkText></View>}/>

            </View>);
      }else if(data.eventType=='Goal'){
        if(data.ScoringTeam=='1'){
          return (<View style={{width:Dimensions.get('window').width,backgroundColor:'#ffffff'}} key={data.id}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{flex:8}}>
              <RkText rkType='eventsFont'>{data.Player.text+data.eventType}</RkText>
            </View>
            <View style={{}}>
              <RkText>{data.Time}</RkText>
            </View>
            <View style={{flex:8}}>
            </View>
          </View>
          <View>
            <LinearGradient colors={['#ffffff','#f6f6f6']}
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1}}
          style={{paddingVertical:5,paddingLeft:10}}
          ></LinearGradient></View></View>)
        }else{
          return (<View   style={{width:Dimensions.get('window').width,backgroundColor:'#ffffff'}} key={data.id}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{flex:8}}>
            </View>
            <View style={{}}>
              <RkText>{data.Time}</RkText>
            </View>
            <View style={{flex:8}}>
              <RkText  rkType='eventsFont'>{data.Player.text+data.eventType}</RkText>
            </View>
          </View>
          <View>
            <LinearGradient colors={['#ffffff','#f6f6f6']}
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1}}
          style={{paddingVertical:5,paddingLeft:10}}
          ></LinearGradient></View></View>)        
       }
     }else{
      if(data.PlayerTeam=='1'){
        return (<View  style={{width:Dimensions.get('window').width,backgroundColor:'#ffffff'}} key={data.id}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <View style={{flex:8}}>
            <RkText  rkType='eventsFont'>{data.Player.text+data.eventType}</RkText>
          </View>
          <View style={{}}>
            <RkText>{data.Time}</RkText>
          </View>
          <View style={{flex:8}}>
          </View>
        </View>
        <View><LinearGradient colors={['#ffffff','#f6f6f6']}
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.0, y: 1}}
        style={{paddingVertical:5,paddingLeft:10}}
        ></LinearGradient></View></View>)
      }else{
        return (<View style={{width:Dimensions.get('window').width,backgroundColor:'#ffffff'}} key={data.id}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <View style={{flex:8}}>
          </View>
          <View style={{}}>
            <RkText>{data.Time}</RkText>
          </View>
          <View style={{flex:8}}>
            <RkText  rkType='eventsFont'>{data.Player.text+data.eventType}</RkText>
          </View>
        </View>
        <View><LinearGradient colors={['#ffffff','#f6f6f6']}
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.0, y: 1}}
        style={{paddingVertical:5,paddingLeft:10}}
        ></LinearGradient></View></View>)        
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
  console.log(str_);
let detailsObj=JSON.parse(str_);

let goals_;
if(detailsObj.Match.Goals){
  goals_=detailsObj.Match.Goals.Goal;
  goals_.forEach(function(obj) { obj.eventType = "Goal"; });
}

let cards_;
if(detailsObj.Match.Cards){
  cards_=detailsObj.Match.Cards.Card;
  cards_.forEach(function(obj) { obj.eventType = "Card"; });
}
var etkinlikler_;
if(detailsObj.Match.Goals && detailsObj.Match.Cards){
  etkinlikler_ = goals_.concat(cards_);
}else if(detailsObj.Match.Goals){
  etkinlikler_ = goals_;
}else if(detailsObj.Match.Cards){
  etkinlikler_ = cards_;
}else{
  etkinlikler_=[];
}
let etkinlikComp;

let team1iconId=detailsObj.Match.Team1.UniqueTeamId;

let team2iconId=detailsObj.Match.Team2.UniqueTeamId;
let stad='';
if(detailsObj.Match.Venue){
  if(detailsObj.Match.Venue.Stadium){
    if(detailsObj.Match.Venue.Stadium.name){
      stad=detailsObj.Match.Venue.Stadium.name;
    }
  }
}

let hakem='';
if(detailsObj.Match.Referee){
  if(detailsObj.Match.Referee.name){
    hakem=detailsObj.Match.Referee.name;
  }
}
let ilkyari='';
let skor='';
if(detailsObj.Match.Scores){
  if(detailsObj.Match.Scores.Score){
    if(detailsObj.Match.Scores.Score[1]){
      ilkyari=detailsObj.Match.Scores.Score[1].Team1+':'+detailsObj.Match.Scores.Score[1].Team2;
      etkinlikler_.push({Time:45,eventType:'halftimeScore',id:123123,score:ilkyari});
    }
    if(detailsObj.Match.Scores.Score[0]){
      skor=detailsObj.Match.Scores.Score[0].Team1+':'+detailsObj.Match.Scores.Score[0].Team2;
    }
  }else{
    skor=this.data.score;
  }
}


if(etkinlikler_){
  etkinlikler_.sort(function(a,b) {return (a.Time > b.Time) ? 1 : ((b.Time > a.Time) ? -1 : 0);} );
 
  etkinlikler_.reverse();
  etkinlikComp=this.etkinlikEkle(etkinlikler_);
}


console.log(JSON.stringify(detailsObj));
console.log(stad+' '+hakem);






let dateStr=detailsObj.Match.MatchDate.substring(0,detailsObj.Match.MatchDate.length-5);
console.log(dateStr+'ppp');
let date=new Date(dateStr)
let MatchDate=moment(date).format('DD.MM.YYYY hh:mm');

let w__=Dimensions.get('window').width;
let h__=((w__*9)/16);
let h1,h2;
let StatisticsComp=(<View></View>);
if(detailsObj.Match.Statistics && detailsObj.Match.Statistics.BallPossession){
  h1=Number(detailsObj.Match.Statistics.BallPossession.Team1);
   h2=Number(detailsObj.Match.Statistics.BallPossession.Team2);
   StatisticsComp=  (
    <View style={styles.root}>
    <GroupHeader label={<RkText rkType='fontEvents'>İstatistik</RkText>}/>
    
    
    <View>
    <View  style={{position:'absolute',bottom:0}}>
    <LinearGradient colors={['#ffffff','#dedede']}
     start={{x: 0.0, y: 0.0}}
     end={{x: 0.0, y: 1}}
     
     style={{paddingLeft:0,paddingTop:10,width:800}}
     >
     </LinearGradient>
     </View>
     {StatisticsComp}
     <View style={{justifyContent:'center',flexDirection:'row'}}>
     <RkText>BALL POSSESSION</RkText>
    </View>
     <View style={{flexDirection:'row',alignItems:'flex-end'}}>
     <View style={{flexDirection:'row',flex:1,justifyContent:'flex-start'}}>
       <View style={{flexDirection:'row',paddingTop:h1,justifyContent:'space-between',flex:1,paddingHorizontal:10,marginHorizontal:10,alignItems:'flex-end',backgroundColor:'#ff0000',borderTopLeftRadius:10,borderTopRightRadius:10}}>
       <RkText rkType='possession'>{detailsObj.Match.Statistics.BallPossession.Team1}</RkText>
       <RkText rkType='possessionTeam'>{this.data.team1}</RkText>
       </View>
     </View>
     <View style={{flexDirection:'row',flex:1,justifyContent:'flex-end'}}>
     <View style={{flexDirection:'row',paddingTop:h2,justifyContent:'space-between',flex:1,paddingHorizontal:10,marginHorizontal:10,alignItems:'flex-end',backgroundColor:'#000000',borderTopLeftRadius:10,borderTopRightRadius:10}}>
       <RkText rkType='possession'>{detailsObj.Match.Statistics.BallPossession.Team2}</RkText>
       <View><RkText rkType='possessionTeam'>{this.data.team2}</RkText></View>
       </View>
     </View>
    </View>
    
    </View>
    

     <StatCell label='CornerKicks' val1={detailsObj.Match.Statistics.CornerKicks.Team1} val2={detailsObj.Match.Statistics.CornerKicks.Team2}></StatCell>
     <StatCell label='Fouls' val1={detailsObj.Match.Statistics.Fouls.Team1} val2={detailsObj.Match.Statistics.Fouls.Team2}></StatCell>
     <StatCell label='FreeKicks' val1={detailsObj.Match.Statistics.FreeKicks.Team1} val2={detailsObj.Match.Statistics.FreeKicks.Team2}></StatCell>
     <StatCell label='GoalkeeperSaves' val1={detailsObj.Match.Statistics.GoalkeeperSaves.Team1} val2={detailsObj.Match.Statistics.GoalkeeperSaves.Team2}></StatCell>
     <StatCell label='GoalKicks' val1={detailsObj.Match.Statistics.GoalKicks.Team1} val2={detailsObj.Match.Statistics.GoalKicks.Team2}></StatCell>
     <StatCell label='Offsides' val1={detailsObj.Match.Statistics.Offsides.Team1} val2={detailsObj.Match.Statistics.Offsides.Team2}></StatCell>
     <StatCell label='ShotsOffGoal' val1={detailsObj.Match.Statistics.ShotsOffGoal.Team1} val2={detailsObj.Match.Statistics.ShotsOffGoal.Team2}></StatCell>
     <StatCell label='ShotsOnGoal' val1={detailsObj.Match.Statistics.ShotsOnGoal.Team1} val2={detailsObj.Match.Statistics.ShotsOnGoal.Team2}></StatCell>
     <StatCell label='ThrowIns' val1={detailsObj.Match.Statistics.ThrowIns.Team1} val2={detailsObj.Match.Statistics.ThrowIns.Team2}></StatCell>
     

     
     </View>


  );
}

    return (
      <View style={styles.root}>
      <View style={{}}>
      
        </View>
      <ScrollView style={styles.root}>
      <View style={{position:'absolute'}}>
      <Image  style={{width:w__,height:h__}} source={require('../../assets/images/bg_livescores.jpg')} />
        </View>
        <View  style={styles.stun}>
            <View style={styles.kutuLeft}>
            <View style={{paddingVertical:10}}></View>
                <RkText rkType='fontTeamName'>{this.data.team1}</RkText>
                <View style={{paddingVertical:0}}></View>
            </View>
            
            <View style={styles.kutuRight}>
                <View style={{paddingVertical:10}}></View>
                <RkText  rkType='fontTeamName'>{this.data.team2}</RkText>
                <View style={{paddingVertical:0}}></View>
            </View>
          </View>
          <View  style={styles.stun2}>
            <View style={styles.kutu2}>
            <View style={{paddingVertical:5}}></View>
            <Image  style={{width:w_,height:w_}} source={{uri:'https://ls.betradar.com/ls/crest/big/'+team1iconId+'.png'}}/>
            <View style={{paddingVertical:10}}></View>
            </View>
            <View style={styles.kutu}>
                <RkText rkType='fontScore'>{skor}</RkText>
                <RkText rkType='f40'>{MatchDate} </RkText>
                <RkText rkType='f40'>{ilkyari}</RkText>
            </View>
            <View style={styles.kutu2}>
            <View style={{paddingVertical:5}}></View>
            <Image  style={{width:w_,height:w_}} source={{uri:'https://ls.betradar.com/ls/crest/big/'+team2iconId+'.png'}}/>
            </View>
          </View>
          <View  style={styles.stun}>
            <View style={styles.kutuLeft}>
                  <RkText  rkType='fontBottom'>stad: {stad}</RkText>
              </View>
              <View style={styles.kutuRight}>
                  <RkText  rkType='fontBottom'>HAKEM: {hakem}</RkText>
              </View>
          </View>
          
          <View style={styles.root}>
          <GroupHeader label={<RkText rkType='fontEvents'>EVENTS</RkText>}/>
          </View>
          <View style={styles.stun}>
          <View style={styles.kutuOpak}>
            {etkinlikComp}
            </View>
          </View>
          {StatisticsComp}
      </ScrollView>
      </View>
    )
  }else{
    return (<View></View>);
  }
  }
}


let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor:'#ffffff',
    flex:1,
  }, stun: {
    flexDirection:'row',
    flex:1,
  }, stun2: {
    flexDirection:'row',
    flex:1,
  },kutu: {
    backgroundColor: '#f7f7f700',
    //borderWidth:1,
    flex:2,
    flexDirection:'column',
    alignItems:'center',

  },kutuOpak: {
    backgroundColor: '#f7f7f7',
    //borderWidth:1,
    flex:2,
    flexDirection:'column',
    alignItems:'center',

  },kutuLeft: {
    backgroundColor: '#f7f7f700',
    paddingLeft:10,
    //borderWidth:1,
    flex:1,
    flexDirection:'column',
    alignItems:'flex-start',

  },kutuRight: {
    backgroundColor: '#f7f7f700',
    //borderWidth:1,
    paddingRight:10,
    flex:1,
    flexDirection:'column',
    alignItems:'flex-end',

  },kutu2: {
    backgroundColor: '#f7f7f700',
    flex:2,
    flexDirection:'column',
    alignItems:'center',

  },kutu3: {
    backgroundColor: '#f7f7f700',
    flex:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:10,
    paddingBottom:5

  },kutu4: {
    backgroundColor: '#f7f7f700',
    flex:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:10,
    paddingBottom:5

  },kutu5: {
    backgroundColor: '#f7f7f700',
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