const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: 'Joao',
                    last: 'Lima'
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/79.jpg"
                },
                login: {
                    username: 'TheGoat'
                }
            },
            {
                name: {
                    first: 'Rafa',
                    last: 'Lima'
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/79.jpg"
                },
                login: {
                    username: 'TheGoat'
                }
            },
            {
                name: {
                    first: 'Carlos',
                    last: 'Lima'
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/79.jpg"
                },
                login: {
                    username: 'TheGoat'
                }
            },
            {
                name: {
                    first: 'Sandra',
                    last: 'Lima'
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/79.jpg"
                },
                login: {
                    username: 'TheGoat'
                }
            },
            {
                name: {
                    first: 'Kaue',
                    last: 'Lima'
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/79.jpg"
                },
                login: {
                    username: 'TheGoat'
                }
            },
        ] 
    }
}

const mockAxios = {
    get: jest.fn().mockResolvedValue(mockResponse)
}

export default mockAxios