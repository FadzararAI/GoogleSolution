import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import firestore from '../../config/firebase';
import ApexCharts from 'apexcharts';

function convertToHoursMinutes(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + 'H ' + minutes + 'M';
}

const SolarPanelChart = () => {
    // const [data, setData] = useState([]);
    const [currentMonthData, setCurrentMonthData] = useState({});
    const [totalEnergyProduction, setTotalEnergyProduction] = useState(0);
    const [totalEnergyInMinute, setTotalEnergyInMinute] = useState("0");
    // const [previousMonthTotal, setPreviousMonthTotal] = useState(0);
    const [increaseDecreasePercentage, setIncreaseDecreasePercentage] = useState(0);
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const snapshot = await getDocs(collection(firestore, 'solar_panel_data'));
            const newData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            // setData(newData);

            const currentMonth = new Date().getMonth() + 1;
            const currentMonthData = newData.find(item => item.month === currentMonth);
            setCurrentMonthData(currentMonthData);

            const totalProduction = newData.reduce((acc, item) => acc + item.energy_production, 0);
            setTotalEnergyProduction(totalProduction);

            const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
            const previousMonthData = newData.find(item => item.month === previousMonth);
            if (previousMonthData) {
                // setPreviousMonthTotal(previousMonthData.energy_production);
            }

            if (currentMonthData && previousMonthData) {
                const percentageChange = ((currentMonthData.energy_production - previousMonthData.energy_production) / previousMonthData.energy_production) * 100;
                setIncreaseDecreasePercentage(percentageChange);
            }

            setIsFetched(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (isFetched === true) {
            setTotalEnergyInMinute(convertToHoursMinutes(totalEnergyProduction));
            renderChart();

            return () => {
                cleanupChart();
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFetched]);

    const renderChart = () => {
        const chartContainer = document.querySelector("#solar-power");
        if (!chartContainer) {
            console.error("Chart container not found.");
            return;
        }

        var options = {
            series: [{
                name: "In minute",
                data: [currentMonthData.energy_production, currentMonthData.performance_ratio, currentMonthData.capacity_factor]
            }],
            chart: {
                type: 'bar',
                height: 310,
                toolbar: {
                    show: false,
                },
            },
            grid: {
                show: false,
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                    barHeight: '50%',
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ["Energy production", "Performance ratio", "Capacity factor"],
                labels: {
                    show: false // Hides the x-axis labels
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#f2f2f2'
                    }
                }
            },
            tooltip: {
                theme: 'dark',
            },
            colors: ['#FF9742'],
        };

        const chart = new ApexCharts(chartContainer, options);
        chart.render();
    };

    const cleanupChart = () => {
        const chartContainer = document.querySelector("#solar-power");
        if (chartContainer) {
            chartContainer.innerHTML = ''; // Clear the chart container
        }
    };

    return (
        <>
            <div class="col-xl-12">
                <div class="card" style={{ background: '#3E3B64', color: '#fff' }}>
                    <div class="card-body">
                        <h6 style={{ color: '#fff', borderBottom: '1px solid #6C757D', paddingBottom: '10px', marginBottom: '10px' }}>Solar Panel</h6>
                        <span>{totalEnergyInMinute} ({totalEnergyProduction} in minutes)</span> <span class="span-sum inc">+ {increaseDecreasePercentage.toFixed(2)}%</span>
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col">
                                <div id="solar-power"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SolarPanelChart;
