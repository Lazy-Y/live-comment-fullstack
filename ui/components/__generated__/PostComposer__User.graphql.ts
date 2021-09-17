/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostComposer__User = {
    readonly id: string;
    readonly " $refType": "PostComposer__User";
};
export type PostComposer__User$data = PostComposer__User;
export type PostComposer__User$key = {
    readonly " $data"?: PostComposer__User$data;
    readonly " $fragmentRefs": FragmentRefs<"PostComposer__User">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostComposer__User",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'f8a2799b824fee699371d72bd9fb5473';
export default node;
