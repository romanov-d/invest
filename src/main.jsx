import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import FinancialModelPage from './components/FinancialModelPage.jsx';
import { LanguageProvider } from './components/LanguageContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/financial-model" element={<FinancialModelPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)
