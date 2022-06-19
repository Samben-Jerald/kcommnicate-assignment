import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import AppSetting from './Pages/AppSettingPage';
import Homepage from './Pages/HomeScreen';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/app-setting" element={<AppSetting />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
