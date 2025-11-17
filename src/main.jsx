import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import "@radix-ui/themes/styles.css";
import { Theme, Box } from '@radix-ui/themes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme appearance="light" accentColor="red" grayColor="slate" radius="large" scaling="100%">
      <Box style={{
        background: 'linear-gradient(180deg, #EE1515 0%, #F7B731 50%, #FFFFFF 100%)',
        minHeight: '100vh',
        padding: '20px'
      }}>
        <App />
      </Box>
    </Theme>
  </StrictMode>,
)