import React from "react";
import { View, Dimensions } from "react-native";
import Tab from "./Tab";
import Indicator from "./Indicator";

const { width } = Dimensions.get("screen");

const Tabs = ({ data, scrollX, onItemPress }) => {
  const [measures, setMeasures] = React.useState([]);
  const containerRef = React.useRef();

  React.useEffect(() => {
    let m = [];
    if (containerRef.current) {
      data.forEach((item) => {
        item.ref.current.measureLayout(
          containerRef.current,
          (x, y, width, height) => {
            m.push({
              x,
              y,
              width,
              height,
            });
            if (m.length === data.length) {
              setMeasures(m);
            }
          },
        );
      });
    }
  }, [data]);

  return (
    <View
      style={{ position: "absolute", width }}
      ref={containerRef}
      onLayout={() => {
        let m = [];
        if (containerRef.current) {
          data.forEach((item) => {
            item.ref.current.measureLayout(
              containerRef.current,
              (x, y, width, height) => {
                m.push({
                  x,
                  y,
                  width,
                  height,
                });
                if (m.length === data.length) {
                  setMeasures(m);
                }
              },
            );
          });
        }
      }}
    >
      <View
        style={{
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        {data.map((item, index) => {
          return (
            <Tab
              key={item.key}
              item={item}
              ref={item.ref}
              onItemPress={() => onItemPress(index)}
              data={data}
            />
          );
        })}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} data={data} />
      )}
    </View>
  );
};

export default Tabs;
