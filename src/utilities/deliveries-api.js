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

    export function update(delivery) {
        return fetch(`${BASE_URL}/${delivery._id}`, {
            method: 'PUT',
            headers: {'content-type' : 'application/json' },
            body: JSON.stringify(delivery),
             }).then(res => res.json());
        }
    
    export function deleteOne(id) {
        return fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        }).then(res =>res.json());
     }
  