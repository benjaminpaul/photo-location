import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import * as MediaLibrary from "expo-media-library";

export default function App() {
  _mediaLibraryAsync = async () => {
    console.log("Requesting photos...");
    let { status } = await MediaLibrary.requestPermissionsAsync();
    let media = await MediaLibrary.getAssetsAsync({
      first: 2000,
      mediaType: ["photo"],
    });

    console.log("Number of assets", media.assets.length);

    for (var i = 0; i < media.assets.length; i++) {
      const info = await MediaLibrary.getAssetInfoAsync(media.assets[i], {
        shouldDownloadFromNetwork: false,
      });
      if (info.location) {
        console.log(info.location);
      }
    }

    console.log("Done listing locations");
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Scan photos for locations" onPress={_mediaLibraryAsync} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
