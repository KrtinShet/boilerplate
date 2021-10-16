import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {addOne, subtractOne} from '../../Store/actions/counterAction';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {value} = useSelector(state => state.counter);
  const subHandler = () => {
    dispatch(subtractOne());
  };
  const addHandler = () => {
    dispatch(addOne());
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={subHandler}>
        <Text style={styles.btnContent}>-</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{value}</Text>
      <TouchableOpacity style={styles.btn} onPress={addHandler}>
        <Text style={styles.btnContent}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: '#000',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 85,
    height: 45,
    backgroundColor: 'orange',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContent: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
