import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import firestore from '../../config/firebase';
import ApexCharts from 'apexcharts';

const SaleReportChart = () => {
    // const [salesData, setSalesData] = useState([]);
    const [totalSalesOverall, setTotalSalesOverall] = useState(0);
    const [averageSalesOverall, setAverageSalesOverall] = useState(0);
    const [time, setTime] = useState([]);
    const [totalSales, setTotalSales] = useState([]);
    const [averageSales, setAverageSales] = useState([]);
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const snapshot = await getDocs(collection(firestore, 'sales_report'));
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            // setSalesData(data);

            const timeArray = data.map(item => item.time);
            const totalSalesArray = data.map(item => item.total_sales);
            const averageSalesArray = data.map(item => item.average_sales);

            setTime(timeArray);
            setTotalSales(totalSalesArray);
            setAverageSales(averageSalesArray);

            const totalSales = data.reduce((acc, item) => acc + item.total_sales, 0);
            setTotalSalesOverall(totalSales);

            const averageSales = totalSales / data.length;
            setAverageSalesOverall(averageSales);
            setIsFetched(true);
        } catch (error) {
            console.error('Error fetching sales data:', error);
        }
    };

    useEffect(() => {
        if (isFetched === true) {
            renderChart();

            return () => {
                cleanupChart();
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFetched]);

    const renderChart = () => {
        const chartContainer = document.querySelector("#sales-report");
        if (!chartContainer) {
            console.error("Chart container not found.");
            return;
        }

        const options = {
            chart: {
                height: 350,
                type: 'line',
                stacked: false,
            },
            stroke: {
                width: [0, 3],
                curve: 'smooth'
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%'
                }
            },
            colors: ['#55BED2', '#7267EF'],
            series: [{
                name: 'Total Sales',
                type: 'column',
                data: totalSales,
            }, {
                name: 'Average',
                type: 'line',
                data: averageSales,
            }],
            fill: {
                opacity: [0.85, 1],
            },
            labels: time,
            markers: {
                size: 0
            },
            xaxis: {
                type: 'datetime',
                labels: {
                    style: {
                        colors: '#f2f2f2'
                    }
                }
            },
            yaxis: {
                min: 0,
                labels: {
                    style: {
                        colors: '#f2f2f2'
                    }
                }
            },
            tooltip: {
                shared: true,
                intersect: false,
                theme: 'dark',
                y: {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return "$ " + y.toFixed(0);
                        }
                        return y;
                    }
                }
            },
            legend: {
                labels: {
                    useSeriesColors: true
                },
                markers: {
                    customHTML: [function () {
                        return ''
                    }, function () {
                        return ''
                    }]
                }
            },
        };

        const chart = new ApexCharts(chartContainer, options);
        chart.render();
    };

    const cleanupChart = () => {
        const chartContainer = document.querySelector("#sales-report");
        if (chartContainer) {
            chartContainer.innerHTML = ''; // Clear the chart container
        }
    };

    return (
        <>
            <div class="col-xl-6 col-md-12">
                <div class="card" style={{ background: '#3E3B64', color: '#fff' }}>
                    <div class="card-header">
                        <h5 style={{ color: '#fff' }}>Product monthly sales report</h5>
                    </div>
                    <div class="card-body">
                        <div class="row pb-2">
                            <div class="col-auto m-b-10">
                                <h3 class="mb-1" style={{ color: '#fff' }}>${totalSalesOverall.toFixed(2)}</h3>
                                <span>Total Sales</span>
                            </div>
                            <div class="col-auto m-b-10">
                                <h3 class="mb-1" style={{ color: '#fff' }}>${averageSalesOverall.toFixed(2)}</h3>
                                <span>Average</span>
                            </div>
                        </div>
                        <div id="sales-report"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SaleReportChart;
