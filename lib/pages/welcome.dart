import 'package:flutter/material.dart';
import 'login.dart';

class WelcomePage extends StatelessWidget {
  final String title;
  const WelcomePage({Key? key, required this.title}) : super(key: key);
  // const WelcomePage({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            stops: [0.0, 0.6, 0.65, 0.70, 0.82, 1.0],
            colors: [
              Color.fromRGBO(103, 247, 204, 0.55),
              Color(0xFFB6F1DF),
              Color.fromRGBO(151, 232, 208, 0.85),
              Color.fromRGBO(114, 222, 190, 0.65),
              Color.fromRGBO(81, 213, 173, 0.5),
              Color.fromRGBO(125, 191, 171, 0.9),
            ],
          ),
        ),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Image.asset(
                'assets/ugn-logo.png',
                width: 350,
              ),
              const SizedBox(height: 100), // space
              const Padding(
                padding: EdgeInsets.symmetric(horizontal: 100),
                child: Text(
                  'Vegetables: A Culinary Canvas of Health',
                  style: TextStyle(
                    fontWeight: FontWeight.w800,
                    fontSize: 18,
                    letterSpacing: 0.3,
                    color: Colors.black,
                    height: 1.2,
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
              const SizedBox(height: 150), // space
              Container(
                width: 340,
                height: 40,
                decoration: BoxDecoration(
                  border: Border.all(
                    width: 2,
                    color: const Color.fromRGBO(125, 191, 171, 0.99),
                  ),
                  borderRadius: BorderRadius.circular(15),
                  color: const Color(0xFF1C5F4C),
                ),
                child: ElevatedButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => const LoginPage()),
                    );
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.transparent,
                    elevation: 0,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                  ),
                  child: const Text(
                    'Get Started',
                    style: TextStyle(
                      fontSize: 14,
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
