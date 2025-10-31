"use client";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import AuthInitializer from "../initializers/AuthInitializer";
import { Toaster } from "@/components/ui/sonner";

export default function ClientProvider({ children }) {
  return (
    <Provider store={store}>
      <AuthInitializer>{children}</AuthInitializer>
      <Toaster />
    </Provider>
  );
}
