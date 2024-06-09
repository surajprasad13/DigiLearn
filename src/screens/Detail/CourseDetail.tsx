import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {BackTitle, Header, Toptabbar, VideoPlayer} from '../../components';
import {appStyles, colors, fonts, Icon} from '../../theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Queries from './Queries';
import Notes from './Notes';

const Tab = createMaterialTopTabNavigator();

const CourseDetail = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />

      <BackTitle
        title="Back"
        containerStyle={{
          margin: 10,
        }}
      />

      <View style={[appStyles.rowBetween, {padding: 10}]}>
        <Text
          style={{
            fontFamily: fonts.fontFamily.semibold,
            fontSize: fonts.fontSize.base,
          }}>
          Digital Shopper Journey
        </Text>

        <View style={[appStyles.rowBetween, {gap: 10}]}>
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

      <VideoPlayer
        containerStyle={{
          marginTop: 5,
        }}
      />

      <View
        style={[
          appStyles.rowBetween,
          {backgroundColor: '#E5EFFA', padding: 15, marginVertical: 10},
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

      <Tab.Navigator
        style={{marginTop: 20}}
        tabBar={props => <Toptabbar {...props} />}>
        <Tab.Screen name="Queries" component={Queries} />
        <Tab.Screen name="Notes" component={Notes} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default CourseDetail;
