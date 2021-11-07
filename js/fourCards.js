const tarjetasTemplate = document.querySelector("#tarjetasTemplate");
const columnaIzda = document.querySelector(".columnaIzda");
const columnaCentro = document.querySelector(".columnaCentro");
const columnaDerecha = document.querySelector(".columnaDerecha");
const info = [ //array con toda la información de cada tarjeta
    {
        "tituloTarjeta":"Supervisor",
        "cuerpoTarjeta":"Monitors activity to identify project roadblocks",
        "imagen":"./images/icon-supervisor.svg",
        "claseTopBorder":"topBorderCyan"
    },
    {
        "tituloTarjeta":"Team Builder",
        "cuerpoTarjeta":"Scans our talent network to create the optimal team for your project",
        "imagen":"./images/icon-team-builder.svg",
        "claseTopBorder":"topBorderRed"
    },
    {
        "tituloTarjeta":"Karma",
        "cuerpoTarjeta":"Regularly evaluates our talent to ensure quality",
        "imagen":"./images/icon-karma.svg",
        "claseTopBorder":"topBorderOrange"
    },
    {
        "tituloTarjeta":"Calculator",
        "cuerpoTarjeta":"Uses data from past projects to provide better delivery estimates",
        "imagen":"./images/icon-calculator.svg",
        "claseTopBorder":"topBorderBlue"
    }
]
function imprimirTarjetas(info){
    for (let i = 0; i < 4; i++) {
        //construcción de la tarjeta a partir del template
        const tarjetasTemplate = document.querySelector("#tarjetasTemplate").cloneNode(true).content;
        tarjetasTemplate.querySelector("h3").textContent=info[i]['tituloTarjeta'];
        tarjetasTemplate.querySelector("p").textContent=info[i]['cuerpoTarjeta'];
        tarjetasTemplate.querySelector("img").src=info[i]['imagen'];
        tarjetasTemplate.querySelector("article").classList.add(info[i]['claseTopBorder']);
        //dependiendo de que tarjeta sea, se imprimirá en la columna de la izquierda, centro o derecha
        switch (info[i]['tituloTarjeta']) { 
            case "Supervisor":
                columnaIzda.appendChild(tarjetasTemplate);
                break;
            case "Team Builder":
                columnaCentro.appendChild(tarjetasTemplate);
                break;
            case "Karma":
                columnaCentro.appendChild(tarjetasTemplate);
                break;
            case "Calculator":
                columnaDerecha.appendChild(tarjetasTemplate);
                break;
        }
    }

}
imprimirTarjetas(info);


