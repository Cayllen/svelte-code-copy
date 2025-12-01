import type { Options } from './types/Options.js';
import type { PromiseStatus } from './types/PromiseStatus.js';
export declare const observable: (options?: Options) => {
    readonly status: PromiseStatus;
    observed: <T, Fn extends (...args: (string & number & object)[]) => T>(fn: Fn) => Fn;
};
