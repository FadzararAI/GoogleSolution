import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'verification.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const Padding(
              padding: EdgeInsets.fromLTRB(50, 0, 50, 0),
              child: Text(
                'We are serving everyone\'s Favorite.',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: Color(0xFF1C5F4C),
                  fontSize: 20,
                ),
              ),
            ),
            const SizedBox(height: 10),
            Image.asset(
              'assets/ugn-logo.png',
              height: 300,
              width: 320,
            ),
            const SizedBox(height: 20),

            // TextField(
            //   decoration: InputDecoration(
            //     hintText: "(+91) Phone Number",
            //     suffixIcon: IconButton(
            //       icon: const Icon(Icons.send),
            //       onPressed: () {
            //         // Action when send button is pressed
            //       },
            //     ),
            //   ),
            // ),
            Container(
              decoration: BoxDecoration(
                border:
                    Border.all(color: Colors.grey), // Add border on all sides
                borderRadius: BorderRadius.circular(10.0), // Add border radius
              ),
              child: TextField(
                inputFormatters: [FilteringTextInputFormatter.digitsOnly],
                textAlign: TextAlign.center,
                decoration: InputDecoration(
                  hintText: "(+91) Phone Number",
                  border:
                      InputBorder.none, // Remove default border of TextField
                  contentPadding: const EdgeInsets.all(
                      10.0), // Add padding inside TextField
                  suffixIcon: IconButton(
                    icon: const Icon(Icons.send),
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => const VerificationPage()),
                      );
                    },
                  ),
                ),
              ),
            ),
            const SizedBox(height: 30),

            const Row(
              children: [
                Expanded(child: Divider(color: Colors.black)),
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 20.0),
                  child: Text(
                    'OR',
                    textAlign: TextAlign.center,
                    style: TextStyle(color: Colors.black, fontSize: 18),
                  ),
                ),
                Expanded(child: Divider(color: Colors.black)),
              ],
            ),
            const SizedBox(height: 40),

            SizedBox(
              height: 40,
              child: Padding(
                padding: const EdgeInsets.symmetric(
                    horizontal: 60.0), // Add horizontal padding
                child: ElevatedButton.icon(
                  onPressed: () {},
                  icon: const Icon(
                    FontAwesomeIcons.facebook,
                    size: 24,
                    color: Colors.white,
                  ),
                  label: const Text(
                    'Sign Up with Facebook',
                    style: TextStyle(
                        color: Colors.white, fontWeight: FontWeight.bold),
                  ),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF3F579D),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(
                          10), // Customize the border radius
                    ),
                  ),
                ),
              ),
            ),
            const SizedBox(height: 10),

            SizedBox(
              height: 40,
              child: Padding(
                padding: const EdgeInsets.symmetric(
                    horizontal: 60.0), // Add horizontal padding
                child: ElevatedButton.icon(
                  onPressed: () {},
                  icon: const Icon(
                    FontAwesomeIcons.google,
                    size: 24,
                    color: Colors.white,
                  ),
                  label: const Text(
                    'Sign Up with Google',
                    style: TextStyle(
                        color: Colors.white, fontWeight: FontWeight.bold),
                  ),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFFDB4437),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(
                          10), // Customize the border radius
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
