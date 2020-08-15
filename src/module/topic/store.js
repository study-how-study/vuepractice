import { fetchData } from './api/api'

export const TYPE_MAP = {
    NEW: 'new',
    HOT: 'hot',
    TOP: 'top'
}
export const store = {
    namespaced: true,
    state: {
        type: TYPE_MAP.NEW,
        list: {
            [TYPE_MAP.NEW]: {
                items: [],
                page_info: {
                    endCursor: 0
                }
            },
            [TYPE_MAP.HOT]: {
                items: [],
                page_info: {
                    endCursor: 0
                }
            },
            [TYPE_MAP.TOP]: {
                items: [],
                page_info: {
                    endCursor: 0
                }
            },
        }
    },
    mutations: {
        changeType(state, { type }) {
            state.type = type
        },
        changeList(state, { items, endCursor }) {
            let { items: oldItems, page_info } = state.list[state.type]
            if (items && items.length > 0) {
                page_info.endCursor = endCursor
                items.forEach(item => {
                    item && oldItems.push(item)
                });
            }

        }
    },
    actions: {
        toggleType({ commit, state }, { type }) {
            const preType = state.type
            commit('changeType', { type })
            if (preType !== type && state.list[type].items.length) {
                return
            }
            let endCursor = state.list[type].page_info.endCursor
            fetchData({ type, endCursor }).then(({ items, endCursor }) => {
                commit('changeList', { items, endCursor })
            })
        }
    }
}