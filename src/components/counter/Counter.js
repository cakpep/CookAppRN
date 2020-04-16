import React, { Component } from 'react'
import { StyleSheet, Button, View, Text } from "react-native"
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
      <View>
        <Text>Clicked: { count} times</Text>
        <Button title = '+'
        style = { styles.placeButton }
          onPress={this.onIncrement}
          />
        <Button title = '-'
          style = { styles.placeButton }
          onPress={this.onDecrement}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  placeButton: {
    width: '30%'
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
