import React, { useState } from 'react';
import { Button, Platform, StyleSheet, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function App() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [local, setLocal] = useState('en-US');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setDate(currentDate);
    setShow(Platform.OS === 'ios');
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const changeLocal = () => {
    setLocal(local === 'en-US' ? 'th-TH' : 'en-US');
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.container}>
      <View>
        <Button onPress={changeLocal} title="Change local"/>
      </View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!"/>
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!"/>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          locale={local}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 100,
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
