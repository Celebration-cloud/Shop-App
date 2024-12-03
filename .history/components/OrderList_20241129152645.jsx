const OrderList = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const totalPerItem = data.cartItems.reduce((previous, current) => {
    if (!previous[current.name]) {
      previous[current.name] = 0;
    }
    previous[current.name] += current.price * current.count;
    return previous;
  }, {});

  const handleSeeMore = () => {
    setVisible((prev) => !prev);
  };
  return (
    <Fragment>
      <View style={styles.group1}>
        <Text style={styles.group1Text}>${data.totalSum.toFixed(2)}</Text>
        <View style={styles.btnContainer}>
          <MainButton
            onPress={handleSeeMore}
            style={styles.btn}
            text={styles.text}
          >
            See More
          </MainButton>
        </View>

        <Text style={styles.group1Text}>23/24/2024</Text>
      </View>
      {visible && (
        <View style={styles.modalContainer}>
          <ScrollView
            contentContainerStyle={styles.scroll}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.id}>Order Id: {data.id}</Text>
            <View style={styles.modal}>
              {data.cartItems?.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  totalPerItem={totalPerItem}
                  noDelete={true}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      )}
    </Fragment>
  );
};

export default
