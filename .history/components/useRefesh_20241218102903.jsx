const useRefresh = () => {
     const dispatch = useDispatch();
    const navigation = useNavigation();

    const fetchShoppingItems = useCallback(() => {
      dispatch(getShopItems());
      console.log("done");
    }, [dispatch]);

    useEffect(() => {
       navigation.addListener("focus", fetchShoppingItems);

      return () => {
        navigation.removeListener("focus", fetchShoppingItems);
      };
    }, [fetchShoppingItems]);
}
export default 