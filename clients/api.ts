// import {GraphQLClient} from "graphql-request"
// const isClient=typeof window !== 'undefined'
// export const graphqlClient =new GraphQLClient("http://localhost:8412/graphql")
   /*
   {
    headers: ()=>({
        Authorization: isClient? `Bearer ${window.localStorage.getItem("__app_token")}` : "",
        */
        import { GraphQLClient } from "graphql-request";

        const isClient = typeof window !== "undefined";
        
        export const graphqlClient = new GraphQLClient(
          "http://localhost:8412/graphql",
          {
            headers: () => ({
              Authorization: isClient
                ? `Bearer ${window.localStorage.getItem("__twitter_token")}`
                : "",
            }),
          }
        );