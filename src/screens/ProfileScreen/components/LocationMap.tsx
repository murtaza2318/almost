import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const LocationMap = () => {
  const katyCoordinates = {
    latitude: 29.7858,
    longitude: -95.8245,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.mapWrapper}>
      <Text style={styles.mapLabel}>Location: </Text>
      <Text style={styles.mapLabel2}> Katy, TX</Text>
      <MapView
        style={styles.map}
        region={katyCoordinates}
        scrollEnabled={false}
        zoomEnabled={false}
        rotateEnabled={false}
        pitchEnabled={false}
      >
        <Marker
          coordinate={{
            latitude: 29.7858,
            longitude: -95.8245,
          }}
          title="Katy, TX"
          description="Sitter's location"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapWrapper: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  mapLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 12,
    backgroundColor: '#f9f9f9',
    color: '#333',
    marginLeft:12
  },
  mapLabel2: {
    fontSize: 17,
    fontWeight: 'normal',
    padding: 12,
    backgroundColor: '#f9f9f9',
    color: '#333',
    
  },
  map: {
    width: '100%',
    height: 200,
  },
});

export default LocationMap;
