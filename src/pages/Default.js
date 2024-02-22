import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBar from "./layout/NavBar";
import HeaderPart from "./layout/HeaderPart";
import Breadcrumb from "./layout/Breadcrumb";

import SolarPanelChart from "./content/SolarPanelChart";
import SaleReportChart from "./content/SaleReportChart";
import ProductionVolumeChart from "./content/ProductionVolumeChart";
import RobotChart from "./content/RobotChart";
import SeedStockTable from "./content/SeedStock";

import perfectScrollBar from "../assets/js/perfectScrollBar";
import FinishedProductTable from "./content/FinishedProduct";

const Default = () => {
    useEffect(() => {
        perfectScrollBar();
    }, []);

    return (
        <>
            {/* Navigation */}
            <NavBar />
            {/* Header */}
            <HeaderPart />

            {/* Content  */}
            <div class="pc-container">
                <div class="pcoded-content">
                    {/* Breadcrumb */}
                    <Breadcrumb />

                    <div class="row">
                        {/* Main content [START] */}
                        <div class="col-xl-6 col-md-12">
                            {/* Number of Customers, Vegetables, and Robots */}
                            <div class="card flat-card">
                                <div class="row-table" style={{ border: 'none', background: '#3E3B64', color: "#E9ECEF" }}>
                                    <div class="col-sm-6 card-body br" style={{ borderRight: '1px solid #6C757D' }}>
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <i class="material-icons-two-tone text-primary mb-1"><FontAwesomeIcon icon="fa-solid fa-users" size="lg" color="#55BED2" /></i>
                                            </div>
                                            <div class="col-sm-8 text-md-center">
                                                <h5 style={{ color: "#fff" }}>1000</h5>
                                                <span>Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 d-none d-md-table-cell d-lg-table-cell d-xl-table-cell card-body br" style={{ borderRight: '1px solid #6C757D' }}>
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <i class="material-icons-two-tone text-primary mb-1"><FontAwesomeIcon icon="fa-solid fa-seedling" size="lg" color="#55BED2" /></i>
                                            </div>
                                            <div class="col-sm-8 text-md-center">
                                                <h5 style={{ color: "#fff" }}>20</h5>
                                                <span>Vegetable</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 card-body">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <i class="material-icons-two-tone text-primary mb-1"><FontAwesomeIcon icon="fa-solid fa-robot" size="lg" color="#55BED2" /></i>
                                            </div>
                                            <div class="col-sm-8 text-md-center">
                                                <h5 style={{ color: "#fff" }}>20</h5>
                                                <span>Robot</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Solar Panel Chart */}
                            <div class="row">
                                <SolarPanelChart />
                            </div>
                        </div>

                        {/* Sales Report Chart */}
                        <SaleReportChart />

                        {/* Production Volume Chart */}
                        <ProductionVolumeChart />

                        {/* Robots Chart */}
                        <RobotChart />

                        {/* Short Summary */}
                        <div class="col-xl-12 col-md-12">
                            <div class="row">
                                <div class="col-xl-3 col-sm-6">
                                    <div class="card prod-p-card background-pattern">
                                        <div class="card-body" style={{ background: '#3E3B64' }}>
                                            <div class="row align-items-center m-b-0">
                                                <div class="col">
                                                    <h6 class="m-b-5" style={{ color: '#fff' }}>Product Stock</h6>
                                                    <h3 class="m-b-0" style={{ color: '#fff' }}>3,456<span style={{ fontSize: 15 }}>&nbsp;&nbsp;boxes</span></h3>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="material-icons-two-tone text-primary"><FontAwesomeIcon icon="fa-solid fa-warehouse" size="lg" color="#55bed2" /></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6">
                                    <div class="card prod-p-card background-pattern">
                                        <div class="card-body" style={{ background: '#3E3B64' }}>
                                            <div class="row align-items-center m-b-0">
                                                <div class="col">
                                                    <h6 class="m-b-5" style={{ color: '#fff' }}>Gross Product</h6>
                                                    <h3 class="m-b-0" style={{ color: '#E9ECEF' }}>$10,678</h3>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="material-icons-two-tone text-primary"><FontAwesomeIcon icon="fa-solid fa-sack-dollar" size="lg" color="#55bed2" /></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6">
                                    <div class="card prod-p-card background-pattern">
                                        <div class="card-body" style={{ background: '#3E3B64' }}>
                                            <div class="row align-items-center m-b-0">
                                                <div class="col">
                                                    <h6 class="m-b-5" style={{ color: '#fff' }}>Total Orders</h6>
                                                    <h3 class="m-b-0" style={{ color: '#E9ECEF' }}>4,321</h3>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="material-icons-two-tone text-primary"><FontAwesomeIcon icon="fa-solid fa-bag-shopping" size="lg" color="#55bed2" /></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6">
                                    <div class="card prod-p-card background-pattern">
                                        <div class="card-body" style={{ background: '#3E3B64' }}>
                                            <div class="row align-items-center m-b-0">
                                                <div class="col">
                                                    <h6 class="m-b-5" style={{ color: '#fff' }}>Product Sold</h6>
                                                    <h3 class="m-b-0" style={{ color: '#fff' }}>1,234</h3>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="material-icons-two-tone text-primary"><FontAwesomeIcon icon="fa-solid fa-tag" size="lg" color="#55bed2" /></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Seed Stock Table */}
                        <SeedStockTable />

                        {/* Product Overview Table */}
                        <FinishedProductTable />
                    </div>
                    {/* Main content [END] */}

                </div>
            </div>
        </>
    );
};

export default Default;
