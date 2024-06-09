import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {BackTitle, Header, VideoPlayer} from '../../components';
import {appStyles, colors, fonts, Icon} from '../../theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Queries from './Queries';
import Notes from './Notes';

const Tab = createMaterialTopTabNavigator();

const CourseDetail = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />

      <BackTitle title="Back" />

      <View style={[appStyles.rowBetween]}>
        <Text style={{fontFamily: fonts.fontFamily.medium}}>
          Digital Shopper Journey
        </Text>

        <View style={[appStyles.rowBetween, {gap: 10, marginTop: 20}]}>
          <View style={[appStyles.rowCenter]}>
            <Icon.Feather
              name="chevron-left"
              size={20}
              color={colors.darkBlue}
            />
            <Text
              style={{
                color: colors.darkBlue,
                fontSize: fonts.fontSize.xs,
                fontFamily: fonts.fontFamily.semibold,
              }}>
              Previous
            </Text>
          </View>

          <View style={[appStyles.rowCenter]}>
            <Text
              style={{
                color: colors.darkBlue,
                fontSize: fonts.fontSize.xs,
                fontFamily: fonts.fontFamily.semibold,
              }}>
              Next
            </Text>
            <Icon.Feather
              name="chevron-right"
              size={20}
              color={colors.darkBlue}
            />
          </View>
          {/*  */}
        </View>
      </View>

      {/*  */}

      <VideoPlayer />

      <View
        style={[
          appStyles.rowBetween,
          {backgroundColor: '#E5EFFA', padding: 15},
        ]}>
        <View style={[appStyles.rowCenter, {gap: 15}]}>
          <Icon.Feather name="menu" size={20} />
          <Text
            style={{
              color: colors.darkBlue,
              fontFamily: fonts.fontFamily.medium,
            }}>
            Content List
          </Text>
        </View>
        <Icon.Feather name="chevron-down" size={20} />
      </View>

      <Tab.Navigator>
        <Tab.Screen name="Queries" component={Queries} />
        <Tab.Screen name="Notes" component={Notes} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default CourseDetail;
