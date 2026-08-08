"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { shopifyClientBrowser as shopifyClient } from "./client-browser";
import { CART_CREATE_MUTATION, CART_LINES_ADD_MUTATION } from "./mutation";
import { CART_QUERY } from "./queries";

type CartContextType = {
  cartId: string | null;
  totalQuantity: number;
  checkoutUrl: string | null;
  addToCart: (merchandiseId: string, quantity?: number) => Promise<void>;
  isLoading: boolean;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartId, setCartId] = useState<string | null>(null);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("shopify_cart_id");
    if (!stored) return;

    setCartId(stored);

    // Recupera el carrito real de Shopify, por si cambió desde la última visita
    // (ej. el usuario compró en otro dispositivo, o el carrito expiró)
    shopifyClient
      .request(CART_QUERY, { variables: { cartId: stored } })
      .then(({ data }) => {
        const cart = data?.cart;
        if (cart) {
          setTotalQuantity(cart.totalQuantity);
          setCheckoutUrl(cart.checkoutUrl);
        } else {
          // El carrito ya no existe (expiró o se completó la compra)
          localStorage.removeItem("shopify_cart_id");
          setCartId(null);
        }
      })
      .catch(() => {
        localStorage.removeItem("shopify_cart_id");
        setCartId(null);
      });
  }, []);

  async function addToCart(merchandiseId: string, quantity = 1) {
    setIsLoading(true);
    try {
      if (!cartId) {
        const { data } = await shopifyClient.request(CART_CREATE_MUTATION, {
          variables: { lines: [{ merchandiseId, quantity }] },
        });
        const cart = data?.cartCreate?.cart;
        if (cart) {
          setCartId(cart.id);
          setTotalQuantity(cart.totalQuantity);
          setCheckoutUrl(cart.checkoutUrl);
          localStorage.setItem("shopify_cart_id", cart.id);
        }
      } else {
        const { data } = await shopifyClient.request(CART_LINES_ADD_MUTATION, {
          variables: { cartId, lines: [{ merchandiseId, quantity }] },
        });
        const cart = data?.cartLinesAdd?.cart;
        if (cart) {
          setTotalQuantity(cart.totalQuantity);
          setCheckoutUrl(cart.checkoutUrl);
        }
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CartContext.Provider
      value={{ cartId, totalQuantity, checkoutUrl, addToCart, isLoading }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}