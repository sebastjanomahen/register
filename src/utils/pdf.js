import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Button } from "shards-react";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = (data) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>section 1
        </Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

const MakePdf = () => (
<PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
  <Button> Prenesi PDF
  {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
  </Button>
</PDFDownloadLink>
);


export default MakePdf;