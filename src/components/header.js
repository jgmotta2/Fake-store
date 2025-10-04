import { Link } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.container,
        marginTop: insets.top,
      }}
    >
      <TouchableOpacity>
        <Link style={styles.text} screen="Login">
          Sair
        </Link>
      </TouchableOpacity>
      <Text style={styles.title}>Produtos</Text>
      <TouchableOpacity>
        <Link style={styles.text} screen="GroupInfo">
          Grupo
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#2D3748",
    alignItems: "center",
    padding: 20,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontWeight: "700",
    color: "#FFFFFF",
    fontSize: 20,
    letterSpacing: 0.5,
  },
  text: {
    color: "#A0AEC0",
    fontSize: 16,
    fontWeight: "500",
  },
});
