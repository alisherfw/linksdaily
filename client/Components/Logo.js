import React from "react";
import { Image, View } from "react-native";

const Logo = () => {
    return(
        <View style={{justifyContent: 'center', alignItems: "center"}}>
            <Image 
                style={{
                    width: 100,
                    height: 85,
                    marginVertical: 30
                }}
                source={require("../assets/icon.png")} />
        </View>
    )
}

export default Logo;