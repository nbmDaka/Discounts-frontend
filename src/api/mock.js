// src/api/mock.js
const mockUser = { id: 1, username: 'testuser' }
const mockToken = 'mock-jwt-token-123456'

export function login({ username, password }) {
    return new Promise((resolve, reject) => {
        // In a real API, check username/password
        if (username && password) {
            resolve({ token: mockToken, user: mockUser })
        } else {
            reject(new Error('Invalid credentials'))
        }
    })
}

export function register({ username, email, password }) {
    return new Promise((resolve, reject) => {
        if (username && email && password) {
            resolve({ token: mockToken, user: { id: 2, username } })
        } else {
            reject(new Error('Missing required fields'))
        }
    })
}

// You can also export functions to get discounts and markets:
export function getDiscounts() {
    return Promise.resolve([
        { id: 1, name: 'Discount A', image: '/assets/discountA.jpg' },
        { id: 2, name: 'Discount B', image: '/assets/discountB.jpg' },
        // More mock discounts…
    ])
}

export function getDiscountById(id) {
    return Promise.resolve({
        id,
        name: `Discount ${id}`,
        image: `/assets/discount${id}.jpg`,
        description: 'Detailed description for discount ' + id,
        address: '123 Discount Street',
        // Map data could be a URL or embed code
        mapUrl: 'https://www.google.com/maps'
    })
}

export function getMarkets() {
    return Promise.resolve([
        { id: 1, name: 'Market One', image: '/assets/market1.jpg' },
        { id: 2, name: 'Market Two', image: '/assets/market2.jpg' },
        // More mock markets…
    ])
}

export function getDiscountsByMarket(marketId) {
    return Promise.resolve([
        { id: 1, name: `Discount in Market ${marketId} - 1`, image: '/assets/discount1.jpg' },
        { id: 2, name: `Discount in Market ${marketId} - 2`, image: '/assets/discount2.jpg' },
        // More mock discounts…
    ])
}
