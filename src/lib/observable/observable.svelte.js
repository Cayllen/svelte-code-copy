export const observable = (options) => {
    const { resolveToIdle = 5000, rejectToIdle = 5000 } = options ?? {};
    let status = $state('IDLE');
    let id = 0;
    let observed = $derived((fn) => (async (...arg) => {
        id += 1;
        const localId = id;
        const setStatus = (value) => {
            if (localId === id) {
                status = value;
            }
        };
        status = 'PENDING';
        try {
            const res = await fn(...arg);
            setStatus('FULFILLED');
            setTimeout(() => setStatus('IDLE'), resolveToIdle);
            return res;
        }
        catch (e) {
            setStatus('REJECTED');
            setTimeout(() => setStatus('IDLE'), rejectToIdle);
            throw e;
        }
    }));
    return {
        get status() {
            return status;
        },
        observed
    };
};
