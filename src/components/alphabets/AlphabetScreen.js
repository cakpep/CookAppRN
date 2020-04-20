import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import * as Speech from 'expo-speech'
import Colors from '../../constants/Colors'

export default class AlphabetsScreen extends Component {
    state = {
        index: 0,
        speaking: false,
        alphabets: [
            'A','B','C','D','E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N',
            'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
        ]
    }

    currentWordToSpeech() {
        let index = this.state.index
        return this.state.alphabets[index] ?? 'A'
    }

    giveMeWord(data) {
        let index = this.state.index
        let alphabets = this.state.alphabets
        let actualLength = alphabets.length - 1

        if (data === 'NEXT') {
            if  (index >= actualLength) {
                index = 0
            } else {
                index++
            }
        } else if (data === 'PREV') {
            if  (index === 0) {
                index = actualLength
            } else {
                index--
            }
        }
        this.setState({ index:  index})
    }

    speakThisWord() {
        let thingToSay = this.currentWordToSpeech()
        Speech.speak(thingToSay)
    }

    speechMyWord() {
        this.setState({ speaking : true });
        this.speakThisWord()
        setTimeout(function(){
            this.giveMeWord('NEXT')
            this.setState({ speaking : false });
        }.bind(this), 1000)
    }

    nextWord() {
        this.setState({ speaking : true });
        this.speakThisWord()
        setTimeout(function(){
            this.giveMeWord('NEXT')
            this.setState({ speaking : false });
        }.bind(this), 1000)
    }

    prevWord() {
        this.setState({ speaking : true });
        this.speakThisWord()
        setTimeout(function(){
            this.giveMeWord('PREV')
            this.setState({ speaking : false });
        }.bind(this), 1000)
    }

    render() {
        return (
            <ScrollView
                noSpacer = { true }
                noScroll = { true }
                style = {styles.container}
            >
                <View style={styles.itemContainer}>
                    <Text style = {{ marginTop: 50, fontSize: 25 }}>Alphabets!</Text>

                    <TouchableOpacity onPress={() => this.speakThisWord()}>
                        <Text style= {styles.textView}>{ this.currentWordToSpeech() }</Text>
                    </TouchableOpacity>

                    <View style={styles.itemContainer}>

                        <TouchableOpacity
                            style = {styles.buttonSpeak}
                            onPress = {() => this.speakThisWord()}
                            >
                            <Text>Say again!</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            disabled = { this.state.speaking }
                            style = {styles.buttonBack}
                            onPress = {() => this.prevWord()}
                            >
                            <Text>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            disabled = { this.state.speaking }
                            style = {styles.buttonNext}
                            onPress = {() => this.nextWord()}
                            >
                            <Text>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textView: {
        fontWeight: "bold",
        backgroundColor: '#DDDDDD',
        padding: 100,
        marginTop: 50,
        fontSize: 50
    },
    buttonSpeak: {
        alignItems: 'center',
        backgroundColor: Colors.noticeText,
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    buttonNext: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16
    },
    buttonBack: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16
    },
})