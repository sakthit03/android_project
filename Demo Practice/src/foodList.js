import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { deleteFood } from './actions/food';
import Icon from 'react-native-vector-icons/FontAwesome';

class FoodList extends Component {

  static navigationOptions = {
    title: 'Food List',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#845cc3',
    },
  };

  render() {
    /*return (
      <FlatList style={styles.listContainer}
        data={this.props.foods}
        keyExtractor={(item, index) => item.key.toString()}
        renderItem={
          (data) =>
            <ListItem
              title={data.item.name}
              bottomDivider
              rightIcon={<Icon
                name='delete'
                size={36}

                onPress={() => this.props.delete(data.item.key)} />
              }
            />
        }
      />
    );*/
    return(
      <View>
       <Icon name='users' />

      {/*<FlatList style={styles.listContainer}
          data={this.props.foods}
          keyExtractor={(item, index) => item.key.toString()}
          renderItem={
            (data) =>
              <View>
                <Text>{data.item.name} <Icon name='users' style={{width:20,height:20,color:'red'}} /> </Text>
                
              </View>
            
          }
       />*/}
       </View>

    );
  }
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#dce2ff',
    padding: 16
  },
  listText: {
    fontSize: 30
  },
});

const mapStateToProps = (state) => {
  console.log(state);
  return {
    foods: state.foodReducer.foodList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (key) => dispatch(deleteFood(key))
  }
}


const foodList = connect(state => ({ value: state.count }))(FoodList);
export default foodList;