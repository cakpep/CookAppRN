import React from 'react';
import { StyleSheet } from 'react-native';
import renderer from 'react-test-renderer';

import { MonoText } from '../../../src/components/common/StyledText';

test('render with styles', () => {
    
    const styles = StyleSheet.create({
        textHighlightContainer: {
            backgroundColor: '#fff',
            borderRadius: 3,
            padding: 4,
        }
    })

    const tree = renderer
        .create(<MonoText style = {styles.textHighlightContainer}> Test </MonoText>)
        .toJSON()
    expect(tree).toMatchSnapshot()
})

test('render with no styles', () => {
    const tree = renderer
        .create(<MonoText> No Styles </MonoText>)
        .toJSON()
    expect(tree).toMatchSnapshot()
})

test('it should be failed', () => {
    expect(1).toBe(2)
});
