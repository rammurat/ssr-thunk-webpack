import React from 'react'
import { hydrate } from 'react-dom'
import App from '../shared/App'
import { BrowserRouter } from 'react-router-dom'


hydrate(
  <BrowserRouter>
    <App {...this.props}/>
  </BrowserRouter>,
  document.getElementById('app')
);