import React from 'react';
import Home from './components/organisms/Home/Home';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { Auth0Provider } from "@auth0/auth0-react";

function App() 
{
  return (
    <Auth0Provider
    domain="srivyshnavikoduri.us.auth0.com"
    clientId="HvaUBy0zdMR2h1P1Uk8wWMdmdVhNVMHR"
    redirectUri={window.location.origin}>
    <ThemeProvider theme={theme}>
    <Home />
    </ThemeProvider>
    </Auth0Provider>
  );
}
export default App;
