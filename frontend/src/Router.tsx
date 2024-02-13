import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from '@/components/Layout';
import App from '@/pages/Home';
import Documentation from '@/pages/Documentation';
import NotFound from '@/pages/NotFound';
import TicTacToe from '@/pages/TicTacToe';


function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/ticTacToe" element={<TicTacToe />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
