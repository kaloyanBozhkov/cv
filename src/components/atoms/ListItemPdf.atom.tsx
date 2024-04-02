import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { type ReactNode } from "react";

const ListItem = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: object;
}) => {
  return (
    <View style={{ ...styles.row, ...style }}>
      <View style={styles.bullet}>
        <Text>{"\u2022" + "   "}</Text>
      </View>
      {typeof children === "string" ? <Text>{children}</Text> : children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
  },
  bullet: {
    height: "100%",
  },
});

export default ListItem;
