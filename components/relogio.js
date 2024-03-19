import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDayPress = day => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
        }}
      />
      {selectedDate && (
        <Text style={styles.selectedDateText}>Data selecionada: {selectedDate}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  selectedDateText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CalendarComponent;