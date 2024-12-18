import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@/providers/theme-provider.tsx";

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta/",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme="dark" storageKey="game-theme">
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>
);
