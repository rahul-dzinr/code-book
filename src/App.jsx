import { Header } from "./components";
import AllRoutes from "./routes/AllRoutes";
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen transition-colors duration-200">
          <Header />
          <AllRoutes />
        </div>
      </ThemeProvider>
    </Router>
  );
}