import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../theme';
import {Button} from 'react-native-paper';

const Queries = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#F2F3F7',
          padding: 15,
          borderBottomRightRadius: 25,
          borderBottomLeftRadius: 25,
        }}>
        <TextInput
          placeholder="Ask your queries here..
        A mentor will respond to it in 24 Hrs."
          style={styles.input}
          multiline
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 20,
          }}>
          <Button
            mode="contained"
            labelStyle={{fontFamily: fonts.fontFamily.bold, fontSize: 14}}
            style={{borderRadius: 10, backgroundColor: colors.darkBlue}}>
            Submit Query
          </Button>
        </View>
      </View>

      <View style={{padding: 15, marginTop: 20}}>
        <Text
          style={{
            fontFamily: fonts.fontFamily.semibold,
            fontSize: fonts.fontSize.base,
          }}>
          Asked Queries
        </Text>

        <View
          style={{
            backgroundColor: '#F7F8FC',
            padding: 10,
            borderRadius: 15,
            marginTop: 10,
          }}>
          <Text style={{fontFamily: fonts.fontFamily.regular}}>
            Wanted to initiate discussion on the book which was an optional
            reading in this module.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  input: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 15,
    minHeight: 100,
  },
});

export default Queries;
