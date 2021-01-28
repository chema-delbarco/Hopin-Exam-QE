import http from 'k6/http';
import { check } from 'k6';

const BASE_URL = `${__ENV.BASE_URL}`;

export default function () {
    console.log(BASE_URL)
    let res = http.post(BASE_URL, JSON.stringify({ name: 'Jordan Rudess' }));
    check(res, {
        'status was 200': (r) => r.status === 200,
        'body has timestamp': (r) => r.body.length > 0
    });
}