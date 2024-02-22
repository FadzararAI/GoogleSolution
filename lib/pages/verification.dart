import 'package:flutter/material.dart';
import 'home.dart';

class VerificationPage extends StatelessWidget {
  const VerificationPage({Key? key}) : super(key: key);

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
            const SizedBox(height: 100),
            Padding(
              padding: const EdgeInsets.fromLTRB(50, 0, 50, 20),
              child: RichText(
                textAlign: TextAlign.center,
                text: const TextSpan(
                  style: TextStyle(
                    color: Color(0xFF1C5F4C),
                    fontSize: 16,
                  ),
                  children: [
                    TextSpan(
                      text: 'We have sent ',
                    ),
                    TextSpan(
                      text: 'One Time Password',
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                    TextSpan(
                      text: ' to your phone number.',
                    ),
                  ],
                ),
              ),
            ),
            const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                OTPDigitField(),
                SizedBox(width: 10),
                OTPDigitField(),
                SizedBox(width: 10),
                OTPDigitField(),
                SizedBox(width: 10),
                OTPDigitField(),
              ],
            ),
            const SizedBox(height: 70),
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const HomePage()),
                );
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF1C5F4C),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
              ),
              child: const Padding(
                padding: EdgeInsets.all(12.0),
                child: Text(
                  'Continue',
                  style: TextStyle(
                      fontSize: 18,
                      color: Colors.white,
                      fontWeight: FontWeight.bold),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class OTPDigitField extends StatelessWidget {
  const OTPDigitField({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const SizedBox(
      width: 50,
      child: TextField(
        keyboardType: TextInputType.number,
        maxLength: 1,
        textAlign: TextAlign.center,
        cursorColor: Color(0xFF1C5F4C),
        style: TextStyle(fontSize: 20),
        decoration: InputDecoration(
          counterText: '',
          focusedBorder: UnderlineInputBorder(
            borderSide: BorderSide(width: 2, color: Color(0xFF1C5F4C)),
          ),
          enabledBorder: UnderlineInputBorder(
            borderSide: BorderSide(width: 2, color: Colors.black),
          ),
        ),
      ),
    );
  }
}
