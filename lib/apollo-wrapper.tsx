"use client";
import { ApolloLink, HttpLink, InMemoryCache, gql } from "@apollo/client";
import {
    NextSSRApolloClient,
    ApolloNextAppProvider,
    NextSSRInMemoryCache,
    SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { loadErrorMessages, loadDevMessages, loadErrorMessageHandler } from "@apollo/client/dev";
import { setVerbosity } from "ts-invariant";
import { onError } from "@apollo/client/link/error";

if (process.env.NODE_ENV === "development") {
    setVerbosity("debug");
    loadDevMessages();
    loadErrorMessages();
    loadErrorMessageHandler()
}

function makeClient() {
    const cache = new InMemoryCache({
        addTypename: false,
    });
    // const errorLink = onError(({ graphQLErrors, networkError }) => {
    //     console.log(graphQLErrors, networkError);

    //     try {
    //         if (graphQLErrors || networkError) {
    //             throw new Error("Netoooo")
    //         }
    //     } catch (error) {
    //         return graphQLErrors ?? networkError
    //     }

    //     if (networkError) {
    //         // writequery(null, networkError);
    //     }
    // });

    // const httpLink = errorLink.concat(
    //     new HttpLink({
    //         uri: "http://accuratess.mywire.org:8003/graphql",
    //         fetchOptions: { cache: "no-store" },
    //     })
    // )
    const httpLink =
        new HttpLink({
            uri: "http://accuratess.mywire.org:8003/graphql",
            fetchOptions: { cache: "no-store" },
        })



    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link:
            typeof window === "undefined"
                ? ApolloLink.from([
                    // in a SSR environment, if you use multipart features like
                    // @defer, you need to decide how to handle these.
                    // This strips all interfaces with a `@defer` directive from your queries.
                    new SSRMultipartLink({
                        stripDefer: true,
                    }),
                    httpLink,
                ])
                : httpLink,
    });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {

    return (
        <ApolloNextAppProvider makeClient={makeClient} >
            {children}
        </ApolloNextAppProvider>
    );
}