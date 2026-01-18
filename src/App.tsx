import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Root } from './screens/Root'
import '../global.css'

export default function App () {
  return (
    <SafeAreaProvider>
      <Root />
    </SafeAreaProvider>
  )
}
