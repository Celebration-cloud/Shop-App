import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'

import MainButton from "../../../../components/MainButton"
import { logoutAction } from '../../../../store/actions/authActions'

const ProfileScreen = () => {
  const dispatch = useDispatch()
  
    const { user, isAuth, token } = useSelector((state) => state.user);
      useEffect(() => {
        if (isAuth && token !== null) {
          router.replace({
            pathname: "(home)",
            params: { session: `logged in Successfully` },
          });
        }
      }, [isAuth, token]);
  const handleLogout = () => { 
    console.log('Logout button pressed')
dispatch(logoutAction())
   };
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <MainButton style={{padding: 10, backgroundColor: "blue"}} text={{color: "white", fontSize: 10}}>
        Logout
      </MainButton>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    gap: 20,
  },
})