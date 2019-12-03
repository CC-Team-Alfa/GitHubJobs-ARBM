function getHouses(){
	return fetch('https://www.potterapi.com/v1/houses/?key=$2a$10$9OPcixlgdqgj1kfPoOy2feIrdBztnKGKoclZ5Efis629QawIm44zu')
	.then((r)=>{return r.json()})
}

// sposób wywołania funkcji: 
// getHouses().then((r)=>{console.log(r)});