import { StyleSheet, View, Text, TextInput } from 'react-native';
const UserInput = ({name, value, setValue, secureTextEntry = false, keyboardType = "default", autoCapitalize = "none"}) => {
  return (
    <View>
        <View style={{width: "100%", paddingHorizontal: 12}}>
            <Text> {name} </Text>
            <TextInput 
                style={styles.textInput}
                value={value}
                onChangeText={(text) => setValue(text)}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 0.5,
    height: 48,
    borderBottomColor: "#8e93a1",
    marginBottom: 30,
  }
});


export default UserInput;