const production_volume = [
    {
        month: 1,
        good: 2100, // in kg
        reject: 60,    // in kg
        for_qa: 170,      // in kg
    },
    {
        month: 2,
        good: 4322, // in kg
        reject: 55,    // in kg
        for_qa: 356,      // in kg
    }
];

const solar_panel_data = [
    {
        month: 1,
        energy_production: 3000, // in minutes
        performance_ratio: 90,    // in minutes
        capacity_factor: 75,      // in minutes
    },
    {
        month: 2,
        energy_production: 3200, // in minutes
        performance_ratio: 85,    // in minutes
        capacity_factor: 80,      // in minutes
    }
];

const robot = [
    {
        total: 20, // in unit
        active: 17, // in unit
        charging: 2,    // in unit
        under_repair: 1,      // in unit
    }
];

const sales_report = [
    // In dollars
    { time: "01/01/2023", total_sales: 5000, average_sales: 5000 },
    { time: "02/01/2023", total_sales: 6000, average_sales: 5500 },
    { time: "03/01/2023", total_sales: 7500, average_sales: 6166.67 },
    { time: "04/01/2023", total_sales: 8200, average_sales: 6675 },
    { time: "05/01/2023", total_sales: 7000, average_sales: 6540 },
    { time: "06/01/2023", total_sales: 6800, average_sales: 6616.67 },
    { time: "07/01/2023", total_sales: 9000, average_sales: 7021.43 },
    { time: "08/01/2023", total_sales: 8500, average_sales: 7200 },
    { time: "09/01/2023", total_sales: 7800, average_sales: 7266.67 },
    { time: "10/01/2023", total_sales: 8200, average_sales: 7420 },
    { time: "11/01/2023", total_sales: 9500, average_sales: 7663.64 }
];

const seed_stock_data = [
    {
        item: 'Cabbage',
        netWeight: '50 kg',
        inStock: '20 kg',
        planter: '25 kg',
        expirationDate: '05 Mar 2024',
        quantity: '10000 kg',
        stockLevel: 'Low',
        stockStatus: 'danger'
    },
    {
        item: 'Carrot',
        netWeight: '30 kg',
        inStock: '15 kg',
        planter: '20 kg',
        expirationDate: '10 Mar 2024',
        quantity: '8000 kg',
        stockLevel: 'Mid',
        stockStatus: 'warning'
    },
    {
        item: 'Broccoli',
        netWeight: '40 kg',
        inStock: '25 kg',
        planter: '30 kg',
        expirationDate: '15 Mar 2024',
        quantity: '12000 kg',
        stockLevel: 'High',
        stockStatus: 'success'
    },
    {
        item: 'Spinach',
        netWeight: '20 kg',
        inStock: '10 kg',
        planter: '15 kg',
        expirationDate: '08 Mar 2024',
        quantity: '6000 kg',
        stockLevel: 'Mid',
        stockStatus: 'warning'
    },
    {
        item: 'Tomato',
        netWeight: '35 kg',
        inStock: '18 kg',
        planter: '22 kg',
        expirationDate: '12 Mar 2024',
        quantity: '8500 kg',
        stockLevel: 'Mid',
        stockStatus: 'warning'
    },
    {
        item: 'Lettuce',
        netWeight: '25 kg',
        inStock: '12 kg',
        planter: '18 kg',
        expirationDate: '07 Mar 2024',
        quantity: '7500 kg',
        stockLevel: 'Low',
        stockStatus: 'danger'
    },
    {
        item: 'Bell Pepper',
        netWeight: '45 kg',
        inStock: '22 kg',
        planter: '28 kg',
        expirationDate: '11 Mar 2024',
        quantity: '9000 kg',
        stockLevel: 'High',
        stockStatus: 'success'
    },
    {
        item: 'Cauliflower',
        netWeight: '55 kg',
        inStock: '30 kg',
        planter: '35 kg',
        expirationDate: '17 Mar 2024',
        quantity: '11000 kg',
        stockLevel: 'High',
        stockStatus: 'success'
    },
    {
        item: 'Radish',
        netWeight: '15 kg',
        inStock: '8 kg',
        planter: '12 kg',
        expirationDate: '09 Mar 2024',
        quantity: '5000 kg',
        stockLevel: 'Low',
        stockStatus: 'danger'
    },
    {
        item: 'Onion',
        netWeight: '60 kg',
        inStock: '28 kg',
        planter: '32 kg',
        expirationDate: '14 Mar 2024',
        quantity: '10000 kg',
        stockLevel: 'High',
        stockStatus: 'success'
    }
];

const product_finished_data = [
    {
        product: 'Iceberg Lettuce',
        netWeight: '12 kg',
        manufacturingDate: '09 Sep 2023',
        expirationDate: '09 Sep 2024',
        quantity: '10000 boxes',
        stockLevel: 'Low',
        stockStatus: 'danger'
    },
    {
        product: 'Tomato',
        netWeight: '10 kg',
        manufacturingDate: '10 Sep 2023',
        expirationDate: '10 Sep 2024',
        quantity: '8000 boxes',
        stockLevel: 'Mid',
        stockStatus: 'warning'
    },
    {
        product: 'Broccoli',
        netWeight: '14 kg',
        manufacturingDate: '11 Sep 2023',
        expirationDate: '11 Sep 2024',
        quantity: '12000 boxes',
        stockLevel: 'High',
        stockStatus: 'success'
    },
    {
        product: 'Spinach',
        netWeight: '8 kg',
        manufacturingDate: '12 Sep 2023',
        expirationDate: '12 Sep 2024',
        quantity: '6000 boxes',
        stockLevel: 'Mid',
        stockStatus: 'warning'
    },
    {
        product: 'Tomato',
        netWeight: '10 kg',
        manufacturingDate: '13 Sep 2023',
        expirationDate: '13 Sep 2024',
        quantity: '8500 boxes',
        stockLevel: 'Mid',
        stockStatus: 'warning'
    },
    {
        product: 'Lettuce',
        netWeight: '11 kg',
        manufacturingDate: '14 Sep 2023',
        expirationDate: '14 Sep 2024',
        quantity: '7500 boxes',
        stockLevel: 'Low',
        stockStatus: 'danger'
    },
    {
        product: 'Bell Pepper',
        netWeight: '15 kg',
        manufacturingDate: '15 Sep 2023',
        expirationDate: '15 Sep 2024',
        quantity: '9000 boxes',
        stockLevel: 'High',
        stockStatus: 'success'
    },
    {
        product: 'Cauliflower',
        netWeight: '16 kg',
        manufacturingDate: '16 Sep 2023',
        expirationDate: '16 Sep 2024',
        quantity: '11000 boxes',
        stockLevel: 'High',
        stockStatus: 'success'
    },
    {
        product: 'Radish',
        netWeight: '9 kg',
        manufacturingDate: '17 Sep 2023',
        expirationDate: '17 Sep 2024',
        quantity: '5000 boxes',
        stockLevel: 'Low',
        stockStatus: 'danger'
    },
    {
        product: 'Onion',
        netWeight: '13 kg',
        manufacturingDate: '18 Sep 2023',
        expirationDate: '18 Sep 2024',
        quantity: '10000 boxes',
        stockLevel: 'High',
        stockStatus: 'success'
    }
];