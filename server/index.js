const resolverCaso = (caso) => {
    let dias = caso.split('--')
    for (let dia of dias) {
        encontrarMejorSiesta(dia)
    }
}

const encontrarMejorSiesta = (dia) => {
    let tiempoLibre = dia.split(',')
                        .map((appointment) => {
                            let apt = appointment.split(' ')
                            let inicio = apt[0].split(':')
                            let fin = apt[1].split(':')
                            let time = (Number(fin[0])*60 + Number(fin[1])) - (Number(inicio[0])*60 + Number(inicio[1]))
                            apt.push(time)
                            return apt
                        })
                        .sort((a, b) => {
                            return a[3] - b[3];
                        })
    console.log(tiempoLibre)
}

resolverCaso("16:59 18:23 Otras,45:35 46:34 Otras,28:22 28:54 Reunión,41:52 42:10 Almuerzo,21:53 22:50 Reunión,33:42 34:34 Reunión,08:30 09:24 Otras--44:56 45:23 Reunión,08:47 10:04 Reunión,24:45 24:57 Reunión,35:03 35:34 PrepaClase,28:34 29:31 Reunión,20:48 21:06 Almuerzo")