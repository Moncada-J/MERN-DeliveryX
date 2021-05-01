const BASE_URL = '/api/deliveries';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(delivery) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(delivery)
    }).then(res => res.json());
    }
