let phonebook = [

	{
	name: 'Pesho',
	number: '+35953224443'
},
{
	name:'Gosho',
	number: '+35952341443'
},
{
	name: 'Rali',
	number: '+46645345235'
}
]


function getPhoneBook(){
	return phonebook;
}

function addNumber(contact){
	phonebook.push(contact);
	console.table(contact);
}

module.exports ={
	getPhoneBook,
	addNumber
}

/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/