/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostItem__Post = {
    readonly id: string;
    readonly user: {
        readonly userName: string;
    };
    readonly content: string;
    readonly " $refType": "PostItem__Post";
};
export type PostItem__Post$data = PostItem__Post;
export type PostItem__Post$key = {
    readonly " $data"?: PostItem__Post$data;
    readonly " $fragmentRefs": FragmentRefs<"PostItem__Post">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostItem__Post",
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
  "type": "Post",
  "abstractKey": null
};
(node as any).hash = '64a636a102457245f70f2e69b7297997';
export default node;
