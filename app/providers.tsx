"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  type Dispatch,
} from "react";
import { cartReducer, type CartState, type CartAction } from "@/lib/cart";

const STORAGE_KEY = "maison-cart";

const initialState: CartState = { items: [], isOpen: false };

interface CartContextValue {
  state: CartState;
  dispatch: Dispatch<CartAction>;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState,
    // Hydrate from localStorage on first render
    (init) => {
      if (typeof window === "undefined") return init;
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? { ...init, items: JSON.parse(stored) } : init;
      } catch {
        return init;
      }
    }
  );

  // Keep localStorage in sync whenever items change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
