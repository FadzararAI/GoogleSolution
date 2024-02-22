import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:urban_green_nest_00/pages/order.dart';

class ProductPage extends StatelessWidget {
  const ProductPage({Key? key}) : super(key: key);

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
              'Product Details',
              style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
            ),
          ],
        ),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, size: 27),
          onPressed: () {
            Navigator.pop(context);
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
            AspectRatio(
              aspectRatio: 16 / 9,
              child: PageView(
                children: [
                  Image.asset(
                    'assets/dummy.jpg',
                    fit: BoxFit.cover,
                  ),
                  Image.asset(
                    'assets/dummy.jpg',
                    fit: BoxFit.cover,
                  ),
                  Image.asset(
                    'assets/dummy.jpg',
                    fit: BoxFit.cover,
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Vegetable Product 1',
                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 10),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text(
                        'Unit:',
                        style: TextStyle(fontSize: 18),
                      ),
                      Row(
                        children: [
                          _buildUnitButton(context, 'KG'),
                          _buildUnitButton(context, 'G'),
                          _buildUnitButton(context, 'PIECE'),
                          _buildUnitButton(context, 'BOX'),
                        ],
                      ),
                    ],
                  ),
                  const SizedBox(height: 10),
                  const Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        'Quantity:',
                        style: TextStyle(fontSize: 18),
                      ),
                      Text(
                        '10',
                        style: TextStyle(fontSize: 18),
                      ),
                    ],
                  ),
                  const SizedBox(height: 10),
                  const Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        'Price:',
                        style: TextStyle(fontSize: 18),
                      ),
                      Text(
                        '\$5.00',
                        style: TextStyle(fontSize: 18),
                      ),
                    ],
                  ),
                  const SizedBox(height: 20),
                  const Text(
                    'Similar Products',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 10),
                  Column(
                    children: [
                      SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        child: Row(
                          children: [
                            _buildSimilarProductItem('assets/dummy.jpg'),
                            _buildSimilarProductItem('assets/dummy.jpg'),
                            _buildSimilarProductItem('assets/dummy.jpg'),
                            _buildSimilarProductItem('assets/dummy.jpg'),
                          ],
                        ),
                      ),
                      const SizedBox(height: 10),
                      SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        child: Row(
                          children: [
                            _buildSimilarProductItem('assets/dummy.jpg'),
                            _buildSimilarProductItem('assets/dummy.jpg'),
                            _buildSimilarProductItem('assets/dummy.jpg'),
                            _buildSimilarProductItem('assets/dummy.jpg'),
                          ],
                        ),
                      ),
                    ],
                  )
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
        selectedItemColor: const Color(0xFF1C5F4C),
        showSelectedLabels: false,
        showUnselectedLabels: false,
        onTap: (int index) {
          // Logic
        },
      ),
    );
  }

Widget _buildUnitButton(BuildContext context, String unit) {
  return Padding(
    padding: const EdgeInsets.symmetric(horizontal: 2.0),
    child: ElevatedButton(
      onPressed: () {
        // Navigation logic
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => const OrderPage()),
        );
      },
      child: Text(unit),
    ),
  );
}

  Widget _buildSimilarProductItem(String imagePath) {
    return Padding(
      padding: const EdgeInsets.only(right: 10),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(8),
        child: Image.asset(
          imagePath,
          width: 100,
          height: 100,
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}
