import React, { useEffect, useState } from "react";
import { getDocs, collection } from 'firebase/firestore';
import firestore from '../../config/firebase';

const FinishedProductTable = () => {
    const [productStockData, setProductStockData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const snapshot = await getDocs(collection(firestore, 'product_finished'));
            const data = snapshot.docs.map(doc => doc.data());
            setProductStockData(data);
        } catch (error) {
            console.error('Error fetching product stock data:', error);
        }
    }

    return (
        <>
            <div class="col-xl-12 col-md-12">
                <div class="card table-card" style={{ backgroundColor: '#3E3B64' }}>
                    <div class="card-header">
                        <h5 style={{ color: '#fff', marginLeft: '-5px', fontSize: 15 }}>Finished Products Inventory Overview</h5>
                    </div>
                    <div class="pro-scroll-2" style={{ height: 300, position: 'relative' }}>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-hover m-b-0">
                                    <thead>
                                        <tr style={{ borderWidth: '10px' }}>
                                            <th style={{ background: '#4D4B6C', color: '#fff' }}>Product</th>
                                            <th style={{ background: '#4D4B6C', color: '#fff' }}>Net Weight</th>
                                            <th style={{ background: '#4D4B6C', color: '#fff' }}>Manufacturing Date</th>
                                            <th style={{ background: '#4D4B6C', color: '#fff' }}>Expiration Date</th>
                                            <th style={{ background: '#4D4B6C', color: '#fff' }}>Quantity</th>
                                            <th style={{ background: '#4D4B6C', color: '#fff', textAlign: 'center' }}>Stock Level</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ color: '#E9ECEF' }}>
                                        {/* <tr>
                                            <td>Iceberge Lettuce</td>
                                            <td>12 kg</td>
                                            <td>09 Sep 2023 kg</td>
                                            <td>09 Sep 5</td>
                                            <td>10000 boxes</td>
                                            <td style={{ textAlign: 'center' }}>
                                                <div><label class="badge bg-light-success">Full</label></div>
                                            </td>
                                        </tr> */}

                                        {productStockData.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.product}</td>
                                                <td>{item.netWeight}</td>
                                                <td>{item.manufacturingDate}</td>
                                                <td>{item.expirationDate}</td>
                                                <td>{item.quantity}</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <div>
                                                        <label class={`badge bg-light-${item.stockStatus}`}>{item.stockLevel}</label>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FinishedProductTable;
