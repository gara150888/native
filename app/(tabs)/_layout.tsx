import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TAB = [
  { name: 'index', title: 'Home', icon: 'home' },
  { name: 'subscriptions', title: 'Subscriptions', icon: 'receipt-long' },
  { name: 'insights', title: 'Insights', icon: 'show-chart' },
  { name: 'settings', title: 'Settings', icon: 'settings' },
] as const

const COLORS = {
  primary: '#232e35',
  inactive: '#64748b',
  background: '#ffffff'
}

export default function TabLayout() {
  const insets = useSafeAreaInsets()
  const TabIcon = ({ focused, tab }: { focused: boolean, tab: (typeof TAB)[number] }) => {
    return (
      <View
        style={{
          width: 44,
          height: 44,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 18,
          backgroundColor: focused ? '#F1F5F9' : 'transparent',
        }}
      >
        <MaterialIcons
          name={tab.icon}
          size={26}
          color={focused ? COLORS.primary : COLORS.inactive}
        />
      </View>
    )
  }
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          position: 'absolute',
          bottom: Math.max(insets.bottom, 8),
          backgroundColor: COLORS.background
        },
        tabBarItemStyle: {
          height: 64,
          paddingVertical: 4,
        },
        headerShown: false,
      }}>
      {TAB.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} tab={tab} />
          }}
        />
      ))}
    </Tabs>
  );
}
