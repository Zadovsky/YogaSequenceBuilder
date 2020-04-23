import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MyDoc = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default class PDFDownload extends React.Component {
  componentDidUpdate() {
    console.log("componentDidUpdate");
    this.props.onPDFDownloadAction();
  }

  componentDidMount() {
    console.log("componentDidMount");
    // this.props.onPDFDownloadAction();
  }

  render() {
    console.log("render");
    return (
      <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
        {({ blob, url, loading, error }) => {
          if (!loading) {
            require("downloadjs")(url, "test.pdf");
          }
        }}
      </PDFDownloadLink>
    );
  }
}
