import { NavBar } from "@/components";
import "@/styles/globals.css";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <ChakraProvider theme={theme}>
          <NavBar />
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}
