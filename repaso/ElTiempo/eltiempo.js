let encabezados=["Horas", "Previsión", "Viento", "Velocidad", "Lluvias"];         
let datos=[
        {
        hora:"19:00",
        prevision:{ temperatura: "33º", icono:"dia" },
        viento:"oeste",
        velocidad:"15 km/h",
        lluvias:"0 mm"
        },
        {
        hora:"20:00",
        prevision:{ temperatura: "30º", icono:"dia" },
        viento:"norte",
        velocidad:"5 km/h",
        lluvias:"10 mm"
        },
        {
        hora:"21:00",
        prevision:{ temperatura: "28º", icono:"noche" },
        viento:"sur",
        velocidad:"0 km/h",
        lluvias:"5 mm"
        },

    ];

    addEventListener ('load',cargar, true);

    function cargar() {
        poblar();
        pintar();
    }

    function poblar() {
        let tabla = document.getElementById("eltiempo");
        tabla.border="1";

        let thead = document.createElement('thead');
        let codigo =`
                <tr>
                    <th>${encabezados[0]}</th>
                    <th>${encabezados[1]}</th>
                    <th>${encabezados[2]}</th>
                    <th>${encabezados[3]}</th>
                    <th>${encabezados[3]}</th>
                </tr>
                `;
        thead.innerHTML=codigo;
        tabla.appendChild(thead);

        let tbody = document.createElement('tbody');
        for (const element of datos) {
            let fila = document.createElement('tr');
            let code ='';
            code += `
            <td>${element.hora}</td>
            <td>${element.prevision.temperatura}<img src="img/${element.prevision.icono}.png" alt=""></td>
            <td><img src="img/${element.viento}.png" alt=""></td>
            <td>${element.velocidad}</td>
            <td class="lluvias">${element.lluvias}</td>
            `;

            fila.innerHTML=code;
            tbody.appendChild(fila);

        }
        tabla.appendChild(tbody);
        
    }
    
    function pintar() {
        let lluvias = document.getElementsByClassName('lluvias');
        for (const element of lluvias) {
            element.setAttribute("style","color:blue;");
        }
    }