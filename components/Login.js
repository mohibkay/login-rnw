import React, { useState } from "react";
import { SafeAreaView, View, Text, Button, TextInput } from "react-native";
import tailwind from "tailwind-rn";
import { Picker } from "@react-native-picker/picker";

const Login = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <SafeAreaView style={tailwind("")}>
      <View style={tailwind("pt-12 items-center")}>
        <View style={tailwind("bg-blue-200 px-3 py-1 rounded-full")}>
          <Text style={tailwind("text-blue-800 font-semibold")}>
            Hello Tailwind
          </Text>
        </View>
        <View style={tailwind("sm:w-3/4 md:w-1/4")}>
          <Text>Login</Text>
          <TextInput placeholder="Email" />
          <TextInput placeholder="Password" />
          <Button title="Login" />
          <View style={tailwind("mt-8")}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
