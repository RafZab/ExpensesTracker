import React from 'react';

import ChartBar from './ChartBar/ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const allValue = dataPointsValues.reduce((prev, curr) => prev + curr);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                allValue={allValue}
                label={dataPoint.label}
                />
            )}
        </div>
    );
};

export default Chart;