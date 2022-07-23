const items = [1,2,3,4,5]

localStorage.setItem('items', JSON.stringify(items))

const itemsFetched = JSON.parse(localStorage.getItem('items'))