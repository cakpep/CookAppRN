import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { connect } from 'react-redux'

import { increment, decrement } from '../../actions/CounterActions';

class Counter extends Component {

  onIncrement = () => {
    this.props.onIncrement()
  }

  onDecrement = () => {
    this.props.onDecrement()
  }

  render() {
    const { count } = this.props;
    return (
      <View style={ styles.container }>
        <Text style={ styles.textInfo }>Clicked: { count} times!</Text>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style = { styles.placeButton }
            onPress={this.onIncrement}>
              <Text>INCREMENT 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style = { styles.placeButton }
            onPress={this.onDecrement}>
              <Text>DECREMENT 1</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  placeButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  textInfo: {
    marginTop: 50,
    fontSize: 25 
  }
})

const mapStateToProps = state => {
  return {
    count: state.counterReducer.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => {
      dispatch(increment())
    },
    onDecrement: () => {
      dispatch(decrement())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
