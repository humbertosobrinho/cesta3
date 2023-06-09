
import mock from './src/mocks/cesta'
import { StatusBar, SafeAreaView ,StyleSheet,  View } from 'react-native';

import { 
    useFonts, 
    Montserrat_400Regular, 
    Montserrat_700Bold } 
    from '@expo-google-fonts/montserrat';

    import Cesta from './src/telas/Cesta/'

export default function App() {
  const [fontCarregada] = useFonts(
    {
      "MontSerratRegular": Montserrat_400Regular,
      "MontSerratBold": Montserrat_700Bold
    }
  );

  if (!fontCarregada){
    return  <View />
  }

  return (
    <View>
      <StatusBar />
      <Cesta {...mock} />
      
    </View>
  );
}
