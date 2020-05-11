import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Font,
  Image,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Roboto",
  },
  section: {
    margin: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
  },
  subTitle: {
    margin: 10,
    textDecoration: "underline",
  },
  image: {},
  link: {
    color: "blue",
    textDecoration: "underline",
  },
  cardBlock: {
    flexDirection: "row",
  },
  card: {
    width: 140,
    padding: 10,
  },
  asanaName: {
    textAlign: "center",
    fontSize: 12,
  },
  header: {
    borderBottom: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  logo: {
    width: 30,
    height: 30,
  },
});

function createCardRow(cards, asanas) {
  return (
    <View style={styles.cardBlock}>
      {cards.map((card, i) => {
        return (
          <View key={i} style={styles.card}>
            <Image
              src={asanas[card.asanaIndex].asanaImg}
              style={styles.image}
            />
            <Text style={styles.asanaName}>
              {asanas[card.asanaIndex].asanaName}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

function createOneCardBlock(block, asanas) {
  var k = 0;
  var cardRows = [];

  do {
    cardRows.push(createCardRow(block.gridCards.slice(k, k + 4), asanas));
    k += 4;
  } while (k < block.gridCards.length);

  return cardRows;
}

function createCardBlocks(cards, gridDefaultName, asanas) {
  const cardBlocks = cards.map((block, i) => {
    const oneCardBlock = createOneCardBlock(block, asanas);
    return (
      <View key={i} style={styles.section}>
        <Text style={styles.subTitle}>
          {block.gridName === null ? gridDefaultName : block.gridName}
        </Text>
        <View>{oneCardBlock}</View>
      </View>
    );
  });
  return cardBlocks.slice(0, cardBlocks.length - 1);
}

function createPdf(panelName, cards, gridDefaultName, asanas, logo) {
  const cardBlocks = createCardBlocks(cards, gridDefaultName, asanas);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={logo.logoPath} style={styles.logo} />
          <Link style={styles.link} src={logo.logoUrl}>
            {logo.logoText}
          </Link>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>{panelName}</Text>
        </View>
        {cardBlocks}
      </Page>
    </Document>
  );
}

export default class PDFDownload extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    const { panelName, cards, gridDefaultName, asanas, logo } = this.props;

    Font.register({
      family: "Roboto",
      src: "/ttf/Roboto-Light.ttf",
    });

    const pdfDoc = createPdf(panelName, cards, gridDefaultName, asanas, logo);

    return (
      <div ref={this.ref}>
        <PDFDownloadLink document={pdfDoc} fileName={panelName + ".pdf"}>
          {({ blob, url, loading, error }) => {
            if (!loading) {
              setTimeout(
                () =>
                  this.props.onPDFDownloadAction(this.ref.current.firstChild),
                1
              );
            }
          }}
        </PDFDownloadLink>
      </div>
    );
  }
}
