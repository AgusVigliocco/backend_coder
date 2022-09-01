class User {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
    addMascotas(nombre) {
        this.mascotas.push(nombre)
    }
    countMascota() {
        return `${this.nombre} ${this.apellido} tiene ${this.mascotas.length} mascotas`
    }
    addBook(nombre, autor) {
        let book = { nombre: nombre, autor: autor }
        return this.libros.push(book)
    }
    getBookNames() {
        let bookNames = this.libros.map((libro) => {
            return libro.nombre
        })
        return `Los libros de ${this.getFullName()} son: ${bookNames}`
    }

}

const usuario = new User('Agustin', 'Vigliocco')

usuario.addMascotas('Rosco')
usuario.addMascotas('Simba')
usuario.addMascotas('Vito')
usuario.addBook('El Socio', 'Jhon Grisham')
usuario.addBook('La Biblia', 'anonimo')
console.log(usuario);
console.log(usuario.countMascota());
console.log(usuario.getBookNames());