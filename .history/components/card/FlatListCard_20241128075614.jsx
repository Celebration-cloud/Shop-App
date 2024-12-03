import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import List from "./List"
const FlatListCard = ({
  data,
  handleDetails,
  handleAddToCart,
  btnLeftTitle,
  btnRightTitle,
}) => {
  const cardComponent = (itemData) => {
    return (
      <List
        data={itemData.item}
        onPressLeft={() => handleDetails(itemData.item)}
        onPressRight={() => handleAddToCart(itemData.item)}
        btnLeftTitle={btnLeftTitle}
        btnRightTitle={btnRightTitle}
      />
    );
  };

  return (
    <View className={`px-1`}>
      <FlatList
        data={data}
        renderItem={cardComponent}
        className={`w-full h-full`}
      />
    </View>
  );
};

export default FlatListCard

const styles = StyleSheet.create({
  import { connect } from 'react-redux'
  import component from 'componentPath'
  import {actionCreator} from 'actionCreatorPath'
  
  const mapStateToProps = (state, ownProps) => {
    return {
      prop: state.prop
    }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      dispatch1: () => {
        dispatch(actionCreator)
      }
    }
  }
  
  const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
      mergeProp: mergePropVal
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(component)
})