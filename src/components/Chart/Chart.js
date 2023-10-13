import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
    const dataPointsValue = props.dataPoints.map(dataPoint=>dataPoint.value);
    const dataPointMaxValue = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          maxValue={dataPointMaxValue}
          label={dataPoint.label}
          value={dataPoint.value}
        />
      ))}
    </div>
  );
}

export default Chart;
