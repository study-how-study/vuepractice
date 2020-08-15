export const fetchData = ({ type, endCursor }) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                let data = mockData({ type, endCursor })
                resolve(data)
            }, 1000)
        } catch (error) {
            reject(error)
        }
    })
}

let wenzi = ['都是客观搭嘎大纲的国家领导', '盛大的手感傻大哥大', '砂锅的广泛地阿第三方的', '身高多少个阿三哥', '是的郭德纲是大法官',
    '的水果蛋糕德国法国', '十多个地方官搭嘎大纲', '十多个梵蒂冈烦得很都是废话多', '山东分公司答复对方过后', '的双方各发挥地方'
]

let random = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1)) + start
}

let getContent = () => {
    let content = ''
    let j = random(10, 20)
    for (var i = 0; i < j; i++) {
        content += wenzi[random(0, 9)] + ((i==j-1)?'。':',') 
    }
    return content
}

function mockData({ type, endCursor }) {
    let items = []
    let newEndCursor = endCursor + 10
    for (let i = endCursor; i < newEndCursor; i++) {
        items.push({
            id:i,
            title: type + i,
            content: getContent()
        })
    }
    return {
        items,
        endCursor: newEndCursor
    }
}