import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = ({ percentage }) => {
  return (
    <div
      style={{
        width: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={{
          // root: { width: "75%" }, // handling in index.css
          path: { stroke: "#0bceaa", strokeLinecap: "square" },
          trail: { stroke: "#d4f8f2", strokeWidth: 5 },
          text: {
            fill: "#1c1a1ae9",
            fontSize: "22px",
            fontWeight: "800",
          },
        }}
      />
    </div>
  );
};

export default CircularProgressBar;
