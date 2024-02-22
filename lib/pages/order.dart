import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class OrderPage extends StatelessWidget {
  const OrderPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        titleSpacing: 0,
        title: const Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              '18 minutes',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            Text(
              'Order Summary',
              style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
            ),
          ],
        ),
        leading: IconButton(
          icon: const Icon(Icons.menu, size: 27),
          onPressed: () {
            // Logic
          },
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.shopping_cart_outlined, size: 23),
            onPressed: () {
              // Logic
            },
          ),
          const CircleAvatar(
            radius: 18,
            backgroundImage: AssetImage('assets/mushishi.jpg'),
          ),
          const SizedBox(width: 15),
        ],
        systemOverlayStyle: const SystemUiOverlayStyle(
          statusBarColor: Color(0xFF1C5F4C),
          statusBarIconBrightness: Brightness.light,
        ),
        backgroundColor: const Color(0xFFB6F1DF),
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Cart Summary',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 10),
                  _buildCartItem(
                    'assets/dummy.jpg',
                    'Carrot',
                    '5 kg',
                    '\$25.00',
                  ),
                  const SizedBox(height: 10),
                  _buildCartItem(
                    'assets/dummy.jpg',
                    'Tomato',
                    '2 kg',
                    '\$8.00',
                  ),
                  const SizedBox(height: 10),
                  _buildCartItem(
                    'assets/dummy.jpg',
                    'Broccoli',
                    '3 pieces',
                    '\$6.00',
                  ),
                  const SizedBox(height: 20),
                  const Divider(thickness: 1),
                  const SizedBox(height: 20),
                  const Text(
                    'Bill Details',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 10),
                  _buildBillDetail('Subtotal', '\$39.00'),
                  _buildBillDetail('Shipping', '\$5.00'),
                  _buildBillDetail('Total', '\$44.00'),
                ],
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: const Color(0xFFB6F1DF),
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home_outlined),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.list_alt_outlined),
            label: 'Orders',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.notifications),
            label: 'Notifications',
          ),
        ],
        currentIndex: 1, // Order page
        selectedItemColor: const Color(0xFF1C5F4C),
        showSelectedLabels: false,
        showUnselectedLabels: false,
        onTap: (int index) {
          // Logic
        },
      ),
    );
  }

  Widget _buildCartItem(
      String imagePath, String itemName, String quantity, String price) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        ClipRRect(
          borderRadius: BorderRadius.circular(8),
          child: Image.asset(
            imagePath,
            width: 80,
            height: 80,
            fit: BoxFit.cover,
          ),
        ),
        const SizedBox(width: 10),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              itemName,
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            Text(
              'Quantity: $quantity',
              style: const TextStyle(fontSize: 16),
            ),
            Text(
              'Price: $price',
              style: const TextStyle(fontSize: 16),
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildBillDetail(String title, String value) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(
          title,
          style: const TextStyle(fontSize: 16),
        ),
        Text(
          value,
          style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
        ),
      ],
    );
  }
}
