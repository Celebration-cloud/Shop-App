const fetchShoppingItems = useCallback(async () => {
  dispatch(getShopItems());

  console.log("done");
}, [dispatch]);
