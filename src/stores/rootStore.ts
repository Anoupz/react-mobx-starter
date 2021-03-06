import { inject } from "mobx-react";
import { TypedInject } from "../utils/utility";
import mainStore from "./mainStore";

export const defaultStores = {
  mainStore
};

export type Stores = typeof defaultStores;

export const typedInject = inject as TypedInject<Stores>;
