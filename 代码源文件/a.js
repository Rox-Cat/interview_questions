const p = Proxy(obj, {
    set() { },
    get() { }
})