import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import wallpaper from "./assets/images/wallpaper.webp"
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import NotificationsList from './src/components/NotificationList';

export default function App() {
  return (
    <ImageBackground source={wallpaper} style={styles.container}>





  <View style={styles.body}>
  <NotificationsList
  ListHeaderComponent={() => (
    <SafeAreaView style={styles.header}>
    {/* initial setup */}
        <Ionicons name="ios-lock-closed" size={24} color="white" />
        <Text style={styles.date}>Friday, 30 September</Text>
    <Text style={styles.time}>12:03</Text>
    </SafeAreaView>
  )}
/>
  </View>
  

  {/* footer */}
  <SafeAreaView style={styles.footer}>
    <View style={styles.icons}>
      <MaterialCommunityIcons name="flashlight" size={24} color="white"/>
    </View>
    <View style={styles.icons}>
      <MaterialCommunityIcons name="camera" size={24} color="white"/>
      </View>
  
  
  </SafeAreaView>

      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  header: {
    flex:1,
    alignItems: "center",
    //justifyContent: "center",
    height: 255,
  },
  date: {
    color: "#C3FFFE",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 20,
  },
  time: {
    fontSize: 82,
    fontWeight: "bold",
    color: "#C3FFFE",
  },
  footer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:"100%",
    //paddingTop:50,
    //backgroundColor:'red'
  },
  icons:{
    backgroundColor:"#00000050",
    width:50,
    aspectRatio:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    marginHorizontal:46,
    marginBottom:20,
    marginTop:20

  },
  body:{
    flex:2.5,
    width:"100%"
  }
});
