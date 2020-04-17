
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';

import { addPlace } from '../../actions/PlaceActions';
import ListItem from './ListItem';
import TotalItem from './TotalItem';

class PlaceScreen extends Component {
    state = {
      placeName: ''
    }

    placeSubmitHandler = () => {
      if(this.state.placeName.trim() === '') {
        return
      }
      this.props.add(this.state.placeName)
      this.state.placeName = ""
    }

    placeNameChangeHandler = (value) => {
      this.setState({
        placeName: value
      })
    }

    placesOutput = () => {
      return (
       <FlatList style = { styles.listContainer }
         data = { this.props.places }
         keyExtractor={(item, index) => index.toString()}
         renderItem = { info => (
           <ListItem 
             placeName={ info.item.value }
           />
         )}
       />
     )
   }

    render() {
      return (
        <View style={ styles.container }>
          <TotalItem
            items = {this.props.places}
            />
          <View style = { styles.inputContainer }>
            <TextInput
                placeholder = "Input Place Name"
                underlineColorAndroid = { '#D3D3D3' }
                style = { styles.placeInput }
                value = { this.state.placeName }
                autoFocus = { true }
                onChangeText = { this.placeNameChangeHandler }
              >
            </TextInput>

            <Button title = 'Add' 
                style = { styles.placeButton }
                onPress = { this.placeSubmitHandler }
            />
          </View>
          <View style = { styles.listContainer }>
            { this.placesOutput() }
          </View>
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
  inputContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '100%',
    height: 40,
    paddingLeft: 6,
    paddingRight: 6
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%',
    padding: 10
  }
})

const mapStateToProps = state => {
  return {
    places: state.placesReducer.places
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceScreen)
