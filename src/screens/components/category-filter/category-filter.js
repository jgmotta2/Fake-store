import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

export function CategoryFilter(props) {
  return (
    <View>
      <ScrollView horizontal>
        <View style={styles.container}>
          {categories.map((category) => (
            <TouchableOpacity
              onPress={() => props.setSelectedCategory(category)}
              key={category}
              style={[
                styles.button,
                props.selectedCategory === category
                  ? styles.buttonSelected
                  : styles.buttonDefault,
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  props.selectedCategory === category
                    ? styles.buttonTextSelected
                    : styles.buttonTextDefault,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {!!props.selectedCategory && (
        <TouchableOpacity
          style={styles.clearFilter}
          onPress={() => props.setSelectedCategory("")}
        >
          <Text style={styles.clearFilterText}>Limpar Filtro</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    padding: 16,
    paddingBottom: 8,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1.5,
  },
  buttonDefault: {
    backgroundColor: "#F7FAFC",
    borderColor: "#E2E8F0",
  },
  buttonSelected: {
    backgroundColor: "#4299E1",
    borderColor: "#4299E1",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  buttonTextDefault: {
    color: "#4A5568",
  },
  buttonTextSelected: {
    color: "#FFFFFF",
  },
  clearFilter: {
    marginLeft: 16,
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#E53E3E",
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  clearFilterText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
});
