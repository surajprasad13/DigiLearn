import React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import {BackTitle, Header} from '../../components';
import {colors, fonts, Icon} from '../../theme';
import InProgress from './components/InProgress';
import Completed from './components/Completed';
import UpComing from './components/Upcoming';

const Home = (): React.JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F8F8FF'}}>
      <Header />

      <ScrollView
        nestedScrollEnabled
        style={{flex: 1, backgroundColor: colors.background}}>
        <BackTitle
          title="Back to Dashboard"
          containerStyle={{
            margin: 10,
          }}
        />

        <View style={{flexDirection: 'row', marginTop: 16, margin: 10}}>
          <View
            style={{
              backgroundColor: '#D8EAFF',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontFamily: fonts.fontFamily.bold,
                fontSize: fonts.fontSize.xs,
                padding: 7,
                paddingHorizontal: 14,
                width: 'auto',
                color: colors.darkBlue,
              }}>
              In Progress
            </Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 10,
            gap: 10,
          }}>
          {[0, 1, 2, 3].map((_, index) => (
            <InProgress key={index.toString()} />
          ))}
        </ScrollView>

        <View style={{margin: 10, marginTop: 20}}>
          <Text style={{fontFamily: fonts.fontFamily.semibold, fontSize: 16}}>
            Recently Completed
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 10,
            gap: 10,
          }}>
          {[0, 1, 2, 3].map((_, index) => (
            <Completed key={index.toString()} />
          ))}
        </ScrollView>

        <View
          style={{
            padding: 10,
            backgroundColor: 'white',
            marginTop: 24,
          }}>
          <View
            style={{
              margin: 10,
            }}>
            <Text style={{fontFamily: fonts.fontFamily.semibold, fontSize: 16}}>
              Upcominng Modules
            </Text>
          </View>

          <View style={{gap: 10}}>
            {[0, 1, 2, 3, 4, 5].map((_, index) => (
              <UpComing
                locked={index !== 0 ? true : false}
                key={index.toString()}
              />
            ))}
          </View>
        </View>

        {/*  */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {},
});

export default Home;
