import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:urban_green_nest_00/pages/product.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

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
              'Home - 10 downing street',
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

      // Body
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Padding(
            padding: const EdgeInsets.all(15.0),
            child: SizedBox(
              height: 55.0,
              child: TextField(
                decoration: InputDecoration(
                  hintText: 'Search for vegetables...',
                  prefixIcon: const Icon(Icons.search),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(30.0),
                  ),
                  focusedBorder: OutlineInputBorder(
                    borderSide: const BorderSide(color: Color(0xFFB6F1DF)),
                    borderRadius: BorderRadius.circular(20.0),
                  ),
                ),
              ),
            ),
          ),
          Container(
            height: 200,
            margin: const EdgeInsets.symmetric(vertical: 10.0),
            child: ListView.builder(
              scrollDirection: Axis.horizontal,
              itemCount: 5, // Number of featured items
              itemBuilder: (BuildContext context, int index) {
                return Container(
                  width: 200,
                  margin: const EdgeInsets.only(right: 2.0),
                  color: Colors.grey[300],
                  child: Center(
                    child: Text('Featured Item ${index + 1}'),
                  ),
                );
              },
            ),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: 10, // Number of vegetable products
              itemBuilder: (BuildContext context, int index) {
                return ListTile(
                  title: Text('Vegetable Product $index'),
                  subtitle: const Text('Price: \$10'),
                  leading: const CircleAvatar(
                    backgroundImage: AssetImage('assets/logo-sm.png'),
                  ),
                  trailing: IconButton(
                    icon: const Icon(Icons.add_shopping_cart),
                    onPressed: () {
                      // Logic
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => const ProductPage()),
                      );
                    },
                  ),
                );
              },
            ),
          ),
        ],
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
        currentIndex: 0, // Home page
        selectedItemColor: const Color(0xFF1C5F4C),
        showSelectedLabels: false,
        showUnselectedLabels: false,
        onTap: (int index) {
          // Logic
        },
      ),
    );
  }
}
