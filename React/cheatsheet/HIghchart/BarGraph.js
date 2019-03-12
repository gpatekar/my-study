import React from 'react';
import Highcharts from 'highcharts';

class BarGraph extends React.PureComponent {
    componentDidMount() { 
        this.generateGraph();
    }

    generateGraph = () => { 
        const { categories, data } = this.props;
        const chartOptions = {
            title: {
                text: 'Overview graph',
            },
            yAxis: {
                title: {
                    text: 'Number of calls',
                },
            },
            xAxis: {
                categories,
            },
            series: [{
                type: 'column',
                name: 'Calls',
                data,
                color: '#76b92c',
            }],
        };
        this.chart =  Highcharts.chart(
            'overview-graph',
            chartOptions,
        );
    }
    componentWillUnmount() {
        this.chart.destroy();
    }
    render() {
        return (
            <div id="overview-graph" />
        );
    }
}

export default BarGraph;