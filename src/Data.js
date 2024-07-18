import A15 from './assets/Product/A15.webp'
import Tab10 from './assets/Product/enova.webp'
import G24 from './assets/Product/g24.webp'
import GamerAsus from './assets/Product/gamerasus.webp'
import Legion5 from './assets/Product/legion5.webp'
import M9 from './assets/Product/M9lenovo.webp'
import XviewT from './assets/Product/xviewtablet.webp'
import XviewN from './assets/Product/xviewnote.webp'
import Zflip from './assets/Product/zflip.webp'

const products = [
	{
		id: '1',
		name: 'Enova TAB< 10',
		price: 200000,
		category:'tablet',
		img: Tab10,
		stock: 10,
		
	},
	{
		id: '2',
		name: 'X-VIEW GB',
		price: 190000,
		category:'tablet',
		img: XviewT,
		stock: 12,
	},
	{
		id: '3',
		name: 'Lenovo M9',
		price: 250000,
		category:'tablet',
		img: M9,
		stock: 10,
		
	},
	{
		id: '4',
		name: 'Samsung Zflip',
		price: 1600000,
		category:'celular',
		img: Zflip,
		stock: 12,
	},
	{
		id: '5',
		name: 'Samsung A15',
		price: 525000,
		category:'celular',
		img: A15,
		stock: 12,
	},
	{
		id: '6',
		name: 'Motorola G24',
		price: 350000,
		category:'celular',
		img: G24,
		stock: 12,
	},
	{
		id: '7',
		name: 'Gamer Asus F15 i7',
		price: 2700000,
		category:'notebook',
		img: GamerAsus,
		stock: 12,
	},
	{
		id: '8',
		name: 'Lenovo Legion 5 i5',
		price: 2800000,
		category:'notebook',
		img: Legion5,
		stock: 12,
	},
	{
		id: '9',
		name: 'X-View intel celeron',
		price: 450000,
		category:'notebook',
		img: XviewN,
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
