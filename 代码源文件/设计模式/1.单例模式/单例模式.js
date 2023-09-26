class Singleton {
    constructor(name, age){
        if (!Singleton.instance) {
            this.name = name
            this.age = age
            Singleton.instance = this
        }
        return Singleton.instance
    }
}

let a = new Singleton('dasdfa', "adsf")
let b = new Singleton('da', "adsf")
console.log(a === b)