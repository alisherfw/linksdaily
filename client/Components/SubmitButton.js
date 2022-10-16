import { View, Text, TouchableOpacity } from 'react-native';

const SubmitButton = ({ title, handleSubmit, loading }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={handleSubmit}
                style={{
                    height: 50,
                    marginHorizontal: 15,
                    justifyContent: "center",
                    backgroundColor: "#1DA1F2",
                    borderRadius: 24
                }}>
                <Text style={{ textAlign: "center", fontSize: 17, fontWeight: "bold", color: "white" }}>
                    {loading ? "Please wait..." : title }
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SubmitButton;