/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserProfile__User = {
    readonly id: string;
    readonly userName: string;
    readonly " $refType": "UserProfile__User";
};
export type UserProfile__User$data = UserProfile__User;
export type UserProfile__User$key = {
    readonly " $data"?: UserProfile__User$data;
    readonly " $fragmentRefs": FragmentRefs<"UserProfile__User">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserProfile__User",
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
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'e01c53789d80ba3c95cbf509a367c484';
export default node;
