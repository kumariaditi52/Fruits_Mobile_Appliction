import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const SrviceScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Our Services</Text>
      <Text style={styles.paragraph}>
        We offer a variety of services to ensure you get the freshest fruits with the best experience.
      </Text>
      
      {/* Services List */}
      <View style={styles.servicesList}>
        <View style={styles.serviceItem}>
          <Text style={styles.serviceName}>Express Delivery</Text>
          <Text style={styles.serviceDescription}>Get your fruits delivered within 2 hours in select areas.</Text>
        </View>
        
        <View style={styles.serviceItem}>
          <Text style={styles.serviceName}>Fruit Subscription</Text>
          <Text style={styles.serviceDescription}>Weekly or monthly fruit baskets delivered to your doorstep.</Text>
        </View>
        
        <View style={styles.serviceItem}>
          <Text style={styles.serviceName}>Custom Gift Baskets</Text>
          <Text style={styles.serviceDescription}>Create personalized fruit gift baskets for any occasion.</Text>
        </View>
        
        <View style={styles.serviceItem}>
          <Text style={styles.serviceName}>Fruit Quality Guarantee</Text>
          <Text style={styles.serviceDescription}>Not satisfied? We'll replace or refund your purchase.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 15,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  servicesList: {
    marginTop: 10,
  },
  serviceItem: {
    backgroundColor: '#e8f5e9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});

export default SrviceScreen;
