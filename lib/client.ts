import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
    console.log("ksjdkf");
    const cache = new InMemoryCache({
        addTypename: false,
    });

    // const errorLink = onError(({ graphQLErrors, networkError }) => {
    //     console.log(graphQLErrors);
    //     if (true){
    //         throw new Error("hassan",{cause:graphQLErrors})
    //     }
    //     if (graphQLErrors) {
    //         graphQLErrors.forEach(({ message, locations, path }) => {
    //             console.log(graphQLErrors);
    //         });
    //     }
    //     if (networkError) {
    //         writequery(null, networkError);
    //     }
    // });

    return new ApolloClient({
        cache: cache,
        link:
            new HttpLink({
                uri: "http://accuratess.mywire.org:8003/graphql",
                fetchOptions: { cache: "no-store" },
            })

    });
});
