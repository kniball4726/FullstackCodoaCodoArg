const agregarAlumnos = () => {
    var participantes = []
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;

    participantes.push({ nombre, apellido, email });
    localStorage.setItem('agregar', JSON.stringify(participantes));
    grupoForm.reset();
    console.log(localStorage.agregar);

        //Dibujamos la informacion
        document.getElementById("alumnos").innerHTML = localStorage.agregar.apellido;
}

/*
document.addEventListener("DOMContentLoaded", function() {
    const grupoForm = document.getElementById('grupoForm');
    const crearGrupo = document.getElementById('crearGrupo');
    const grupoVisualizacion = document.getElementById('grupoVisualizacion');
    let participantes = [];

    grupoForm.addEventListener('submit', function(event) {
        event.onclick();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        participantes.push({ nombre, email });
        grupoForm.reset();
    });

    crearGrupo.addEventListener('onclick', function() {
        if (participantes.length === 0) {
            alert('Agregue al menos un usuario antes de crear grupos.');
            return;
        }

        const numGrupos = Math.ceil(participantes.length / 4); 
            for (let i = 0; i < numGrupos; i++) {
            const grupo = document.createElement('div');
            grupo.className = 'grupo';
            grupo.innerHTML = `<h2>Grupo ${i + 1}</h2>`;
            const participantesPorGrupo = participantes.splice(0, 4);     
            
            participantesPorGrupo.forEach(user => {
                const participanteData = document.createElement('p');
                participanteData.textContent = `${user.nombre} - ${user.email}`;
                grupo.appendChild(participanteData); 
            });
            grupoVisualizacion.appendChild(grupo);
        }
    });
});
*/