class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(name, email, phone, relation) {
        this.contacts.push(new Contact(name, email, phone, relation));
    };

    
};

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    };
};


//displays as data 
function display(){
    document.querySelector("#container").innerHTML="";
    book.contacts.forEach((contact)=>{
    const newEntry = document.createElement("div")
    newEntry.classList.add("box")
    newEntry.innerHTML=`
    <p> Name: ${contact.name}</p>
    <p> Email: ${contact.email}</p>
    <p> Phone: ${contact.phone}</p>
    <p> Relation: ${contact.relation}</p>`
    document.querySelector("#container").appendChild(newEntry)

});
}
const form= document.querySelector("#contactForm")
form.addEventListener("submit",addContactData)
function addContactData(e){
    e.preventDefault();
    const formData = new FormData(form);
  book.add(
    formData.get("name"),
    formData.get("email"),
    formData.get("phone"),
    formData.get("relation")
  );
  display()
}


let book = new AddressBook();
book.add("charm", "charmhorn@gmail.com", 3134453045);
book.add("dequan", "example@gmail.com", 3134525525);
