import React, { Component } from 'react';
import {  Text,
          View,
          Dimensions,
          Image,
          ScrollView,
          StyleSheet,
          TouchableOpacity,
          FlatList,

        } from 'react-native';

import Carousel from 'react-native-looped-carousel';
import Header from './@Header';
import ImageSliding from './@ImageSliding';

const { width, height } = Dimensions.get('window');

export default class CarouselExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      catagories:[
                  {key:0,url:'http://192.168.43.159/slider/1.jpg',name:'Vegetables',cartCount:0},
                  {key:1,url:'http://192.168.43.159/slider/2.jpg',name:'Fruits',cartCount:0},
                
                ],
      cartCount:0,
      
    };
  }

cartIncrease(index){

  let sample = [...this.state.catagories];
  sample[index].cartCount = sample[index].cartCount +1;
 this.setState({categories:sample});

}

cartDecrease(index){

  let sample = [...this.state.catagories];
  sample[index].cartCount = sample[index].cartCount -1;
 this.setState({categories:sample});

}


  render() {

const screenWidthOrifinal=Math.round(Dimensions.get('window').width);
let  screenWidth=Math.round((screenWidthOrifinal-30)/2.1);


    return (
      <View style={{flex:1,backgroundColor:'white' }} >

          <Header onClick={this.props.navigation.openDrawer} />
        
       <View style={{flex:1}} >
      <ScrollView>
        <View style={{flex:4,backgroundColor:'white'}} >
          <ImageSliding />
        </View> 

        <View style={{flex:10}} >

          <View style={{flex:2,backgroundColor:'white'}} >
            <View style={{flex:1,backgroundColor:'white',flexDirection:'row'}} >

              <ScrollView horizontal={true} >

                <View style={{flex:1}} >
                  <TouchableOpacity style={{margin:13}} >
                    <Image source={require('./../../assets/icons/fruit.png')} style={{width:30,height:30,alignSelf:'center'}} />
                    <Text style={{textAlign:'center',fontSize:13,marginTop:5}} >Fruits & </Text>
                    <Text style={{textAlign:'center',fontSize:13}} >Vegetables</Text>
                  </TouchableOpacity>
                </View>

                
                <View style={{flex:1}} >
                  <TouchableOpacity style={{margin:12}} >
                    <Image source={require('./../../assets/icons/dairy.png')} style={{width:30,height:30,alignSelf:'center'}} />
                    <Text style={{textAlign:'center',fontSize:13,marginTop:5}} >Dairy </Text>
                    <Text style={{textAlign:'center',fontSize:13}} >Products</Text>
                  </TouchableOpacity>
                </View>

                <View style={{flex:1}} >
                  <TouchableOpacity style={{margin:12}} >
                    <Image source={require('./../../assets/icons/grocery.png')} style={{width:30,height:30,alignSelf:'center'}} />
                    <Text style={{textAlign:'center',fontSize:13,marginTop:5}} >Grocery</Text>
                  </TouchableOpacity>
                </View>

                <View style={{flex:1}} >
                  <TouchableOpacity style={{margin:12}} >
                    <Image source={require('./../../assets/icons/snacks.png')} style={{width:30,height:30,alignSelf:'center'}} />
                    <Text style={{textAlign:'center',fontSize:13,marginTop:5}} >Homemade </Text>
                    <Text style={{textAlign:'center',fontSize:13}} >Snacks</Text>
                  </TouchableOpacity>
                </View>

                <View style={{flex:1}} >
                  <TouchableOpacity style={{margin:12}} >
                    <Image source={require('./../../assets/icons/beauty.png')} style={{width:30,height:30,alignSelf:'center'}} />
                    <Text style={{textAlign:'center',fontSize:13,marginTop:5}} >Beauty </Text>
                    <Text style={{textAlign:'center',fontSize:13}} >Hygiene</Text>
                  </TouchableOpacity>
                </View>

                <View style={{flex:1}} >
                  <TouchableOpacity style={{margin:12}} >
                    <Image source={require('./../../assets/icons/cleaning.png')} style={{width:30,height:30,alignSelf:'center'}} />
                    <Text style={{textAlign:'center',fontSize:13,marginTop:5}} >Cleaning & </Text>
                    <Text style={{textAlign:'center',fontSize:13}} >Household</Text>
                  </TouchableOpacity>
                </View>
                
              </ScrollView>




            </View>
          </View>

          <View style={{flex:8,backgroundColor:'white'}} >

            <Text style={{
                          fontSize:20,
                          marginLeft:10,
            }}

                  >Future Products</Text>

           

            <FlatList  
              data={this.state.catagories}
              renderItem={({item,index})=><View style={{margin:5,borderWidth:1,borderColor:'#ccc'}} >
                                      <View style={{margin:5}} >
                                        <Image source={{uri:item.url}} style={{width:screenWidth,height:screenWidth,borderRadius:10}} resizeMode={'cover'} />
                                            <Text style={{
                                                             backgroundColor:'rgba(0,0,0,0.5)',
                                                             width:'100%',
                                                             padding:2,
                                                             borderRadius:10,
                                                             textAlign:'center',
                                                             textShadowColor: 'black',
                                                             textShadowOffset: {width: 0, height: 0},
                                                             textShadowRadius: 10,
                                                             position:'absolute',
                                                             bottom:0,
                                                             color:'white',
                                                          }} >{item.name}</Text>

                                      </View>

                                        <View style={{
                                                        margin:0,
                                                        flex:1,
                                                        flexDirection:'row',
                                                        borderTopWidth:1,
                                                        borderTopColor:'#ccc',
                                                        
                                                      }} >

                                          <TouchableOpacity style={{
                                                                      borderRightWidth:1,
                                                                      borderRightColor:'#ccc',

                                                                    }}
                                                            onPress={(index)=>{this.cartDecrease(item.key);}} >

                                            <Text style={{
                                                            fontSize:20,
                                                            paddingLeft:9,
                                                            paddingRight:9,

                                                          }}>-</Text>
                                          </TouchableOpacity>

                                            <AddCart width={screenWidth} cartCount={this.state.catagories[index].cartCount} />

                                          <TouchableOpacity style={{
                                                                      borderLeftWidth:1,
                                                                      borderLeftColor:'#ccc',

                                                                  }}
                                                            onPress={(index)=>{this.cartIncrease(item.key);}}
                                                                      >
                                            <Text style={{
                                                            fontSize:20,
                                                            paddingLeft:9,
                                                            paddingRight:9,

                                                          }}>+</Text>
                                          </TouchableOpacity>

                                        </View>
                                        <View>
                                          <TouchableOpacity style={{backgroundColor:'green',borderWidth:1,borderColor:'green'}} >
                                            <Text style={{padding:2,fontSize:16,textAlign:'center',fontWeight:'bold',color:'white'}} >Add Cart</Text>
                                          </TouchableOpacity>
                                        </View>
                                    </View> }
              numColumns={2}
            />

        </View>
          
        </View>
        <Text>{}</Text>
        </ScrollView>
       </View>

      </View>
    );
  }
}

const style=StyleSheet.create({

})


class AddCart extends Component{
  constructor(props) {
    super(props);

    this.state = {};
  }
componentDidUpdate(){

}
render(){
  return(
    <View>
      <Text style={{
                    fontSize:20,
                    width:this.props.width-60,
                    textAlign:'center',

                  }} >{this.props.cartCount}</Text>
      </View>
  )
}


}



