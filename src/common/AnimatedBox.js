import posed from "react-native-pose";

const config = {
  visible: { y: 0 },
  hidden: { y: -500 }
};

const AnimatedBox = posed.View(config);

export default AnimatedBox;
