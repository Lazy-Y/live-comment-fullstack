/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostListSubscriptionVariables = {
    connections: Array<string>;
};
export type PostListSubscriptionResponse = {
    readonly postAdded: {
        readonly edge: {
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"PostItem__Post">;
            };
            readonly cursor: string;
        };
    };
};
export type PostListSubscription = {
    readonly response: PostListSubscriptionResponse;
    readonly variables: PostListSubscriptionVariables;
};



/*
subscription PostListSubscription {
  postAdded {
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostListSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CreatePostResponse",
        "kind": "LinkedField",
        "name": "postAdded",
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
              (v1/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostListSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CreatePostResponse",
        "kind": "LinkedField",
        "name": "postAdded",
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
              (v1/*: any*/)
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
    "cacheID": "15bda0feaf92fd765e49e3c39175016e",
    "id": null,
    "metadata": {},
    "name": "PostListSubscription",
    "operationKind": "subscription",
    "text": "subscription PostListSubscription {\n  postAdded {\n    edge {\n      node {\n        ...PostItem__Post\n      }\n      cursor\n    }\n  }\n}\n\nfragment PostItem__Post on Post {\n  id\n  user {\n    userName\n  }\n  content\n}\n"
  }
};
})();
(node as any).hash = '1336039b6222747b11d95f9ea30e0f54';
export default node;
