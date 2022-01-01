import { mutations } from '.'

test('"login" changes "state.isLoggedIn" to true', () => {
    // 🧭🧭 time: 5 minutes
    // 💰 1) create state
    const state = {
        isLoggedIn: false,
    };
    // 💰 2) call mutation
    mutations.login(state)
    // 💰 3) check if state changes are true
    expect(state.isLoggedIn).toBe(true);
})

// test logout action
// 🧭🧭 time: 5 minutes

// https://vue-test-utils.vuejs.org/guides/#testing-vuex-in-components
