"use client";
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    paddingHorizontal: "10%",
    paddingTop: "2%",
    // fontFamily: "Bahn",
    textTransform: "uppercase",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  // HEADER SECTION
  title_info: {
    display: "flex",
    alignItems: "flex-end",
  },
  title_info_text: {
    fontSize: "14px",
    // textTransform: "none",
  },

  //BILLING SECTION
  bill_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: "20px",
  },
  bill_titles: {
    fontSize: "14px",
    textTransform: "uppercase",
    paddingTop: "20px",
    paddingBottom: "10px",
    // fontFamily: "bahnBold",
  },
  bill_info: {
    fontSize: "12px",
    flexShrink: 1,
  },
  divider: {
    marginTop: "10px",
    marginBottom: "15px",
    width: "100%",
    backgroundColor: "black",
    height: "2px",
  },

  item_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "10px",
  },
  image: {
    height: "100px",
    width: "100px",
  },
  item_title: {
    fontSize: "14px",
  },
  item_description: {
    paddingLeft: "1px",
    fontSize: "10px",
  },
  item_text_container: {
    paddingLeft: "10px",
    letterSpacing: "1.5px",
    width: "300px",
  },
  item_row_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quant_container: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "flex-end"
    // backgroundColor: "red",
    paddingRight: "35px",
    fontSize: "12px",
  },
  items_section_titles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  all_totals_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  total_container: {
    display: "flex",
    alignItems: "center",
    gap: "3px",
    fontSize: "15px",
  },
});

// Create Document Component
const PDF = ({
  cart,
  ppe,
  discount,
  billDate,
  billAddy,
  billRegion,
  shipName,
  billName,
  shipAddy,
  shipRegion,
  billNumber,
}: any) => {
  const getTotal = () => {
    let total = 0;
    cart.forEach((item: any) => {
      total += parseInt(item.quantity);
    });

    return total;
  };
  console.log(cart);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.titleContainer}>
          <Text
            style={{
              fontSize: 32,
              // fontFamily: "TitleFont",
              fontWeight: "bold",
            }}
          >
            TRONO Belts
          </Text>
          <View style={styles.title_info}>
            <Text style={styles.title_info_text}>Order #{billNumber}</Text>
            <Text style={styles.title_info_text}>Ship Date: {billDate}</Text>
          </View>
        </View>

        <View style={styles.bill_container}>
          <View>
            <Text style={styles.bill_titles}>Ship To</Text>
            <View style={styles.bill_info}>
              <Text>{shipName}</Text>
              <Text>{shipAddy}</Text>
              <Text>{shipRegion}</Text>
            </View>
          </View>

          <View>
            <Text style={styles.bill_titles}>Bill To</Text>
            <View style={styles.bill_info}>
              <Text>{billName}</Text>
              <Text>{billAddy}</Text>
              <Text>{billRegion}</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />

        <View style={styles.items_section_titles}>
          <Text>Items</Text>
          <Text>Quantity</Text>
        </View>

        <View>
          {cart.map((data: any, index: any) => (
            <View key={index} style={styles.item_row_container}>
              <View style={styles.item_container}>
                <Image
                  //get image from data.data.image
                  src={`/pictures/${data.data.image}`}
                  style={styles.image}
                />
                <View style={styles.item_text_container}>
                  <Text style={styles.item_title}>{data.data.ProductName}</Text>
                  <Text style={styles.item_description}>
                    {data.data.Description}
                  </Text>
                </View>
              </View>
              <View style={styles.quant_container}>
                <Text>{data.quantity}</Text>
              </View>
            </View>
          ))}
        </View>

        <View
          style={{
            paddingTop: "20px",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: "30px",
          }}
        >
          <Text>TOTAL</Text>
          <Text>{getTotal()}</Text>
        </View>
        <View style={styles.divider} />
        <View style={{ fontSize: "15px" }}>
          <View style={styles.all_totals_container}>
            <View style={styles.total_container}>
              <Text>QTY</Text>
              <Text>{getTotal()}</Text>
            </View>

            <View style={styles.total_container}>
              <Text>Price</Text>
              <Text>${ppe}</Text>
            </View>

            <View style={styles.total_container}>
              <Text>Total</Text>
              <Text>${getTotal() * ppe}</Text>
            </View>
          </View>
          <View style={{ paddingTop: "10px", textAlign: "right" }}>
            {discount !== "" && <Text style={{}}>Discount: -${discount}</Text>}
            <View style={styles.divider} />
            <Text>Order total: ${ppe * getTotal() - discount}</Text>
          </View>
        </View>
        <View
          fixed
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            flex: 1,
            textAlign: "center",
            fontSize: "12px",
            marginVertical: "5px",
          }}
        >
          <Text
            style={{
              paddingVertical: "10px",
              marginBottom: "10px",
              borderTop: "1px solid black",
            }}
          >
            Thanks for shopping with us!
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
