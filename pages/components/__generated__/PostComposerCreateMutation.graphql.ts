/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostComposerCreateMutationVariables = {
    userID: string;
    content: string;
    connections: Array<string>;
};
export type PostComposerCreateMutationResponse = {
    readonly createPost: {
        readonly edge: {
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"PostItem__Post">;
            };
            readonly cursor: string;
        };
    };
};
export type PostComposerCreateMutation = {
    readonly response: PostComposerCreateMutationResponse;
    readonly variables: PostComposerCreateMutationVariables;
};



/*
mutation PostComposerCreateMutation(
  $userID: ID!
  $content: String!
) {
  createPost(userID: $userID, content: $content) {
    edge {
      node {
        ...PostItem__Post
      }
      cursor
    }
  }
}

fragment PostItem__Post on Post {
  id
  user {
    userName
  }
  content
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "content"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userID"
},
v3 = [
  {
    "kind": "Variable",
    "name": "content",
    "variableName": "content"
  },
  {
    "kind": "Variable",
    "name": "userID",
    "variableName": "userID"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostComposerCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "CreatePostResponse",
        "kind": "LinkedField",
        "name": "createPost",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PostEdge",
            "kind": "LinkedField",
            "name": "edge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Post",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "PostItem__Post"
                  }
                ],
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "PostComposerCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "CreatePostResponse",
        "kind": "LinkedField",
        "name": "createPost",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PostEdge",
            "kind": "LinkedField",
            "name": "edge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Post",
                "kind": "LinkedField",
                "name": "node",
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
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "userName",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "content",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "edge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f290e12efeafc4b6659112b0ca937d81",
    "id": null,
    "metadata": {},
    "name": "PostComposerCreateMutation",
    "operationKind": "mutation",
    "text": "mutation PostComposerCreateMutation(\n  $userID: ID!\n  $content: String!\n) {\n  createPost(userID: $userID, content: $content) {\n    edge {\n      node {\n        ...PostItem__Post\n      }\n      cursor\n    }\n  }\n}\n\nfragment PostItem__Post on Post {\n  id\n  user {\n    userName\n  }\n  content\n}\n"
  }
};
})();
(node as any).hash = 'b3e458c4c80aa47c504cf784fc3bdff1';
export default node;
