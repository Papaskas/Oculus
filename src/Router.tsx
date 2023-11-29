import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import App from '@/App';
import Container from '@/components/Container';
import Documentation from '@/pages/Documentation';
import MatchesNotFound from '@/pages/MatchesNotFound';
import TicTacToe from '@/pages/TicTacToe';

function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Container />}>
                    <Route index element={<App />} />
                    <Route path="/ticTacToe" element={<TicTacToe />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="*" element={<MatchesNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
