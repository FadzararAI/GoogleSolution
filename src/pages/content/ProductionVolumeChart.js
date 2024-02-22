import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import firestore from '../../config/firebase';
import ApexCharts from 'apexcharts';

function calculatePercentageDifference(currentMonth, previousMonth) {
    let difference = currentMonth - previousMonth;
    let percentDifference = (difference / previousMonth) * 100;

    if (percentDifference > 0) {
        return "+ " + percentDifference.toFixed(2) + " %";
    } else if (percentDifference < 0) {
        return "- " + Math.abs(percentDifference).toFixed(2) + " %";
    } else {
        return "No change";
    }
}

const ProductionVolumeChart = () => {
    // const [data, setData] = useState([]);
    const [currentMonthData, setCurrentMonthData] = useState({});
    const [currentTotal, setCurrentTotal] = useState(0);
    const [previousMonthTotal, setPreviousMonthTotal] = useState(0);
    const [increaseDecreasePercentage, setIncreaseDecreasePercentage] = useState(0);
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (previousMonthTotal !== 0) {
            const percentageChange = calculatePercentageDifference(currentTotal, previousMonthTotal);
            setIncreaseDecreasePercentage(percentageChange);
        }
    }, [currentTotal, previousMonthTotal]);

    const fetchData = async () => {
        try {
            const snapshot = await getDocs(collection(firestore, 'production_volume'));
            const newData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            // setData(newData);

            const currentMonth = new Date().getMonth() + 1;
            const currentMonthData = newData.find(item => item.month === currentMonth);
            setCurrentMonthData(currentMonthData);

            // Calculate total energy production for the current month
            if (currentMonthData) {
                const total = currentMonthData.for_qa + currentMonthData.good + currentMonthData.reject;
                setCurrentTotal(total);
            }

            // Calculate comparison with previous month
            const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
            const previousMonthData = newData.find(item => item.month === previousMonth);
            if (previousMonthData) {
                const previousTotal = previousMonthData.for_qa + previousMonthData.good + previousMonthData.reject;
                setPreviousMonthTotal(previousTotal);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setIsFetched(true);
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
        const chartContainer = document.querySelector("#production-volume");
        if (!chartContainer) {
            console.error("Chart container not found.");
            return;
        }

        var options = {
            chart: { height: 260, type: 'pie', },
            series: [currentMonthData.good, currentMonthData.reject, currentMonthData.for_qa],
            labels: ["Good", "Reject", "For QA"],
            legend: { show: true, offsetY: 50, labels: { colors: ["#f2f2f2", "#f2f2f2", "#f2f2f2"] } },
            dataLabels: {
                enabled: true,
                dropShadow: { enabled: false, },
                style: {
                    colors: ['#f2f2f2'],
                    fontSize: '17px',
                }
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (value) {
                        return value + " kg"; // Append " kg" to the tooltip value
                    }
                }
            },
            colors: ['#53DFB5', '#FF949F', '#59C5F7'],
            stroke: { // Remove the border
                show: false,
                width: 0,
            },
            responsive: [{
                breakpoint: 768,
                options: {
                    chart: { height: 320, },
                    legend: { position: 'bottom', offsetY: 0, }
                }
            }]
        }

        const chart = new ApexCharts(chartContainer, options);
        chart.render();
    };

    const cleanupChart = () => {
        const chartContainer = document.querySelector("#production-volume");
        if (chartContainer) {
            chartContainer.innerHTML = ''; // Clear the chart container
        }
    };

    return (
        <>
            <div class="col-xl-6 col-md-12">
                <div class="card" style={{ background: '#3E3B64', color: '#fff' }}>
                    <div class="card-body">
                        <h6 style={{ color: '#fff', borderBottom: '1px solid #6C757D', paddingBottom: '10px', marginBottom: '10px' }}>Production Volume</h6>
                        <span>{previousMonthTotal + currentTotal} kg</span> <span class="span-sum inc">{increaseDecreasePercentage}</span>
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col">
                                <div id="production-volume"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductionVolumeChart;
