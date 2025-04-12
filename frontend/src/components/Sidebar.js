import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Animated,
  Dimensions,
  Alert,
  ScrollView,
  SafeAreaView
} from 'react-native';

const { width } = Dimensions.get('window');
const SIDEBAR_WIDTH = width * 0.7;

const Sidebar = ({ 
  slideAnim, 
  currentScreen, 
  handleNavigation, 
  toggleSidebar 
}) => {

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "Logout", 
          onPress: () => {
            toggleSidebar();
            handleNavigation('Login');
            console.log("User logged out");
          },
          style: "destructive"
        }
      ]
    );
  };

  return (
    <Animated.View 
      style={[
        styles.sidebar,
        { transform: [{ translateX: slideAnim }] }
      ]}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          
          {/* User Profile */}
          <View style={styles.userSection}>
            <View style={styles.profileImageContainer}>
              <Text style={styles.profileInitial}>U</Text>
            </View>
            <Text style={styles.userName}>User Name</Text>
            <Text style={styles.userEmail}>user@example.com</Text>
          </View>

          <View style={styles.sidebarDivider} />

          {/* Navigation Links */}
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
            <Text style={styles.sidebarItemText}>🛠️ Services</Text>
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

          <TouchableOpacity 
            style={[styles.sidebarItem, currentScreen === 'Menu' && styles.activeSidebarItem]} 
            onPress={() => handleNavigation('Menu')}
          >
            <Text style={styles.sidebarItemText}>☰ Menu</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.sidebarItem, currentScreen === 'Cart' && styles.activeSidebarItem]} 
            onPress={() => handleNavigation('Cart')}
          >
            <Text style={styles.sidebarItemText}>🛒 Cart</Text>
          </TouchableOpacity>

          <View style={styles.sidebarDivider} />

          {/* Extra Items */}
          <TouchableOpacity 
            style={[styles.sidebarItem, currentScreen === 'Settings' && styles.activeSidebarItem]} 
            onPress={() => handleNavigation('Settings')}
          >
            <Text style={styles.sidebarItemText}>⚙️ Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.sidebarItem, currentScreen === 'Support' && styles.activeSidebarItem]} 
            onPress={() => handleNavigation('Support')}
          >
            <Text style={styles.sidebarItemText}>❓ Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.sidebarItem, currentScreen === 'About' && styles.activeSidebarItem]} 
            onPress={() => handleNavigation('About')}
          >
            <Text style={styles.sidebarItemText}>ℹ️ About</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.sidebarItem, currentScreen === 'Notifications' && styles.activeSidebarItem]} 
            onPress={() => handleNavigation('Notifications')}
          >
            <Text style={styles.sidebarItemText}>🔔 Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.sidebarItem, currentScreen === 'Orders' && styles.activeSidebarItem]} 
            onPress={() => handleNavigation('Orders')}
          >
            <Text style={styles.sidebarItemText}>📦 My Orders</Text>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity 
            style={[styles.sidebarItem, styles.logoutItem]} 
            onPress={handleLogout}
          >
            <Text style={[styles.sidebarItemText, styles.logoutText]}>🚪 Logout</Text>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
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
  scrollContainer: {
    paddingBottom: 30,
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
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 15,
  },
  logoutText: {
    color: '#ff6b6b',
    fontWeight: 'bold',
  }
});

export default Sidebar;
