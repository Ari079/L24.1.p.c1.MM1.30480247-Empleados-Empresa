class Empleados{
    constructor(nombre, sexo){
        this.nombre = nombre,
        this.sexo = sexo
    }
}

class Empresa{
    constructor(){
        this.contadorHombres = 0,
        this.contadorMujeres = 0,

        this.empleadosTotales = 0
    }
    procesarEmpleado(e){
        if(e.sexo === 'M'){
            this.contadorHombres++
        }else{
            this.contadorMujeres++
        }
    }
    porcentajeMujeres(){
        return (this.contadorMujeres / (this.contadorHombres + this.contadorMujeres)) * 100 + "%"
    }
}

let empleado1 = new Empleados('Mary', 'F')
let empleado2 = new Empleados('José', 'M')
let empleado3 = new Empleados('Carlos', 'M')
let empleado4 = new Empleados('Pedro', 'M')

let empresa = new Empresa()

empresa.procesarEmpleado(empleado1)
empresa.procesarEmpleado(empleado2)
empresa.procesarEmpleado(empleado3)
empresa.procesarEmpleado(empleado4)

let salida = document.getElementById('app')
salida.innerHTML = `

Cantidad de hombres que trabajan en la empresa: ${empresa.contadorHombres}<br>
Porcentaje de mujeres que trabajan en la empresa: ${empresa.porcentajeMujeres()}


`