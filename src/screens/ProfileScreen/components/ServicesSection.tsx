import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Calendar } from 'react-native-calendars';

const SERVICES = [
  {
    type: 'House Sitting',
    icon: '🏠',
    price: 40,
    unit: 'per night',
    details: [
      { label: 'Holiday Rate', value: 78, unit: 'per night' },
      { label: 'Additional Dog Rate', value: 10, unit: 'per Dog per night' },
      { label: 'Puppy Rate', value: 65, unit: 'per night' },
      { label: 'Cat Care', value: 50, unit: 'per night' },
      { label: 'Additional Cat', value: 10, unit: 'per night rate' },
      { label: 'Extended Care', value: 30, unit: 'per night rate' },
    ],
    icons: ['Cats', '0-15', '16-40', '41-100', '101+'],
  },
  {
    type: 'Drop-In Visits',
    icon: '🐾',
    price: 20,
    unit: 'per visit',
    details: [
      { label: '60 minute rate', value: 30, unit: 'per visit' },
      { label: 'Holiday Rate', value: 30, unit: 'per night' },
      { label: 'Additional Dog Rate', value: 5, unit: 'per Dog per visit' },
      { label: 'Puppy Rate', value: 20, unit: 'per visit' },
      { label: 'Cat Care', value: 20, unit: 'per visit' },
      { label: 'Additional Cat', value: 5, unit: 'per visit' },
      { label: 'Booking of 5 days or more', value: 20, unit: 'per visit' },
      { label: 'Bathing / Grooming', value: 20, unit: 'each' },
    ],
    icons: ['Cats', '0-15', '16-40', '41-100', '101+'],
  },
  {
    type: 'Dog Walking',
    icon: '🐕',
    price: 15,
    unit: 'per walk',
    details: [
      { label: '60 minute rate', value: 20, unit: 'per walk' },
      { label: 'Holiday Rate', value: 19, unit: 'per walk' },
      { label: 'Additional Dog Rate', value: 5, unit: 'per dog per walk' },
      { label: 'Puppy Rate', value: 10, unit: 'per walk' },
    ],
    icons: ['0-15', '16-40', '41-100', '101+'],
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState('House Sitting');
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={styles.container}>
      {SERVICES.map((service, idx) => (
        <View key={service.type} style={styles.serviceBlock}>
          <View style={styles.serviceHeader}>
            <Text style={styles.serviceIcon}>{service.icon}</Text>
            <Text style={styles.serviceTitle}>{service.type}</Text>
            <Text style={styles.servicePrice}>${service.price}</Text>
            <Text style={styles.serviceUnit}>{service.unit}</Text>
          </View>
          {service.details.map((detail, i) => (
            <View key={i} style={styles.detailRow}>
              <Text style={styles.detailLabel}>{detail.label}</Text>
              <Text style={styles.detailValue}>${detail.value} <Text style={styles.detailUnit}>{detail.unit}</Text></Text>
            </View>
          ))}
          <View style={styles.iconRow}>
            {service.icons.map((icon, i) => (
              <Text key={i} style={styles.animalIcon}>{icon}</Text>
            ))}
          </View>
        </View>
      ))}
      <View style={styles.calendarSection}>
        <Text style={styles.calendarLabel}>Calendar</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedService}
            onValueChange={setSelectedService}
            style={styles.picker}
          >
            {SERVICES.map((service) => (
              <Picker.Item key={service.type} label={service.type} value={service.type} />
            ))}
          </Picker>
        </View>
        <View style={styles.calendar}>
          <Calendar
            onDayPress={(day: { dateString: string }) => setSelectedDate(day.dateString)}
            markedDates={selectedDate ? { [selectedDate]: { selected: true, selectedColor: '#73865C' } } : {}}
            style={{ borderRadius: 8 }}
          />
          <Text style={styles.calendarDone}>Done</Text>
        </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  serviceBlock: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 16,
  },
  serviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceIcon: {
    fontSize: 22,
    marginRight: 8,
  },
  serviceTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
  },
  servicePrice: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#73865C',
    marginLeft: 8,
  },
  serviceUnit: {
    fontSize: 13,
    color: '#888',
    marginLeft: 4,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    marginLeft: 24,
  },
  detailLabel: {
    color: '#444',
    fontSize: 14,
  },
  detailValue: {
    color: '#222',
    fontSize: 14,
  },
  detailUnit: {
    color: '#888',
    fontSize: 12,
  },
  iconRow: {
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 24,
    marginBottom: 8,
  },
  animalIcon: {
    fontSize: 18,
    marginRight: 12,
    color: '#222',
  },
  calendarSection: {
    marginTop: 16,
    backgroundColor: '#fafaf8',
    borderRadius: 12,
    padding: 12,
  },
  calendarLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  pickerWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  picker: {
    height: 40,
    width: '100%',
  },
  calendar: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
  },
  calendarDone: {
    textAlign: 'right',
    color: '#888',
    marginTop: 4,
    fontSize: 14,
  },
});

export default ServicesSection; 