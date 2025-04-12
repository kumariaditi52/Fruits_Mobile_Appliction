import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  Animated, 
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SrviceScreen from './src/screens/SrviceScreen';
import ChatScreen from './src/screens/ChatScreen';
import ProfileScreen from './src/screens/ProfileScreen ';
// Import icons from react-native-vector-icons
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const SIDEBAR_WIDTH = width * 0.7;

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;

  const toggleSidebar = () => {
    if (sidebarOpen) {
      // Close sidebar
      Animated.timing(slideAnim, {
        toValue: -SIDEBAR_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setSidebarOpen(false));
    } else {
      // Open sidebar
      setSidebarOpen(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen />;
      case 'Services':
        return <SrviceScreen />;
      case 'Chat':
        return <ChatScreen />;
      case 'Profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  const handleNavigation = (screen) => {
    setCurrentScreen(screen);
    toggleSidebar(); // Close sidebar after navigation
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with menu and cart */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleSidebar}>
          <Text style={styles.emojiIcon}>☰</Text>
        </TouchableOpacity>
                
        <Text style={styles.headerTitle}>Fruits App</Text>
                
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.emojiIcon}>🛒</Text>
        </TouchableOpacity>
      </View>
          
      {/* Main Content */}
      <View style={styles.mainContent}>
        {renderScreen()}
      </View>
           
      {/* Bottom Tab Navigation - Icons Only */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity 
          style={styles.tabItem} 
          onPress={() => setCurrentScreen('Home')}
        >
          <Text style={[
            styles.emojiTabIcon,
            {color: currentScreen === 'Home' ? '#ff6b6b' : '#888'}
          ]}>
            🏠
          </Text>
        </TouchableOpacity>
                
        <TouchableOpacity 
  style={styles.tabItem} 
  onPress={() => setCurrentScreen('Services')}
>
  <Text style={[
    styles.emojiTabIcon,
    {color: currentScreen === 'Services' ? '#ff6b6b' : '#888'}
  ]}>
    🧩
  </Text>
</TouchableOpacity>

                
        <TouchableOpacity 
          style={styles.tabItem} 
          onPress={() => setCurrentScreen('Chat')}
        >
          <Text style={[
            styles.emojiTabIcon,
            {color: currentScreen === 'Chat' ? '#ff6b6b' : '#888'}
          ]}>
            💬
          </Text>
        </TouchableOpacity>
                
        <TouchableOpacity 
          style={styles.tabItem} 
          onPress={() => setCurrentScreen('Profile')}
        >
          <Text style={[
            styles.emojiTabIcon,
            {color: currentScreen === 'Profile' ? '#ff6b6b' : '#888'}
          ]}>
            👤
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <TouchableWithoutFeedback onPress={toggleSidebar}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      {/* Sidebar */}
      <Animated.View 
        style={[
          styles.sidebar,
          { transform: [{ translateX: slideAnim }] }
        ]}
      >
        {/* User Profile Section */}
        <View style={styles.userSection}>
          <View style={styles.profileImageContainer}>
            <Text style={styles.profileInitial}>U</Text>
          </View>
          <Text style={styles.userName}>User Name</Text>
          <Text style={styles.userEmail}>user@example.com</Text>
        </View>
        
        <View style={styles.sidebarDivider} />
        
        {/* Navigation Items */}
        <TouchableOpacity 
          style={[styles.sidebarItem, currentScreen === 'Home' && styles.activeSidebarItem]} 
          onPress={() => handleNavigation('Home')}
        >
          <Text style={styles.sidebarItemText}>🏠 Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.sidebarItem, currentScreen === 'Services' && styles.activeSidebarItem]} 
          onPress={() => handleNavigation('Services')}
        >
          <View style={styles.sidebarItemContent}>
            <Ionicons name="grid-outline" size={20} color="#333" style={styles.sidebarItemIcon} />
            <Text style={styles.sidebarItemText}> Services</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.sidebarItem, currentScreen === 'Chat' && styles.activeSidebarItem]} 
          onPress={() => handleNavigation('Chat')}
        >
          <Text style={styles.sidebarItemText}>💬 Chat</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.sidebarItem, currentScreen === 'Profile' && styles.activeSidebarItem]} 
          onPress={() => handleNavigation('Profile')}
        >
          <Text style={styles.sidebarItemText}>👤 Profile</Text>
        </TouchableOpacity>

        <View style={styles.sidebarDivider} />
        
        {/* Additional Menu Items */}
      
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#ff6b6b',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 5,
  },
  cartButton: {
    padding: 5,
  },
  emojiIcon: {
    fontSize: 24,
    color: 'white',
  },
  mainContent: {
    flex: 1,
  },
  bottomTabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    height: 55,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 8,
  },
  emojiTabIcon: {
    fontSize: 26,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: SIDEBAR_WIDTH,
    height: '100%',
    backgroundColor: 'white',
    zIndex: 2,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  userSection: {
    padding: 20,
    backgroundColor: '#ff6b6b',
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileInitial: {
    fontSize: 30,
    color: '#ff6b6b',
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  sidebarItem: {
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  sidebarItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sidebarItemIcon: {
    marginRight: 10,
  },
  activeSidebarItem: {
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
  },
  sidebarItemText: {
    fontSize: 16,
    color: '#333',
  },
  sidebarDivider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  logoutItem: {
    marginTop: 'auto',
    marginBottom: 30,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 15,
  },
  logoutText: {
    color: '#ff6b6b',
    fontWeight: 'bold',
  }
});

export default App;
