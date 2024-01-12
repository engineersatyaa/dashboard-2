import { Range, getTrackBackground } from "react-range";

const CustomInputRange = ({ rangeValue, setRangeValue }) => {
  return (
    <Range
      values={rangeValue}
      step={1}
      min={0}
      max={100}
      onChange={(values) => setRangeValue(values)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "5px",
            width: "100%",
            borderRadius: "2px 2px",
            background: getTrackBackground({
              values: rangeValue,
              colors: ["#1dacff", "#dddddd"],
              min: 0,
              max: 100,
            }),
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "16px",
            width: "16px",
            outline: "none",
            backgroundColor: "#fff",
            borderRadius: "50%",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
          }}
        />
      )}
    />
  );
};

export default CustomInputRange;
