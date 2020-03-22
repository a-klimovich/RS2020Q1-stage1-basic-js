module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error()
    }

    return arr.reduce((acum, itm, idx, array) => {
        switch(itm) {
            case '--discard-next':
                if (idx <= array.length && typeof array[++idx] !== 'string') {
                    acum.splice(++idx, 1)
                }
                break;
            case '--discard-prev':
                if (idx !== 0) {
                    acum.splice(--idx, 1)
                } else {
                    acum.splice(idx, 1)
                }
                break;
            case '--double-next':
                if (idx <= array.length && typeof array[++idx] !== 'string') {
                    acum[idx] = acum[++idx]
                }
                break;
            case '--double-prev':
                if (idx !== 0 ) {
                    acum[idx] = acum[--idx]
                } else {
                    acum.splice(idx, 1)
                }
                break;
            default:
                break;
        }

        return acum
    }, arr)
};
