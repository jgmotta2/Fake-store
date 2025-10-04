import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ProductCard } from "./components/product-card/product-card";
import { CategoryFilter } from "./components/category-filter/category-filter";

export function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    function getProducts() {
      function getUrl() {
        if (selectedCategory)
          return `https://fakestoreapi.com/products/category/${selectedCategory}`;

        return "https://fakestoreapi.com/products";
      }

      axios.get(getUrl()).then((r) => {
        setProducts(r.data);
        setInterval(() => {
          setIsLoading(false);
        }, 1000);
      });
    }

    getProducts();
  }, [selectedCategory]);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator color="#4299E1" size="large" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <FlatList
          style={styles.productList}
          data={products}
          renderItem={({ item }) => (
            <ProductCard
              title={item.title}
              price={item.price}
              category={item.category}
              image={item.image}
              id={item.id}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </SafeAreaProvider>
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
  productList: {
    flex: 1,
    backgroundColor: "#F7FAFC",
  },
});
