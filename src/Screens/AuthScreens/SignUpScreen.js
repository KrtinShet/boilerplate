import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {signup} from '../../Store/actions/authAction';
import {useDispatch, useSelector} from 'react-redux';
import validator from 'validator';
import {Loader} from '../../Components';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const {loading} = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const onPressHandler = () => {
    if (!validator.isEmail(email)) {
      setEmailError(true);
      setEmailErrorText('Invalid Email');
    } else if (!validator.isStrongPassword(password)) {
      setPasswordError(true);
      setPasswordErrorText('enter strong password');
    } else {
      if (!emailError && !passwordError) {
        dispatch(signup(email, password));
      }
    }
  };

  return (
    <TouchableWithoutFeedback
      style={{flex: 1}}
      onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Loader visible={loading} />
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={text => {
              if (emailError) setEmailError(false);
              setEmail(text);
            }}
          />
        </View>
        {emailError && (
          <View style={{marginTop: 5, width: '70%'}}>
            <Text style={{color: 'red', fontWeight: 'bold'}}>
              {emailErrorText}
            </Text>
          </View>
        )}
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={text => {
              if (passwordError) setPasswordError(false);
              setPassword(text);
            }}
          />
        </View>
        {passwordError && (
          <View style={{marginTop: 5, width: '70%'}}>
            <Text style={{color: 'red', fontWeight: 'bold'}}>
              {passwordErrorText}
            </Text>
          </View>
        )}
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={onPressHandler}>
          <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
    marginTop: 23,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});
