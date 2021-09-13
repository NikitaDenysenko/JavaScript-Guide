function networkFerch(url) {
    return `${url} - Response from server`
}

const cache = new Set()

const proxiedFetch = new Proxy(networkFerch, {
    apply(target, thisArg, args) {
        const url = args[0]
        if (cache.has(url)) {
            return `${url} Response from cache`
        } else {
            cache.add(url)
            return Reflect.apply(target, thisArg, args)
        }
    },
})

console.log(proxiedFetch('google.com'))
console.log(proxiedFetch('facebook.com'))
console.log(proxiedFetch('google.com'))