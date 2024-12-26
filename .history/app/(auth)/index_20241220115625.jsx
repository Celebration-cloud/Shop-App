import React from 'react'

import { Button, Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import { useRouter } from 'expo-router';

import { useForm, Controller } from "react-hook-form";

import MainButton from '../../components/MainButton';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../store/actions/authActions';

const LoginScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const handleLogin = async(user) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password); 
      const user = userCredential.user; dispatch(loginAction(user, router));
      
      
      // router.navigate({
      //   pathname: "(home)",
      //   params: { session: `${user.email} logged in Successfully` },
      // });
      console.log("Data:", `${user.email} logged in Successfully`);
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  const handleSignupSwitch = () => {
    router.navigate({ pathname: "/signUp", params: { session: "Switched" } });
  };
  const onSubmit = (data) => {
    handleLogin(data);
    reset();
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            resizeMode="cover"
            source={require("../../assets/images/shop-app-logo.png")}
            style={{ position: "relative", width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.groupInput}>
            <View style={styles.inputField}>
              <Text>Email</Text>
              <Controller
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                )}
                name="email"
              />
              {errors.email && (
                <Text style={styles.error}>{errors.email.message}</Text>
              )}
            </View>
            <View style={styles.inputField}>
              <Text>Password</Text>
              <Controller
                control={control}
                rules={{
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                    message:
                      "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a symbol",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry
                  />
                )}
                name="password"
              />
              {errors.password && (
                <Text style={styles.error}>{errors.password.message}</Text>
              )}
            </View>
            <MainButton
              onPress={handleSubmit(onSubmit)}
              style={styles.btn}
              text={styles.btnText}
            >
              Login
            </MainButton>
          </View>
          <View style={styles.alt}>
            <Text>Don't have an account?</Text>
            <Pressable
              onPress={handleSignupSwitch}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Text style={styles.hlt}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
    flex: 1,
  },
  content: {
    width: "80%",
    height: "80%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 5,
  },
  logoContainer: {
    borderRadius: 30,
    alignSelf: "center",
    width: "50%",
    height: "30%",
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
  },
  formContainer: {
    gap: 30,
  },
  title: {
    textAlign: "center",
    fontWeight: "heavy",
    fontSize: Dimensions.get("window").fontScale * 25,
  },
  groupInput: {
    gap: 30,
  },
  inputField: {
    gap: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "blue",
    width: "40%",
    padding: 10,
  },
  btnText: {
    color: "white",
    fontWeight: "heavy",
    fontSize: Dimensions.get("window").fontScale * 20,
  },
  alt: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 0,
  },
  qns: {
    textAlign: "center",
  },
  hlt: {
    color: "blue",
    textAlign: "center",
  },
  error: { 
      color: "red", 
      fontSize: 12 
  },
});