function mayorDeEdad(edad: number) {
    if (edad < 0) return null;
    return edad >= 18;
}

export { mayorDeEdad };