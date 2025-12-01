import { browser } from '$app/environment';
let store = $state(false);
if (browser) {
    setTimeout(() => {
        store = true;
    }, 1);
}
export const is = {
    get hydrated() {
        return store;
    }
};
