import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {FC, useState} from 'react';
import {colors, fonts} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/RouteType';
import {StackScreenProps} from '@react-navigation/stack';

const Login: FC = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        source={{
          uri: 'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/myvglhti7yvfughb4oxz',
        }}
        style={{width: 100, height: 100, margin: 10}}
        resizeMode="contain"
      />
      <View style={{margin: 15}}>
        <Image
          source={require('../../assets/images/users.png')}
          style={{width: '100%', height: 150, margin: 10}}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: '#F8F8FF',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <View style={{margin: 20}}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              marginHorizontal: 10,
              fontFamily: fonts.fontFamily.bold,
            }}>
            Sign-in
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter email or username"
            onChangeText={handleUsernameChange}
            value={username}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={handlePasswordChange}
            value={password}
          />

          <Text
            style={{
              color: colors.darkBlue,
              textAlign: 'right',
              marginHorizontal: 10,
              fontFamily: fonts.fontFamily.bold,
            }}>
            Forgot Password?
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 50,
              marginHorizontal: 10,
            }}>
            <TouchableOpacity onPress={handleCheckboxChange}>
              <View
                style={[
                  styles.checkbox,
                  {backgroundColor: isChecked ? '#4169E1' : 'transparent'},
                ]}>
                {isChecked && <Text style={{color: 'white'}}>✓</Text>}
              </View>
            </TouchableOpacity>

            <Text
              style={{
                marginLeft: 10,
                fontFamily: fonts.fontFamily.medium,
                color: '#413D3D',
                fontSize: fonts.fontSize.sm,
              }}>
              By sigining up, you agree to our{' '}
              <Text style={{color: '#4169E1'}}>terms of service </Text> and
              <Text style={{color: '#4169E1'}}> privacy policy</Text>
            </Text>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: fonts.fontFamily.bold,
                fontSize: 18,
              }}>
              Sign-in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 55,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    margin: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#4169E1',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    height: 55,
    justifyContent: 'center',
  },
});

export default Login;
