import { StyleSheet, Text, View } from "react-native";

const group = [
  { name: "João Gabriel Motta", ra: "1137220" },
  { name: "Carlos Machado", ra: "1136797" },
  { name: "Estevan Fernandes", ra: "1137268" },
  { name: "Felipe Walter", ra: "1137259" },
];

export function GroupInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações do Grupo</Text>
      {group.map((person, index) => (
        <View key={index} style={styles.memberCard}>
          <Text style={styles.memberName}>{person.name}</Text>
          <Text style={styles.memberRA}>RA: {person.ra}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2D3748",
    marginBottom: 24,
    textAlign: "center",
  },
  memberCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  memberName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2D3748",
    marginBottom: 8,
  },
  memberRA: {
    fontSize: 16,
    color: "#718096",
    fontWeight: "500",
  },
});
