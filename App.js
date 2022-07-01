import React, {useState, useEffect} from "react";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import Torch from "react-native-torch";
import RNShake from "react-native-shake";

const App = ()=> {
  const [toggle, setToggle] = useState(false);
  const handleChangeToggle = () => setToggle( old => !old);
  
  
  useEffect(() => {
    Torch.switchState(toggle);
    console.log("Ligou o Flash");
  }, [toggle]);
  
  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle( old => !old);
    });
    return () => subscription.remove();
  }, []);
  
  
  
  return <View style={toggle ? style.containerLight: style.container}>
    
    <TouchableOpacity onPress={handleChangeToggle}>
    <Image style={toggle 
                ? style.lightingOn 
                : style.lightingOff} 
            source={toggle
                ? require("./assets/icons/lighton.png") 
                : require("./assets/icons/lightoff.png")}/>
     <Image style={toggle 
                ? style.lightingOn 
                : style.lightingOff} 
            source={toggle
                ? require("./assets/icons/dioum.webp") 
                : require("./assets/icons/diodois.png")}/>
    </TouchableOpacity>
    </View>  
}

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",

  },
  containerLight: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  lightingOn: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 150,
    height: 150,
    tintColor: "white",
  }
});