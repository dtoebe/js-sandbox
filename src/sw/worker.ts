
/// <reference lib="webworker" />

import { blockingFunc } from "../utils";

export const someRPCFunc = () => {
    blockingFunc();
};