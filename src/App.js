import './App.css';
import { CartContextProvider } from './hooks/CartContext';

import { HeaderContextProvider } from './hooks/HeaderContext';
import { RestaurantContextProvider } from './hooks/RestaurantContext';

import { Routes } from './routes';

export const App = () => {
    return (
        <CartContextProvider>
            <RestaurantContextProvider>
                <HeaderContextProvider>
                    <div className="app__container">
                        <Routes />
                    </div>
                </HeaderContextProvider>
            </RestaurantContextProvider>
        </CartContextProvider>

    )
}