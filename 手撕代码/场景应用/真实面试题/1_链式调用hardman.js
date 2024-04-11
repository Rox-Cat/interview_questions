// 
function HardMan(name) {
    class HardMan {
        constructor(name) {
            this.queue = [this.init(name)]
            setTimeout(async () => {
                for (let fun of this.queue) {
                    await fun()
                }
            }, 0)
        }
        init(name) {
            return () => {
                console.log("I am " + name)
            }
        }
        holdon(delay) {
            return () => new Promise(resolve => {
                console.log(`Start learning after ${delay} second`)
                setTimeout(() => {
                    resolve()
                }, delay * 1000);
            })
        }
        rest(delay) {
            this.queue.push(this.holdon(delay))
            return this
        }

        restFirst(delay) {
            this.queue.unshift(this.holdon(delay))
            return this
        }
        learn(str) {
            this.queue.push(() => {
                console.log("Learning " + str)
            })
            return this
        }
    }
    return new HardMan(name)
}
// HardMan("jack").rest(5).learn("computer")
HardMan("jack").restFirst(5).learn("chinese")