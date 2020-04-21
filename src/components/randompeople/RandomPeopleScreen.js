import React from "react";
import { ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import People from './People'


export default class Home extends React.Component {
  state = {
    users: [],
    loading: true
  };

  UNSAFE_componentWillMount () {
    this.getUsers();
  }

  async getUsers() {
    const res = await fetch("https://randomuser.me/api/?results=20");
    const { results } = await res.json();
    this.setState({ users: [...results], loading: false });
    console.log(this.state.users)
  }

  displayContent = () => {
    if (this.state.loading) {
      return <ActivityIndicator
                style={[styles.centering, styles.gray]}
                color="#ff8179"
                size="large"
              />
    } else {
      return <People data = {this.state.users} />
    }
  }

  render() {
    return (
      <ScrollView
        noSpacer = {true}
        noScroll = {true}
        style = {styles.container}
      >
        {this.displayContent()}
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke"
  },
  centering: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    height: '100vh'
  },
});
