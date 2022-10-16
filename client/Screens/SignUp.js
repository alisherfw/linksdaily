import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import UserInput from '../Components/UserInput';
import axios from 'axios';
import Logo from '../Components/Logo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

const SignUp = ({navigation}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {

        setLoading(true);
        if (!name || !email || !password) {
            alert("All fields must be filled!");
            setLoading(false);
            return;
        }

        try {
            const data = await axios.post("https://localhost:8000/api/signup", {
                name,
                email,
                password
            });
            console.log("Sign In submitted => ", data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, justifyContent: "center" }}>
            <View style={styles.container}>
                <Logo />
                <Text style={styles.title}> Sign Up </Text>
                <View style={{ width: "100%", paddingHorizontal: 12 }}>
                    <UserInput name="NAME" value={name} setValue={setName} autoCorrect={false} autoCapitalize="words" />
                    <UserInput name="EMAIL" value={email} setValue={setEmail} keyboardType="email-address" autoCompleteType="email" />
                    <UserInput name="PASSWORD" value={password} setValue={setPassword} autoCompleteType="password" secureTextEntry={true} />
                </View>

                <SubmitButton title="Sign Up" handleSubmit={handleSubmit} loading={loading} />

                <Text style={{textAlign: "center", marginTop: 20}}>
                    Already joined? <Text style={{color: "#1DA1F2"}} onPress={() => navigation.navigate("SignIn")}> Sign In </Text>
                </Text>
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        textAlign: "center"
    },
    textInput: {
        borderBottomWidth: 0.5,
        height: 48,
        borderBottomColor: "#8e93a1",
        marginBottom: 30,
    }
});


export default SignUp;