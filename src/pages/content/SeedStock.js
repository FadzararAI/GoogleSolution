import React, { useEffect, useState } from "react";
import { getDocs, collection } from 'firebase/firestore';
import firestore from '../../config/firebase';

const SeedStockTable = () => {
    const [seedStockData, setSeedStockData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const snapshot = await getDocs(collection(firestore, 'seed_stock'));
            const data = snapshot.docs.map(doc => doc.data());
            setSeedStockData(data);
        } catch (error) {
            console.error('Error fetching seed stock data:', error);
        }
    }

    return (
        <>
            <div class="col-xl-12 col-md-12">
                <div class="card table-card" style={{ backgroundColor: '#3E3B64' }}>
                    <div class="card-header">
                        <h5 style={{ color: '#fff', marginLeft: '-5px', fontSize: 15 }}>Seed Stock</h5>
                    </div>
                    <div class="pro-scroll" style={{ height: 300, position: 'relative' }}>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-hover m-b-0">
                                    <thead>
                                        <tr style={{ borderWidth: '10px' }}>
                                            <th style={{ background: '#4D4B6C', color: '#fff' }}>Item</th>
                                            <th style={{ background: '#4D4B6C', color: '#fff' }}>Net Weight</th>
                                            <th style={{ background: '#4D4B6C', color: '#fff' }}>In Stock</th>
                                            <th style={{ background: '#4D4B6C', color: '#fff' }}>Planter</th>
                                            <th style={{ background: '#4D4B6C', color: '#fff' }}>Expiration Date</th>
                                            <th style={{ background: '#4D4B6C', color: '#fff' }}>Quantity</th>
                                            <th style={{ background: '#4D4B6C', color: '#fff', textAlign: 'center' }}>Stock Level</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ color: '#E9ECEF' }}>
                                        {seedStockData.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.item}</td>
                                                <td>{item.netWeight}</td>
                                                <td>{item.inStock}</td>
                                                <td>{item.planter}</td>
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

export default SeedStockTable;