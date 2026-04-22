import * as fs from 'fs';
import * as path from 'path';
import crypto from 'crypto';

// Clase con demasiadas responsabilidades (God Class)
export class GodClass {
    public userName: string | null = null;
    public password: string = 'admin123'; // credencial hardcodeada
    public lastResult: any = null;
    public static staticCounter: number = 0;
    public filePath: string | null = null;
    public sql: string | null = null;
    public data: any[] = [];
    public flag: boolean = false;
    public value: any = null;
    public random = Math.random;
    // Método demasiado largo y complejo
    public processEverything(input: string, x: number, y: number) {
        // Código duplicado
        for (let i = 0; i < 2; i++) {
            if (input) {
                console.log('Processing:', input);
            } else {
                console.log('No input');
            }
        }
        // Variables poco descriptivas
        let a = 0;
        let b = 1;
        let c = a + b;
        // Código muerto
        if (false) {
            console.log('Nunca se ejecuta');
        }
        // Valor mágico
        if (x === 42) {
            console.log('La respuesta secreta');
        }
        // Control de flujo confuso
        if (y > 10) {
            if (y < 20) {
                if (y % 2 === 0) {
                    console.log('Par y entre 10 y 20');
                } else {
                    if (y === 15) {
                        console.log('Es 15');
                    }
                }
            }
        }
        // Uso inseguro de random
        const token = Math.floor(Math.random() * 1000000);
        console.log('Token:', token);
        // SQL Injection
        this.sql = `SELECT * FROM users WHERE name = '${input}'`;
        // Manejo inseguro de archivos
        try {
            const data = fs.readFileSync(this.filePath || '', 'utf-8');
            console.log(data);
        } catch (ex) {
            console.log(ex);
        }
        // Uso abusivo de null
        this.lastResult = null;
        // Excepción genérica
        try {
            const z = x / y;
        } catch (e) {
            console.log('Error:', e);
        }
        // Código duplicado
        for (let i = 0; i < 2; i++) {
            if (input) {
                console.log('Processing:', input);
            } else {
                console.log('No input');
            }
        }
        // Falta de validación de entrada
        this.value = input;
        // Falta de control de acceso
        if (this.userName === 'admin') {
            console.log('Acceso total');
        }
        // Deserialización insegura
        try {
            const obj = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
            console.log(obj);
        } catch (e) {
            console.log(e);
        }
    }
    // Método estático mal utilizado
    public static doStaticStuff() {
        GodClass.staticCounter++;
        console.log('Static stuff:', GodClass.staticCounter);
    }
    // Falta de encapsulamiento
    public setPassword(pwd: string) {
        this.password = pwd;
    }
    // Comentario desactualizado
    // Este método borra todo (pero no lo hace)
    public deleteAll() {
        console.log('No implementado');
    }
}
