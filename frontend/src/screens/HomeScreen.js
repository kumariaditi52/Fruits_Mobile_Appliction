


import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const carouselData = [
  { id: '1', title: 'Fresh Seasonal Fruits', description: 'Up to 30% off on all seasonal fruits' },
  { id: '2', title: 'Organic Collection', description: 'Certified organic fruits for healthy living' },
  { id: '3', title: 'Free Delivery', description: 'On orders above $30' },
];

const fruitsData = [
  { id: '1', name: 'Apple', icon: 'fruit-apple' },
  { id: '2', name: 'Banana', icon: 'fruit-banana' },
  { id: '3', name: 'Orange', icon: 'fruit-citrus' },
  { id: '4', name: 'Mango', icon: 'fruit-citrus' },
  { id: '5', name: 'Strawberry', icon: 'fruit-berries' },
  { id: '6', name: 'Pineapple', icon: 'pine-tree' },
  { id: '7', name: 'Watermelon', icon: 'fruit-watermelon' },
  { id: '8', name: 'Grapes', icon: 'fruit-grapes' },
  { id: '9', name: 'Kiwi', icon: 'fruit-kiwi' },
  { id: '10', name: 'Peach', icon: 'fruit-peach' },
];

const HomeScreen = () => {
  const [activeCarouselIndex, setActiveCarouselIndex] = React.useState(0);

  const renderCarouselItem = ({ item, index }) => (
    <View style={styles.carouselItem}>
      <Text style={styles.carouselTitle}>{item.title}</Text>
      <Text style={styles.carouselDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.shopNowButton}>
        <Text style={styles.shopNowButtonText}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );

  const renderFruitItem = ({ item }) => (
    <TouchableOpacity style={styles.fruitItem}>
      <View style={styles.iconContainer}>
        <Icon name={item.icon} size={40} color="#2e7d32" />
      </View>
      <Text style={styles.fruitName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Icon name="magnify" size={24} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for fruits..."
          placeholderTextColor="#999"
        />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Welcome to Fruits Mobile Application!</Text>
        
        {/* Carousel Section */}
        <View style={styles.carouselContainer}>
          <FlatList
            data={carouselData}
            renderItem={renderCarouselItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) => {
              const newIndex = Math.floor(event.nativeEvent.contentOffset.x / width);
              setActiveCarouselIndex(newIndex);
            }}
            keyExtractor={item => item.id}
          />
          <View style={styles.paginationContainer}>
            {carouselData.map((_, index) => (
              <View
                key={index}
                style={[styles.paginationDot, { opacity: index === activeCarouselIndex ? 1 : 0.5 }]}
              />
            ))}
          </View>
        </View>
        
        {/* Popular Fruits Section */}
        <View style={styles.popularSection}>
          <Text style={styles.sectionTitle}>Popular Fruits</Text>
          <FlatList
            data={fruitsData}
            renderItem={renderFruitItem}
            keyExtractor={item => item.id}
            numColumns={2}
            scrollEnabled={false}
          />
        </View>
        
        {/* Seasonal Fruits Section */}
        <View style={styles.seasonalSection}>
          <Text style={styles.sectionTitle}>Seasonal Picks</Text>
          <Text style={styles.paragraph}>
            Check out our seasonal fruits that are currently at their peak freshness and flavor!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  contentContainer: {
    padding: 15,
  },
  title: {
    fontSize: 22,
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
  carouselContainer: {
    height: 180,
    marginVertical: 15,
  },
  carouselItem: {
    width: width - 30,
    height: 150,
    backgroundColor: '#e8f5e9',
    borderRadius: 15,
    padding: 20,
    justifyContent: 'center',
  },
  carouselTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 8,
  },
  carouselDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  shopNowButton: {
    backgroundColor: '#2e7d32',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  shopNowButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2e7d32',
    marginHorizontal: 5,
  },
  popularSection: {
    marginVertical: 15,
  },
  seasonalSection: {
    marginVertical: 15,
    backgroundColor: '#e8f5e9',
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 15,
  },
  fruitItem: {
    width: (width - 50) / 2,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    elevation: 2,
    padding: 10,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#e8f5e9',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  fruitName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;

