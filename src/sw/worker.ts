
/// <reference lib="webworker" />

import { blockingFunc } from "../utils";
import axios from 'axios';

// const URL = 'https://interestingengineering.com/innovation/solar-powered-system-makes-drinking-water-from-air';
const URL = 'http://127.0.0.1:8080'

export const someRPCFunc = () => {
    blockingFunc();
};

export function fetchPage(): Promise<string> {
    return new Promise((resolve, reject) => {
        axios.get(URL).then(res => {
            if (!res.data || res.data === undefined) {
                reject('no data returned');
            }
            resolve(res.data);
        }).catch(error => reject(error));
    })
}