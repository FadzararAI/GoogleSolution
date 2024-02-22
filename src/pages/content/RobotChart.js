import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import firestore from '../../config/firebase';
import ApexCharts from 'apexcharts';

const RobotChart = () => {
    const [data, setData] = useState([]);
    const [active, setActive] = useState(0);
    const [charging, setCharging] = useState(0);
    const [underRepair, setUnderRepair] = useState(0);
    const [total, setTotal] = useState(0);
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            // Set the state after data is fetched
            const active = data[0].active;
            const charging = data[0].charging;
            const underRepair = data[0].under_repair;
            let total = 0;
            data.forEach(item => {
                total = total + item.active + item.charging + item.under_repair;
            });
            setActive(active);
            setCharging(charging);
            setUnderRepair(underRepair);
            setTotal(total);
        }
    }, [data]);

    const fetchData = async () => {
        try {
            const snapshot = await getDocs(collection(firestore, 'robot'));
            const newData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(newData);
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
    }, [isFetched, active]);

    const renderChart = () => {
        const chartContainer = document.querySelector("#robot-chart");
        if (!chartContainer) {
            console.error("Chart container not found.");
            return;
        }

        var options = {
            chart: { height: 260, type: 'pie', },
            series: [active, charging, underRepair],
            labels: ["Active", "Charging", "Under Repair"],
            legend: { show: true, offsetY: 50, labels: { colors: ["#f2f2f2", "#f2f2f2", "#f2f2f2"] } },
            dataLabels: {
                enabled: true,
                dropShadow: { enabled: false, },
                style: {
                    colors: ['#f2f2f2'],
                }
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (value) {
                        return value + " unit";
                    }
                }
            },
            colors: ['#53DFB5', '#FFB703', '#FF9742'],
            stroke: {
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
        const chartContainer = document.querySelector("#robot-chart");
        if (chartContainer) {
            chartContainer.innerHTML = ''; // Clear the chart container
        }
    };

    return (
        <>
            <div className="col-xl-6 col-md-12">
                <div className="card" style={{ background: '#3E3B64', color: '#fff' }}>
                    <div className="card-body">
                        <h6 style={{ color: '#fff', borderBottom: '1px solid #6C757D', paddingBottom: '10px', marginBottom: '10px' }}>Robots</h6>
                        <span>{active} / {total}</span> <span className="span-live">LIVE</span>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col">
                                <div id="robot-chart"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RobotChart;
