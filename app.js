function agregaringredienteslista(ingredientes) {

    var html = $("#lista-ingredientes").html() + 
    `
    <div class="row ingredientes" style=" padding-left: 30px; ">
        <div class="col-12" style="padding-top: 15px; ">
            <li class="list-group-item" id="${ingredientes.id}" style="border-top-style: none;
            border-right-style: none;
            border-bottom-style: none;
            border-left-style: none;">
                <div class="row">
                    <div class="col-1">
                    <button id="btn-delingre"  type="button" 
                    style=" padding-left: -10px;" class="btn" onclick="borraingrediente(${ingredientes.id})">&times;
                </button>
                    <div style=" padding-left: 30px;" class="col-11 row text-center">
                        <div  class="col-12 h5">
                            ${ingredientes.nombre}
                        </div>
                    </div>
                </div>
            </li>
        </div>
</div>
    ` ;
    
    $("#lista-ingredientes").html(html);
}
function agregarprincipal(datos){
    var html = $("#lista-principal").html() + 
    `
        <li class="list-group-item entradas" id="${datos.id}">
            <div class="row">
                <div class="col-12">
                    <div class="card bg-dark imagen3">
                        <img id="imagen1" src="${datos.imagen}" alt="">
                        <div class="card-body">
                            <div class="card-title text-white">
                                <h5> ${datos.nombre}</h5>
                            </div>
                            <div class="card-text text-white text-center col-12">
                                <button id="btn-recetario" class="btn btn-success" type="button" 
                                style=" padding-left: -10px;" onclick="agregaringredientes(datos)"> Ver mas
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    ` ;
    
    $("#lista-principal").html(html);
 }

 function agregarentradas(datos){
    var html = $("#lista-entrada").html() + 
    `
        <li class="list-group-item entradas" id="${datos.id}">
            <div class="row">
                <div class="col-12">
                    <div class="card bg-dark imagen3">
                        <img id="imagen1" src="${datos.imagen}" alt="">
                        <div class="card-body">
                            <div class="card-title text-white">
                                <h5> ${datos.nombre}</h5>
                            </div>
                            <div class="card-text text-white text-center col-12">
                                <button class="btn btn-danger" type="button" data-toggle="modal" data-target="#modalentrada")"> Ver mas
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    ` ;
    
    $("#lista-entrada").html(html);
 }

 function visualizarinfo(nombre,imagen,){
     console.log(descripcion.nombre);

 }
 function agregarpostre(datos){
    var html = $("#lista-postre").html() + 
    `
        <li class="list-group-item entradas" id="${datos.id}">
            <div class="row">
                <div class="col-12">
                    <div class="card bg-dark imagen3">
                        <img id="imagen1" src="${datos.imagen}" alt="">
                        <div class="card-body">
                            <div class="card-title text-white">
                                <h5> ${datos.nombre}</h5>
                            </div>
                            <div class="card-text text-white text-center col-12">
                                <button id="btn-recetario" class="btn btn-success" type="button" 
                                style=" padding-left: -10px;" onclick="agregaringredientes(datos)"> Ver mas
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    ` ;
    
    $("#lista-postre").html(html);
 }
 function vermas(datos){
     console.log(datos.nombre);
 }
function agregarTarea(datos) {

    var html = $("#lista-tareas").html() + 
    `
        <li class="list-group-item ingredientes" id="${datos.id}">
            <div class="row">
                <div class="col-1">
                    <input type="checkbox" 
                            class="form-control" 
                            onchange="cambiarEstatus(${datos.id})">
                </div>
                <div class="col-10 row">
                    <div class="col-9 h5">
                        ${datos.titulo}
                    </div>
                    <div class="col-3 text-right">
                        <i>${datos.fecha}</i>
                    </div>
                    <div class="col-12 text-justify">
                        ${datos.descripcion}
                    </div>
                </div>
                <div class="col-1">
                    
                    <button class="btn btn-danger" onclick="borraTarea(${datos.id})">&times;</button>
                </div>
            </div>
        </li>
    ` ;
    
    $("#lista-tareas").html(html);
}
function agregaringredientes(){
    var nombre =$("#ingred").val();
    if(nombre.trim()===""){
        muestraAlerta("El ingrediente no puede estar vacio");
                return;
    }
    var ingredientes = {
        nombre,
        id:Date.now()
    };
    console.log($("#ingred").val());
    agregaringredienteslista(ingredientes);
    $("#ingred").val("");
    $("#alerta").hide(0);
}
function muestraAlerta( mensaje ) {
    $("#alerta").text(mensaje);
    $("#alerta").show(1000);
}

function borraTarea(id) {
    $("#"+id).hide(800,function() {
        $(this).remove();
    });
}
function borraingrediente(id) {
    console.log(id);
    $("#"+id).hide(800,function() {
        $(this).remove();
    });
}

function cambiarEstatus(id) {
    $("#"+id).toggleClass("bg-success");

}

$(document).ready(function(){
 
    $("#alerta").hide(0);

    $("#forma").submit( function(e){
            e.preventDefault();

            var nombre      = $("#nombre").val();
            var imagen      = $("#imagen").val();
            var combo = document.getElementById("categoria");
            var selected = combo.options[combo.selectedIndex].text;
            console.log(selected);
            var totingredientes =$(".ingredientes").toArray().length
            var descripcion = $("#descripcion").val();
            console.log(descripcion);
            if(nombre.trim() ==="")
            {
                muestraAlerta("El nombre no puede estar vacio");
                return;
            }
            if(imagen.trim() !="")
            {
                
            }
            else{
                muestraAlerta("La imagen no puede estar vacio");
                return;
            }
            if(totingredientes < 1)
            {
                muestraAlerta("Se necesita tener un ingrediente");
                return;
            }


            var datos = {
                nombre,
                selected,
                imagen,
                selected,
                descripcion,
                id:Date.now()
            };
            console.log("insertado")
            if(selected === "Entrada"){
                agregarentradas(datos);
            }
            if(selected === "Principal"){
                agregarprincipal(datos);
            }
            if(selected === "Postre"){
                agregarpostre(datos);
            }
            $("#descripcion").val("");
            $("#nombre").val("");
            $("#imagen").val("");
    } );


    
    
});


