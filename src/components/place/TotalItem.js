import React from 'react';
import { StyleSheet, View } from 'react-native';

import { MonoText } from '../common/StyledText';

const TotalItem = (props) => {
    console.log(props.items)
    return (
        <View style={[styles.textHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.textHighlightContainer}>
                Number of item : {props.items.length}
            </MonoText>
        </View>
    );
}

const styles = StyleSheet.create({
    textHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        padding: 4,
    },
    navigationFilename: {
        marginTop: 5,
    }
});

export default TotalItem;
