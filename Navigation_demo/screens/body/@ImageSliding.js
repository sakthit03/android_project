import React, { Component } from 'react';
import {  Text,
          View,
          Dimensions,
          Image

        } from 'react-native';

import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

export default class ImageSliding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  render() {
    return (
      

      <View style={{height:170}} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={5000}
          style={this.state.size}
          autoplay
          bullets={true}
          arrows={true}
          leftArrowStyle={{
            color:'white',
            padding:5,
            borderRadius:2,
            marginLeft:10,
            fontSize:30,
            backgroundColor:'rgba(0,0,0,0.7)'
          }}

          rightArrowStyle={{
            color:'white',
            padding:5,
            borderRadius:2,
            marginRight:10,
            fontSize:30,
            backgroundColor:'rgba(0,0,0,0.7)'
          }}
          
          leftArrowText={'<'}

          rightArrowText={'>'}


          onAnimateNextPage={p => console.log(p)}>
            <View style={[this.state.size]} >
              <Image source={require('./../../assets/slider/1.jpg')} style={[this.state.size]}/>
              <Text style={{
                              position:'absolute',
                              top:10,
                              fontSize:20,
                              color:'white',
                              left:'30%',
                              backgroundColor:'rgba(0,0,0,0.7)'
                            }} >Headings Here...</Text>
            </View>
            
             <View style={[this.state.size]} >
              <Image source={require('./../../assets/slider/2.jpg')} style={[this.state.size]}/>
              <Text style={{
                              position:'absolute',
                              top:10,
                              fontSize:20,
                              color:'white',
                              left:'30%',
                              backgroundColor:'rgba(0,0,0,0.7)'
                            }} >Headings Here...</Text>
            </View>

             <View style={[this.state.size]} >
              <Image source={require('./../../assets/slider/3.jpg')} style={[this.state.size]}/>
              <Text style={{
                              position:'absolute',
                              top:10,
                              fontSize:20,
                              color:'white',
                              left:'30%',
                              backgroundColor:'rgba(0,0,0,0.7)'
                            }} >Headings Here...</Text>
            </View>

             <View style={[this.state.size]} >
              <Image source={require('./../../assets/slider/4.jpg')} style={[this.state.size]}/>
              <Text style={{
                              position:'absolute',
                              top:10,
                              fontSize:20,
                              color:'white',
                              left:'30%',
                              backgroundColor:'rgba(0,0,0,0.7)'
                            }} >Headings Here...</Text>
            </View>

        </Carousel>
      </View>
    );
  }
}