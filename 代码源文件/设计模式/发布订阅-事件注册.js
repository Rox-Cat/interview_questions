class EventPubSub {
    constructor() {
        this.map = {}
    }

    on(event, fn) {
        this.map[event] = this.map[event] || []
        this.map[event].push(fn)
    }

    emit(event, data) {
        if (!this.map[event]) return
        this.map[event].forEach(item => {
            item(data)
        });
    }

    off(event, fn) {
        if (!this.map[event]) return
        this.map[event] = this.map[event]
            .filter(item => item !== fn)
        if (this.map[event].length === 0){
            delete this.map[event]
        }
    }

    once(event, fn) {
        /* 
            重新封装为一个函数:
                - 执行fn
                - 取消订阅fn
        */
        let newFn = (data) => {
            fn(data)
            this.off(event, newFn)
        }
        this.on(event, newFn)        
    }
}

function user1 (content) {
    console.log('用户1订阅了:', content);
};

function user2 (content) {
    console.log('用户2订阅了:', content);
};


function user3 (content) {
    console.log('用户3订阅了:', content);
}

function user4 (content) {
    console.log('用户4订阅了:', content);
}
const e = new EventPubSub()
// 订阅
e.on('article1', user1);
e.on('article1', user2);
e.on('article1', user3);

// 取消user2方法的订阅
e.off('article1', user2);


e.once('article2', user4)


// 发布
e.emit('article1', 'Javascript 发布-订阅模式');
e.emit('article1', 'Javascript 发布-订阅模式');

e.emit('article2', 'Javascript 观察者模式');
e.emit('article2', 'Javascript 观察者模式');

