import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'pages/welcome.dart';

// void main() {
//   runApp(const UrbanGreenNest());
// }

void main() => runApp(const UrbanGreenNest());

class UrbanGreenNest extends StatelessWidget {
  const UrbanGreenNest({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(const SystemUiOverlayStyle(
      statusBarColor: Color(0xFF1C5F4C), // Change the status bar color
      statusBarIconBrightness: Brightness.light, // Change the status bar's text color
    ));

    return const MaterialApp(
      title: 'Urban Green Nest',
      home: WelcomePage(title: 'Welcome Page'),
    );
  }
}