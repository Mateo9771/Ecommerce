const products = [
	{
		id: '1',
		name: 'Enova LTE 10',
		price: 200000,
		category:'tablet',
		img: 'https://medias.musimundo.com/medias/size300-150987-01.jpg?xcd_image_optimization=false&context=bWFzdGVyfGltYWdlc3wxNzY3OXxpbWFnZS9qcGVnfGFEUTVMMmhsTUM4eE1EVTJOelkwTnpneU1UZzFOQzl6YVhwbE16QXdYekUxTURrNE4xOHdNUzVxY0djfDcxOGExZTlkMWE4MTAxMjFiYjI2NTBmYzc5NzA3MzYwZmY0YmM1OTc2Y2U0NGNjMGQ0Yjk0MDdlYTM2YjU1YmY',
		stock: 10,
		
	},
	{
		id: '2',
		name: 'X-VIEW GB',
		price: 190000,
		category:'tablet',
		img: 'https://medias.musimundo.com/medias/size300-150907-01.jpg?context=bWFzdGVyfGltYWdlc3wxNDMxNnxpbWFnZS9qcGVnfGFEZG1MMmhsTnk4eE1EVTFPRGMzTVRJMk5UVTJOaTl6YVhwbE16QXdYekUxTURrd04xOHdNUzVxY0djfDk4ZmQxNmY5Njk1NGJjNTIxMTA1OGE2ZWU2YWRmZjMwYWRmMzViMTk2ZGM4MmQ4ZmJhNTYwYmFkMTc2N2EzM2U',
		stock: 12,
	},
	{
		id: '3',
		name: 'Lenovo M9',
		price: 250000,
		category:'tablet',
		img: 'https://medias.musimundo.com/medias/size300-150859-01.jpg?context=bWFzdGVyfGltYWdlc3wxNTYwMHxpbWFnZS9qcGVnfGFEZGtMMmd6WVM4eE1EVTFPRGN6Tnprd056YzBNaTl6YVhwbE16QXdYekUxTURnMU9WOHdNUzVxY0djfDgxZWFjMmM4OTljNjQyZjVhOTQwZWY1YWU3MjAzNTVlOGIxMjk2YTMwZjMzMzIxNjlhOWE2NWM1ZDRhY2JjODU',
		stock: 10,
		
	},
	{
		id: '4',
		name: 'Samsung Zflip',
		price: 1600000,
		category:'celular',
		img: 'https://medias.musimundo.com/medias/size300-149450-01.jpg?xcd_image_optimization=false&context=bWFzdGVyfGltYWdlc3wxNzA5M3xpbWFnZS9qcGVnfGFEQm1MMmcwTnk4eE1EVTNNRE15TWpVd09UZzFOQzl6YVhwbE16QXdYekUwT1RRMU1GOHdNUzVxY0djfDNhMDcxZDM0NTg2YzI5YjA1ZGNkNjQ3MTkwMWUxM2JjYmI0MDIyZThiOTk4NGI4NTg0MjVkYzgwYmNiOWY3MTE',
		stock: 12,
	},
	{
		id: '5',
		name: 'Samsung A24',
		price: 525000,
		category:'celular',
		img: 'https://medias.musimundo.com/medias/size300-148856-01.jpg?context=bWFzdGVyfGltYWdlc3wyMjg2OHxpbWFnZS9qcGVnfGFHSTVMMmczTWk4eE1EVXpPREV5TXpZeU5EUTNPQzl6YVhwbE16QXdYekUwT0RnMU5sOHdNUzVxY0djfDMxZmU1YTY3NDAzOWEyMzBlYjQ2ZjViMzEyN2U2ZWEyMDE3ZmI4MjUzNTZmNDM5YmFmYzZjMzgwMWE1NjdlMzI',
		stock: 12,
	},
	{
		id: '6',
		name: 'Motorola G23',
		price: 350000,
		category:'celular',
		img: 'https://medias.musimundo.com/medias/size300-148664-01.jpg?context=bWFzdGVyfGltYWdlc3wxOTAwOHxpbWFnZS9qcGVnfGFHTTBMMmd3TWk4eE1EVTFOREk0TlRjNE5URXhPQzl6YVhwbE16QXdYekUwT0RZMk5GOHdNUzVxY0djfGZlMjgxZjQzM2Q2ZmMxZWYzOWJlMTIzMDM0ZTZmNjBhMTBlMDQyMWRmMmY4NzAwNDBmMTQ3ZDUzMDU3ZWE3MDg',
		stock: 12,
	},
	{
		id: '7',
		name: 'Gamer Asus F15 i7',
		price: 2700000,
		category:'notebook',
		img: 'https://medias.musimundo.com/medias/size300-149354-01.jpg?context=bWFzdGVyfGltYWdlc3wxOTI2OXxpbWFnZS9qcGVnfGFEZzNMMmd5TWk4eE1EVTJPRFU1TWpneE9ESXdOaTl6YVhwbE16QXdYekUwT1RNMU5GOHdNUzVxY0djfDI1M2JhN2UzNTRhZmY3ZWEwNDYxYjVlMTBkOGVlZmEzM2Q4YTBjN2FkN2RjY2U3MTAwOTg2ZjE3Mzk3YjEwYzc',
		stock: 12,
	},
	{
		id: '8',
		name: 'Lenovo Legion 5 i5',
		price: 2800000,
		category:'notebook',
		img: 'https://medias.musimundo.com/medias/size300-149470-01.jpg?context=bWFzdGVyfGltYWdlc3wyMDcwN3xpbWFnZS9qcGVnfGFEVTBMMmcyTnk4eE1EVXlPVGsxTWpBM01UY3hNQzl6YVhwbE16QXdYekUwT1RRM01GOHdNUzVxY0djfDQyOThiY2U0ZGQwYzczYmUwOGNhYzViNmU5Y2RmNDYwZTg1OGJmN2Q2MzYxZjFlMWMxYzIyYWQ2ZWNjZTQ5Mzg',
		stock: 12,
	},
	{
		id: '9',
		name: 'X-View intel celeron',
		price: 450000,
		category:'notebook',
		img: 'https://medias.musimundo.com/medias/size515-150758-01.jpg?context=bWFzdGVyfGltYWdlc3w0MzE5MXxpbWFnZS9qcGVnfGFETmxMMmc0WXk4eE1EVTFNVGswTVRRek1UTXlOaTl6YVhwbE5URTFYekUxTURjMU9GOHdNUzVxY0djfDRkNGFmN2FjZDg3ZDVlMDViMmUyMWI1NTlmMDg2NjFlM2QwMjI2OTNjMjM1NGVhODgxZTA3NmYzMjVjNWM2MTg',
		stock: 12,
	},

	// agregar mas imagenes
]

export const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() =>{
			resolve(products)
		},500 )
	})
}

export const getProductById = (productId) => {
	return new Promise ((resolve) => {
		setTimeout(() => {
			resolve(products.find(prod => prod.id === productId))
		},200 )
	})
}

//corregir esta funcion
export const getProductsByCategory = (productCategory) => {
	return new Promise ((resolve) => {
		setTimeout(() => {
			resolve(products.filter(prod => prod.category === productCategory ))
		}, 100)
	})
}
