import {
    Appearance,
    Platform,
    StyleSheet,
    FlatList,
    Text,
    View,
    Image,
  } from "react-native";
  import { Colors } from "@/constants/Colors";
  import { ScrollView } from "react-native-gesture-handler";
  import { SafeAreaView } from "react-native-safe-area-context";
  import bookImages from "@/constants/bookImg";
  import { Books } from "@/constants/Books";
  
  export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  
    const styles = createStyles(theme, colorScheme);
  
    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  
    return (
      <Container style={styles.container}>
        <FlatList
          data={Books}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
            
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
  
            
              <Image source={bookImages[item.id - 1]} style={styles.image} />
            </View>
          )}
        />
      </Container>
    );
  }
  
  function createStyles(theme, colorScheme) {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#F5F1E7",
        paddingHorizontal: 16,
      },
      card: {
        flexDirection: "row", 
        alignItems: "center",
        backgroundColor: theme.cardBackground,
        padding: 16,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
      borderWidth: 1,
      borderColor: 'gray',
      },
      textContainer: {
        flex: 1, 
        paddingRight: 10, 
      },
      title: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'black',
        marginBottom: 5,
      },
      description: {
        fontSize: 14,
        color: 'black',
        textAlign: "left",
      },
      image: {
        width: 100, 
        height: 100,
        borderRadius: 10,
        resizeMode: "cover",
      },
    });
  }
  