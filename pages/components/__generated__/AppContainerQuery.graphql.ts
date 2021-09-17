/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppContainerQueryVariables = {
    id: string;
};
export type AppContainerQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"UserProfile__User" | "PostComposer__User">;
    };
};
export type AppContainerQuery = {
    readonly response: AppContainerQueryResponse;
    readonly variables: AppContainerQueryVariables;
};



/*
query AppContainerQuery(
  $id: ID!
) {
  user(id: $id) {
    ...UserProfile__User
    ...PostComposer__User
  }
}

fragment PostComposer__User on User {
  id
}

fragment UserProfile__User on User {
  id
  userName
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppContainerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserProfile__User"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PostComposer__User"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppContainerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userName",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "96ec1a48b675c37913c68c97585c57f4",
    "id": null,
    "metadata": {},
    "name": "AppContainerQuery",
    "operationKind": "query",
    "text": "query AppContainerQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    ...UserProfile__User\n    ...PostComposer__User\n  }\n}\n\nfragment PostComposer__User on User {\n  id\n}\n\nfragment UserProfile__User on User {\n  id\n  userName\n}\n"
  }
};
})();
(node as any).hash = '10a63ece3311025912150ab430b2901b';
export default node;
