import { Link, useNavigation } from "@react-navigation/native";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

export function ProductCard(props) {
  const navigation = useNavigation();

  function handleGoToDetailsScreen() {
    navigation.navigate("ProductDetails", {
      productId: props.id,
    });
  }

  return (
    <TouchableHighlight onPress={handleGoToDetailsScreen}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: props.image,
          }}
        />
        <Text style={styles.category}>{props.category}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>
          {Intl.NumberFormat("pt-br", {
            currency: "BRL",
            style: "currency",
          }).format(props.price)}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E2E8F0",
    borderWidth: 1,
    margin: 12,
    padding: 16,
    borderRadius: 16,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 12,
    backgroundColor: "#F7FAFC",
  },
  category: {
    fontSize: 12,
    color: "#718096",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    color: "#2D3748",
    fontWeight: "600",
    lineHeight: 22,
    paddingHorizontal: 4,
  },
  price: {
    fontSize: 18,
    color: "#4299E1",
    fontWeight: "700",
  },
});
