import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function ProductDetailsScreen({ route }) {
  const { productId } = route.params;

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function getProduct() {
      axios.get(`https://fakestoreapi.com/products/${productId}`).then((r) => {
        setProduct(r.data);
        setInterval(() => {
          setIsLoading(false);
        }, 1000);
      });
    }

    getProduct();
  }, [productId]);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator
          color="#4299E1"
          size="large"
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: product.image,
            }}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>
            {Intl.NumberFormat("pt-br", {
              currency: "BRL",
              style: "currency",
            }).format(product.price)}
          </Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Descrição</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7FAFC",
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  imageContainer: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingVertical: 32,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 16,
    backgroundColor: "#F7FAFC",
  },
  infoContainer: {
    backgroundColor: "#FFFFFF",
    margin: 16,
    padding: 24,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  category: {
    fontSize: 14,
    color: "#718096",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    color: "#2D3748",
    fontWeight: "700",
    lineHeight: 32,
    marginBottom: 16,
  },
  price: {
    fontSize: 28,
    color: "#4299E1",
    fontWeight: "800",
    marginBottom: 24,
  },
  descriptionContainer: {
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    paddingTop: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    color: "#2D3748",
    fontWeight: "600",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#4A5568",
    lineHeight: 24,
    fontWeight: "400",
  },
});
