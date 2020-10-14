function toHTML() {
    return `
        <li class="db__record">
            <a href="#">Counter 1</a>
            <strong>10.08.2020</strong>
        </li>
    `
}
function getAllKeys() {
    const keys = []
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (!key.includes('space')) {
            continue
        }
        keys.push(key)
    }
    return keys
}

export function getAllRecords() {
    const keys = getAllKeys()
    console.log(keys)
    if (!keys.length) {
        return '<p>You have not created a counter</p>'
    }
    return `
        <div class="db__table-header">
            <span>Name</span>
            <span>Date of creation</span>
        </div>
        <ul class="db__list">
            ${keys.map(toHTML).join('')}
        </ul>
    `
}