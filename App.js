// Context
import { AuthProvider } from './src/common/context/AuthContext';

// React Native Toastify
import Toast from 'react-native-toast-message';

// Components
import RootNavigation from './src/navigation/RootNavigation'

export default function App() {
    return (
        <AuthProvider>
            <RootNavigation />
            <Toast />
        </AuthProvider>
    );
}