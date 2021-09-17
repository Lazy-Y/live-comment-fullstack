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
        readonly " $fragmentRefs": FragmentRefs<"UserProfile__User">;
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
  }
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
    "cacheID": "f84d75f98f59eb0230ef2cd3ee90218d",
    "id": null,
    "metadata": {},
    "name": "AppContainerQuery",
    "operationKind": "query",
    "text": "query AppContainerQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    ...UserProfile__User\n  }\n}\n\nfragment UserProfile__User on User {\n  id\n  userName\n}\n"
  }
};
})();
(node as any).hash = '80fac6c70edf0c0ed7ca0716c13ee0d9';
export default node;
