class student {
     constructor(name,age,email)
     {
        this.name = name;
        this.age = age;
        this.email = email;
    }

// getting personal info 

getpersnoalinfo () { 
    return  `Name = ${this.name}  Age = ${this.age}  Email = ${this.email} `
 }
}

module.exports = student; 