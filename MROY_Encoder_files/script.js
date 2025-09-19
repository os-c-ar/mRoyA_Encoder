/*
var MX_imagen = document.createElement("img");
    MX_imagen.setAttribute("width","100px");
    MX_imagen.setAttribute("src","images/novatecfs_mezcladores_estaticos.jpg");
    document.getElementById("resultadoImagen").appendChild(MX_imagen);
*/


// Debes definir el optionsMap y llamar a updateSelectOptions después de cargar el DOM
const optionsMap = {
    '': [
       { value: '', label: 'Seleccione una opción' },
    ],
    'M': [
       { value: '01', label: 'mRoy A' },
       { value: '02', label: 'mRoy B' },
       { value: '03', label: 'mRoy H' },
       { value: '04', label: 'mRoy J' },
       { value: '05', label: 'mRoy M' },
       { value: '06', label: 'mRoy P' },
       { value: '07', label: 'mRoy XT' },
       { value: '08', label: 'mRoy XW' },
       { value: '09', label: 'Milroyal B' },
       { value: '10', label: 'Milroya C' },
       { value: '11', label: 'Milroyal D' },
       { value: '12', label: 'Milroyal G' },
       { value: '13', label: 'MacRoy D' },
       { value: '14', label: 'Macroy G' },
       { value: '15', label: 'Maxroy B' },
       { value: '16', label: 'mRoy T' },
       { value: '17', label: 'Primeroyal K' },
       { value: '18', label: 'mRoy S' },
       { value: '19', label: 'SolaryRoy' }
    ],
    'L': [
       { value: '01', label: 'A' },
       { value: '02', label: 'B' },
       { value: '03', label: 'C' },
       { value: '04', label: 'E' },
       { value: '05', label: 'J5' },
       { value: '06', label: 'P' },
       { value: '07', label: 'SG' },
       { value: '08', label: 'SD' },
       { value: '09', label: 'HH' },
       { value: '10', label: 'TD' }
    ],
    'W': [
       { value: '01', label: 'CP125V125' },
       { value: '02', label: 'CP250V225' },
       { value: '03', label: 'CP250V300' },
       { value: '04', label: 'CP500V250' },
       { value: '05', label: 'CP500V300' },
       { value: '06', label: 'CRP500V400' },
       { value: '07', label: 'CRP750V400' },
       { value: '08', label: 'CRP1000V400' },
       { value: '09', label: 'CRP1000V600' },
       { value: '10', label: 'CRP1000V800' },
       { value: '11', label: 'LD100-316-TFE' },
       { value: '12', label: 'LD200-316-TFE'  },
       { value: '13', label: 'LD400-316-TFE'  },
       { value: '14', label: 'LD100-TFE-TFE'  },
       { value: '15', label: 'LD200-TFE-TFE' },
       { value: '16', label: 'LD400-TFE-TFE' },
       { value: '17', label: 'CRP250W600' }
    ],
    'S': [
       { value: '01', label: 'BCSB' },
       { value: '02', label: 'BCSO' },
       { value: '03', label: 'BTCS' },
       { value: '04', label: 'BN/NM' },
       { value: '05', label: 'MD' },
       { value: '06', label: 'NS' }       
    ],
    'LQ': [
       { value: '01', label: 'Series H' },
       { value: '02', label: 'Series 2' },
       { value: '03', label: 'Series 3' },
       { value: '04', label: 'Series 4' },
       { value: '05', label: 'Series Centry'},
       { value: '06', label: 'Series Endura_AB'},
       { value: '07', label: 'Series Max'}          
    ],
    'AB': [
       { value: '01', label: 'ALP-05N' },
       { value: '02', label: 'ALP-09N' },
       { value: '03', label: 'ALP-13N' }
         
    ],
    'N': [
       { value: '01', label: 'F-TEC-40P' },
       { value: '02', label: 'F-TEC-50P'},
       { value: '03', label: 'F-TEC-40D' },
       { value: '04', label: 'F-TEC-50D' },
       { value: '05', label: 'F-TEC-LM'},
       { value: '06', label: 'F-TEC-MP'},
       { value: '07', label: 'SDFFlow-F (B. Tornillo Helicoidal)' }          
    ]
};

const optionsMap2 = {
    '': [
       { value: '', label: 'Seleccione una opción' },
    ],   
    'N': [
       { value: '01', label: 'F-TEC-40P' },
       { value: '02', label: 'F-TEC-50P'},
       { value: '03', label: 'F-TEC-40D' },
       { value: '04', label: 'F-TEC-50D' },
       { value: '05', label: 'F-TEC-LM'},
       { value: '06', label: 'F-TEC-MP'},
       { value: '07', label: 'SDFFlow-F (B. Tornillo Helicoidal)' }          
    ]
};




updateSelectOptions('MarcaDeBomba', 'ModeloDeBomba', optionsMap);
//SelectOptions2('NumeroDeTanques', 'MaterialDelTanque', 'CapacidadDelTanque',optionsMap2);//

/*
function calculator()
{

console.log("optionsMap:"+optionsMap );
updateSelectOptions('MarcaDeBomba', 'ModeloDeBomba', optionsMap);


    var a=document.getElementById("tipo_sistema").value;
    var b=document.getElementById("TipoDeMontaje").value;
    var c = document.getElementById("NumeroDeBombas").value;
    var d = document.getElementById("MarcaDeBomba").value;
    var e = document.getElementById("ModeloDeBomba").value;
    var f = document.getElementById("NumeroDeTanques").value;
    var g = document.getElementById("MaterialDelTanque").value;
    var h = document.getElementById("CapacidadDelTanque").value;
    var i = document.getElementById("TipoTablero").value;
    var j = document.getElementById("Clasificacion").value;
    var k = document.getElementById("CapacidadDelTanque").value;
    var l = document.getElementById("PuntosDeClasificacion").value;

console.log("a:"+a +"Tipo de dato  "+typeof a);
console.log("b:"+b +"Tipo de dato  "+typeof b);
console.log("c:"+c +"Tipo de dato  "+typeof c);
console.log("d:"+d +"Tipo de dato  "+typeof d);
console.log("e:"+e +"Tipo de dato  "+typeof e);
console.log("f:"+f +"Tipo de dato  "+typeof f);
console.log("g:"+g +"Tipo de dato  "+typeof g);
    



model= a+b+c+d+e+f+g+h+i+j+k+l;
console.log("Modelo :"+model +"Tipo de dato  "+typeof model);
document.getElementById("MODELO").textContent=model;

model2= a+b+"-"+c+d+e+"-"+f+g+h+"-"+i+j+k+"/"+l;
console.log("Modelo 2:"+model2 +"Tipo de dato  "+typeof model2);
document.getElementById("MODELO2").textContent=model2;


return model;

}



function updateSelectOptions(primarySelectId, secondarySelectId, optionsMap) {
    const primarySelect = document.getElementById(primarySelectId);
    const secondarySelect = document.getElementById(secondarySelectId);

    function setOptions(options) {
        secondarySelect.innerHTML = '<option value="">Seleccione una opción</option>';
        options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.value;
            option.textContent = opt.label;
            secondarySelect.appendChild(option);
        });
    }

    primarySelect.addEventListener('change', function() {
        const selectedValue = primarySelect.value;
        if (optionsMap[selectedValue]) {
            setOptions(optionsMap[selectedValue]);
        } else {
            setOptions([]);
        }
    });
}


*/

function calculator() {
    // Obtén todos los selects relevantes
    const selects = [
        "Linea",
        "materialCabezal",
        "plungerDiameter",
        "motor",
        "montajeMotor",
        "conexionSuccion",
        "conexionDescarga",
        "OringMaterial",
        "flowControl",
        "diaphragmDetection",
        "baseOption",
        "codeComplete",
        "liquidEndExtended",
        "tempExtended",
        "driveExtended",
        "motorExtended",
        "lubricationOption",
        "coatingOption",
        "componentTestOption",
        "runTestOption"
    ];

    // Suma los valores seleccionados
    let code = "";
    selects.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.value) {
            code += el.value;
        }
    });

    // Muestra el código en el campo MODELO
    document.getElementById("MODELO").textContent = code;
    document.getElementById("MODELO2").textContent = code; // Si también quieres mostrarlo en MODELO2

    return code;
}






function mostrarOpcionesAdicionales() {
    var select = document.getElementById('codeComplete');
    var bloque = document.getElementById('opcionesAdicionales');
    if (select.value === 'N') {
        bloque.style.display = 'block';
       /*
        bloque.style.display = 'flex';
        bloque.style.flexDirection = 'row'; 
        bloque.style.justifyContent = 'flex-end';
        bloque.style.textAlign = 'left';
        bloque.style.width = '350px';
        bloque.style.lineHeight = '26px';
        bloque.style.marginBottom = '5px';*/
    } else {
        bloque.style.display = 'none';
    }
}

function copiarModelo() {
    // Obtiene el texto del modelo generado
    const modelo = document.getElementById("MODELO").textContent;
    // Copia al portapapeles usando la API moderna
    if (navigator.clipboard) {
        navigator.clipboard.writeText(modelo)
            .then(() => alert("Modelo copiado al portapapeles"))
            .catch(() => alert("No se pudo copiar el modelo"));
    } else {
        // Fallback para navegadores antiguos
        const tempInput = document.createElement("input");
        tempInput.value = modelo;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert("Modelo copiado al portapapeles");
    }
}


function generarResumen() {
    // Define los campos y sus descripciones
    const campos = [
        { id: "Linea", label: "Línea" },
        { id: "materialCabezal", label: "Material del cabezal" },
        { id: "plungerDiameter", label: "Diámetro del émbolo" },
        { id: "motor", label: "Motor" },
        { id: "montajeMotor", label: "Tipo Montaje Motor" },
        { id: "conexionSuccion", label: "Conexión de Succión" },
        { id: "conexionDescarga", label: "Conexión de Descarga" },
        { id: "OringMaterial", label: "Material del Oring" },
        { id: "flowControl", label: "Control de Caudal" },
        { id: "diaphragmDetection", label: "Detección de Ruptura" },
        { id: "baseOption", label: "Opción de Base" },
        { id: "codeComplete", label: "Código Completo" },
        { id: "liquidEndExtended", label: "Opciones Extendidas del Cabezal" },
        { id: "tempExtended", label: "Opciones Extendidas de Temperatura" },
        { id: "driveExtended", label: "Opciones Extendidas de Transmisión" },
        { id: "motorExtended", label: "Opciones Extendidas de Motor" },
        { id: "lubricationOption", label: "Opciones de Lubricación" },
        { id: "coatingOption", label: "Opciones de Sistema de Pintura" },
        { id: "componentTestOption", label: "Opciones de Prueba de Componentes" },
        { id: "runTestOption", label: "Opciones de Prueba de Funcionamiento" }
    ];

    let resumen = "<h4>Resumen de opciones seleccionadas:</h4><ul>";

    campos.forEach(campo => {
        const select = document.getElementById(campo.id);
        if (select && select.value) {
            const texto = select.options[select.selectedIndex].text;
            resumen += `<li><strong>${campo.label}:</strong> ${texto}</li>`;
        }
    });

    resumen += "</ul>";

     document.getElementById("resumenOpciones").innerHTML = 
        `<button id="btnCopiarResumen" type="button" onclick="copiarResumen()" style="margin-bottom:10px;">Copiar resumen</button>` +
        resumen;
}


function copiarResumen() {
    const resumen = document.getElementById("resumenOpciones").innerText;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(resumen)
            .then(() => alert("Resumen copiado al portapapeles"))
            .catch(() => alert("No se pudo copiar el resumen"));
    } else {
        alert("Tu navegador no soporta la función de copiar al portapapeles.");
    }
}

function generarDescripcion() {
    const codigo = document.getElementById("codigoEntrada").value.trim();

    // Define las longitudes de los valores esperados para cada select
    const campos = [
        { id: "Linea", label: "Línea", length: 4 },
        { id: "materialCabezal", label: "Material del cabezal", length: 1 },
        { id: "plungerDiameter", label: "Diámetro del émbolo", length: 1 },
        { id: "motor", label: "Motor", length: 2 },
        { id: "montajeMotor", label: "Tipo Montaje Motor", length: 1 },
        { id: "conexionSuccion", label: "Conexión de Succión", length: 1 },
        { id: "conexionDescarga", label: "Conexión de Descarga", length: 1 },
        { id: "OringMaterial", label: "Material del Oring", length: 1 },
        { id: "flowControl", label: "Control de Caudal", length: 1 },
        { id: "diaphragmDetection", label: "Detección de Ruptura", length: 1 },
        { id: "baseOption", label: "Opción de Base", length: 1 },
        { id: "codeComplete", label: "Código Completo", length: 1 },
        { id: "liquidEndExtended", label: "Opciones Extendidas del Cabezal", length: 2 },
        { id: "tempExtended", label: "Opciones Extendidas de Temperatura", length: 1 },
        { id: "driveExtended", label: "Opciones Extendidas de Transmisión", length: 1 },
        { id: "motorExtended", label: "Opciones Extendidas de Motor", length: 1 },
        { id: "lubricationOption", label: "Opciones de Lubricación", length: 1 },
        { id: "coatingOption", label: "Opciones de Sistema de Pintura", length: 1 },
        { id: "componentTestOption", label: "Opciones de Prueba de Componentes", length: 1 },
        { id: "runTestOption", label: "Opciones de Prueba de Funcionamiento", length: 1 }
    ];

    let descripcion = "<h4>Descripción generada:</h4><ul>";
    let index = 0;

    campos.forEach(campo => {
        const valor = codigo.substring(index, index + campo.length); // Extrae la parte correspondiente del código
        index += campo.length; // Actualiza el índice para la siguiente parte

        const select = document.getElementById(campo.id);
        if (select) {
            const opcion = Array.from(select.options).find(opt => opt.value === valor);
            descripcion += `<li><strong>${campo.label}:</strong> ${opcion ? opcion.text : "No encontrado"}</li>`;
        }
    });

    descripcion += "</ul>";
    document.getElementById("descripcionGenerada").innerHTML = descripcion;
}