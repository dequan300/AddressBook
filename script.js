class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(name, email, phone, relation) {
        this.contacts.push(new Contact(name, email, phone, relation));
    }
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

let book = new AddressBook();
book.add("charm", "charmhorn@gmail.com", 3134453045);
book.add("dequan", "example@gmail.com", 3134525525);
print(book);