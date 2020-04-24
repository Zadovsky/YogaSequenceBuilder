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
    if (this.props.renderPdf) {
      this.props.onPDFDownloadAction();
    }
  }

  render() {
    return (
      <PDFDownloadLink document={<MyDoc />}>
        {({ blob, url, loading, error }) => {
          if (!loading) {
            if (this.props.renderPdf) {
              require("downloadjs")(url, "test.pdf");
            }
          }
        }}
      </PDFDownloadLink>
    );
  }
}
