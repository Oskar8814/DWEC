addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var vec=document.getElementsByTagName('area');
  for(f=0;f<vec.length;f++)
  {
    vec[f].addEventListener('mouseover',mostrarToolTip,false);
    vec[f].addEventListener('mouseout',ocultarToolTip,false);
    vec[f].addEventListener('mousemove',actualizarToolTip,false);
  }
  var ele=document.createElement('div');
  ele.setAttribute('id','divmensaje');
  vec=document.getElementsByTagName('body');
  vec[0].appendChild(ele);

}

function mostrarToolTip(e) 
{
  var d = document.getElementById("divmensaje");
  d.style.visibility = "visible";
  d.style.left = (e.clientX + document.body.scrollLeft + 15)+'px';
  d.style.top = (e.clientY + document.body.scrollTop + 15)+'px';
  var ref;
  ref=e.target;
  recuperarServidorTooltip(ref.getAttribute('id'));
}

function actualizarToolTip(e) 
{
  var d = document.getElementById("divmensaje");
  d.style.left = (e.clientX + document.body.scrollLeft + 15)+'px';
  d.style.top = (e.clientY + document.body.scrollTop + 15)+'px';
}


function ocultarToolTip(e) 
{
  var d = document.getElementById("divmensaje");
  d.style.visibility = "hidden";
}

var conexion1;
function recuperarServidorTooltip(codigo) 
{
  conexion1=new XMLHttpRequest();
  conexion1.onreadystatechange = procesarEventos;
  conexion1.open('GET','cargar_anatomiaxml.php?codigo='+codigo, true);
  conexion1.send();
}

function procesarEventos()
{
  var d = document.getElementById("divmensaje");
  d.style.visibility = "visible";
  if(conexion1.readyState == 4){
    if (conexion1.status == 200) {
        try {
            let xmlDoc = conexion1.responseXML;
            let anatomias = xmlDoc.getElementsByTagName("anatomias");
            let descripcionCode="";
            for (let f = 0; f < anatomias.length; f++) {
                let descripcion = anatomias[f].getElementsByTagName("descripcion")[0].textContent;

                descripcionCode+=descripcion;
            }
            d.innerHTML = descripcionCode;
        } catch (ex) {
            d.innerHTML = "Error al extraer datos del XML: " + ex.message;
        }
    }
  } 
  else 
  {
    d.innerHTML = '<img src="../cargando.gif">';
  }
}