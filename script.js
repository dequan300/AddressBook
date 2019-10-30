class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(name, email, phone, relation) {
        this.contacts.push(new Contact(name, email, phone, relation));
    }

    // findByName(name) {
    //     function findName() {
    //         return this.contacts;
    //     }
    // }
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

function print(info) {
    console.log(info);
}

// function display(){
// AddressBook.contacts.forEach((contact,index)=>{
//     const newEntry = document.createElement("div")
//     newEntry.classList.add("box")
//     newEntry.innerHTML=
//     <p>name</p>
//     <p>email</p>
//     <p>phone</p>
//     <p>relation</p>
//     document.querySelector("#container").appendChild(newEntry)

// })
// }
// const form = document.querySelector("form")
// form.addEventListener("submit",addContact)
// function addContact(e){
// e.preventDefault();
// const formData= new formData(form);

// }

let book = new AddressBook();
book.add("charm", "charmhorn@gmail.com", 3134453045);
book.add("dequan", "example@gmail.com", 3134525525);

print(book);