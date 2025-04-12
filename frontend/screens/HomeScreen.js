import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = () => {
  // Sample fruit data with emoji icons instead of images
  const fruits = [
    { id: 1, name: 'Apple', icon: '🍎', price: '$1.99' },
    { id: 2, name: 'Banana', icon: '🍌', price: '$0.99' },
    { id: 3, name: 'Orange', icon: '🍊', price: '$1.49' },
    { id: 4, name: 'Strawberry', icon: '🍓', price: '$2.99' },
    { id: 5, name: 'Watermelon', icon: '🍉', price: '$3.49' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Fresh Fruits</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartButtonText}>🛒</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Featured Fruits</Text>
        
        <View style={styles.fruitGrid}>
          {fruits.map((fruit) => (
            <TouchableOpacity key={fruit.id} style={styles.fruitCard}>
              <View style={styles.iconContainer}>
                <Text style={styles.fruitIcon}>{fruit.icon}</Text>
              </View>
              <Text style={styles.fruitName}>{fruit.name}</Text>
              <Text style={styles.fruitPrice}>{fruit.price}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>💬</Text>
          <Text style={styles.navText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>⚙️</Text>
          <Text style={styles.navText}>Services</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#4CAF50',
  },
  menuButton: {
    padding: 8,
  },
  menuButtonText: {
    fontSize: 24,
    color: 'white',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  cartButton: {
    padding: 8,
  },
  cartButtonText: {
    fontSize: 24,
  },
  scrollView: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
    color: '#333',
  },
  fruitGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 8,
    paddingBottom: 80, // Add padding to ensure content is visible above bottom nav
  },
  fruitCard: {
    width: '45%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    height: 80,
  },
  fruitIcon: {
    fontSize: 60,
  },
  fruitName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  fruitPrice: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginVertical: 4,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 8,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  // Bottom Navigation Bar Styles
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: '#333',
  },
});

export default HomeScreen;
