const API_URL = '/api';

export function getTweets () {
    return fetch(`${API_URL}/tweets`)
    .then((res) => res.json());
}

export function postTweet(message) {
    return fetch(`${API_URL}/tweets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('twitter_clone_token')
        },
        body: JSON.stringify({ message })
    })
    .then((res) => res.json());
}

export function postNewUser(newUser) {
    return fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then((res) => res.json());
}

export function deleteTweet(id) {
    return fetch(`${API_URL}/tweets/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Auth-Token': localStorage.getItem('twitter_clone_token')
        }
    })
    .then((res) => res.json());
}