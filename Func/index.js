document.addEventListener("DOMContentLoaded", function() {
    const grupoForm = document.getElementById('grupoForm');
    const crearGrupo = document.getElementById('crearGrupo');
    const grupoVisualizacion = document.getElementById('grupoVisualizacion');
    let participantes = [];

})

const agregarAlumnos = () => {
    var participantes = [];

    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('email').value.toLowerCase().trim();

    participantes.push({ nombre, apellido, email });
    window.localStorage.setItem('Nombre', nombre);
    window.localStorage.setItem('Apellido', apellido);
    window.localStorage.setItem('Email', email);
    
    grupoForm.reset();    
    console.log(participantes);
   
    document.getElementById("nombreM").innerHTML = localStorage.getItem('Nombre')
    document.getElementById("apellidoM").innerHTML = localStorage.getItem('Apellido');
    document.getElementById("emailM").innerHTML = localStorage.getItem('Email')
}
    /*grupoForm.addEventListener('submit', function(event) {
        event.click();
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        participantes.push({ nombre, email });
        grupoForm.reset();
    });

    crearGrupo.addEventListener('click', function() {
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
                participanteData.textContent = `${user.nombre} - ${user.apellido} - ${user.email}`;
                grupo.appendChild(participanteData); 
            });
            grupoVisualizacion.appendChild(grupo);
        }
    });
    */