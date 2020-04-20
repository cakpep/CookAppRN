import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import * as Speech from 'expo-speech'

export default class AlphabetsScreen extends Component {
    state = {
        index: 0,
        alphabets: [
            'A','B','C','D','E', 'F', 'I', 'J', 'K', 'L', 'M', 'N'
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
        let rn = this
        rn.speakThisWord()
        setTimeout(function(){
            rn.giveMeWord('NEXT')
        }, 1000)
    }

    nextWord() {
        let rn = this
        rn.speakThisWord()
        setTimeout(function(){
            rn.giveMeWord('NEXT')
        }, 1000)
    }

    prevWord() {
        let rn = this
        rn.speakThisWord()
        setTimeout(function(){
            rn.giveMeWord('PREV')
        }, 1000)
    }

    render() {
        return (
            <View style={styles.itemContainer}>
                <Text style={{ marginTop: 50, fontSize: 25 }}>Alphabets!</Text>

                <TouchableOpacity onPress={() => this.speakThisWord()}>
                    <Text style={styles.textView}>{ this.currentWordToSpeech() }</Text>
                </TouchableOpacity>

                <View style={styles.itemContainer}>

                    <TouchableOpacity
                        style={styles.buttonSpeak}
                        onPress={() => this.speechMyWord()}>
                        <Text>Say again!</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonBack}
                        onPress={() => this.prevWord()}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonNext}
                        onPress={() => this.nextWord()}>
                        <Text>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        backgroundColor: '#DDDDDD',
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