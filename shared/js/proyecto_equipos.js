
const personajes = [
    "San José de Calasanz",
    "San Pompilio María Pirrotti",
    "San Faustino Míguez de la Encarnación",
    "Beato Pedro Casani de la Natividad de Santa María Virgen",
    "Beato David Carlos de Vergara Marañón",
    "Beato Dionisio Pamplona Polo",
    "Beato Enrique Canadell Quintana",
    "Beato Faustino Oteiza Segura",
    "Beato José Ferrer Esteve",
    "Venerable Glicerio Landriani",
    "Venerable Pedro Díez Gil de la Virgen del Carmen",
    "Siervo de Dios Joaquín Erviti Lazcano",
    "Beato Florentín Felipe Naya",
    "Beato Alfredo Parte Sáiz",
    "Beato Carlos Navarro Miquel",
    "Beato Francisco Carceller Galindo",
    "Beato Ignacio Casanovas Perramón",
    "Beato Juan Agramunt Riera",
    "Beato Manuel Segura López",
    "Beato Matías Cardona Meseguer"
];

const datosEquipos = [
    // 3.º C
    {c:"3C",n:1,a:"Cetrángolo Luna Juan Martín; Tejada Mohsen Bautista",r:"https://github.com/jmcetraluna-stack/Proyectos",p:"https://jmcetraluna-stack.github.io/Proyectos/"},
    {c:"3C",n:2,a:"Chierico Francisco; Rodriguez Valentino",r:"https://github.com/Equipo4Informatica3C/Proyecto",p:"https://equipo4informatica3c.github.io/Proyecto/"},
    {c:"3C",n:3,a:"Kolada Arata Olivia; Perez Toselli Delfina",r:"https://github.com/delfiyoli/proyecto.git",p:"https://delfiyoli.github.io/proyecto/"},
    {c:"3C",n:4,a:"Argnani Santino; Ferrara Lucio",r:"https://github.com/lucioferrara23/Proyecto",p:"https://lucioferrara23.github.io/Proyecto/"},
    {c:"3C",n:5,a:"González Abril; Zambrano Panezo Camila Alejandra",r:"https://github.com/Camila1Abril/Proyecto",p:"https://camila1abril.github.io/Proyecto/"},
    {c:"3C",n:6,a:"Lasarte Josefina Rosario; Suyon Ortiz Belinda Ivanna",r:"https://github.com/beluyjose/Proyecto",p:"https://beluyjose.github.io/Proyecto/index.html"},
    {c:"3C",n:7,a:"De Feo Milagros; Poggi Catalina",r:"https://github.com/cata-mili/PROYECTO",p:"https://cata-mili.github.io/PROYECTO/"},
    {c:"3C",n:8,a:"Muraro Camila; Tranfo Sofía",r:"https://github.com/sofiycami/proyecto.git",p:"https://sofiycami.github.io/proyecto/"},
    {c:"3C",n:9,a:"Federico Lupe; Méndez Emilia",r:"https://github.com/lfederico-prong/Proyecto",p:"https://lfederico-prong.github.io/Proyecto/index.html"},
    {c:"3C",n:10,a:"Castro Joaquín; Malfatti Francisco",r:"https://github.com/joaquincastro-franmalfatti/Proyecto-Glicerio-Landriani-",p:"https://joaquincastro-franmalfatti.github.io/Proyecto-Glicerio-Landriani-/"},
    {c:"3C",n:11,a:"Gomez Candela; Miguel Isabella",r:"https://github.com/miguelygomez/PROYECTO",p:"https://miguelygomez.github.io/PROYECTO/"},
    {c:"3C",n:12,a:"Argenzio Sofía; Bernardello Luana",r:"https://github.com/SofiyLua/Proyecto",p:"https://sofiylua.github.io/Proyecto/"},
    {c:"3C",n:13,a:"Camaño Martella Victoria; Ramos Juan Ignacio",r:"https://github.com/vickycm0807/proyecto",p:"https://vickycm0807.github.io/proyecto/"},
    {c:"3C",n:14,a:"Brambilla Francisco; Vargas Santino",r:"https://github.com/franbrambilla2026/proyecto",p:"https://franbrambilla2026.github.io/proyecto/"},
    {c:"3C",n:15,a:"Pérez Toselli Sebastián; Stumpo Tomas",r:"https://github.com/TotoySeba/Proyecto-",p:"https://totoyseba.github.io/Proyecto-/"},
    {c:"3C",n:16,a:"Lopez Maneffa Emma; Scardaccione Chiara",r:"https://github.com/emmaykiki/Proyecto",p:"https://emmaykiki.github.io/Proyecto/"},
    {c:"3C",n:17,a:"Lopez Varas Lucio; Martinez Tomas",r:"https://github.com/MLdev-2026/proyecto",p:"https://mldev-2026.github.io/proyecto/"},
    {c:"3C",n:18,a:"Dávila Pico Ignacio; Peralta Benjamín",r:"https://github.com/nachodp11/proyecto.git",p:"https://nachodp11.github.io/proyecto/"},
    {c:"3C",n:19,a:"Magula Lucia; Paganelli Emma",r:"https://github.com/emmitayluchu/Proyecto.git",p:"https://emmitayluchu.github.io/Proyecto/"},
    {c:"3C",n:20,a:"Gopar Julia; Porta Milagros",r:"https://github.com/juliamilagros/proyecto.git",p:"https://juliamilagros.github.io/proyecto/"},

    // 3.º H
    {c:"3H",n:1,a:"Catalán Victoria; Jafelle Rossi Jazmín",r:"https://github.com/jjafellerossi-cpu/proyecto",p:""},
    {c:"3H",n:2,a:"Jimenez Abril; Mastrangelo Enzo",r:"",p:""},
    {c:"3H",n:3,a:"Cabaleiro Infante Matías; Hernández Calbá Nicolás",r:"https://github.com/MatiasHer91218/proyecto",p:"https://matiasher91218.github.io/proyecto/"},
    {c:"3H",n:4,a:"Chen Matias; Montero Facundo",r:"https://github.com/matiasignaciochen-hub/proyecto.git",p:""},
    {c:"3H",n:5,a:"Amato Santino; Gandolfo Ignacio",r:"https://github.com/Santiynacho/proyecto./",p:"https://santiynacho.github.io/proyecto./"},
    {c:"3H",n:6,a:"Blanco Lola; Picciuolo Constanza",r:"https://github.com/Coniylola/proyecto",p:"https://coniylola.github.io/proyecto/"},
    {c:"3H",n:7,a:"Maguiña Hilario Ayelén Milagros; Niño Halabe Farid",r:"https://github.com/fninohalabe-ctrl/proyecto",p:""},
    {c:"3H",n:8,a:"Alloni Guadalupe; Cirilo Navarro Thiago Julian",r:"https://github.com/milanesit/proyecto",p:""},
    {c:"3H",n:9,a:"Abel Nicolas Alejandro; Vilaboa Tadeo",r:"https://github.com/Vilabel/Proyecto",p:"https://vilabel.github.io/proyecto/index.html"},
    {c:"3H",n:10,a:"Gargiulo Agustina Pilar; Haslop Luz María",r:"https://github.com/gargiulo-haslop/Proyecto-integrador",p:"https://gargiulo-haslop.github.io/Proyecto-integrador/"},
    {c:"3H",n:11,a:"Bellizzi Dante; Prieto Juan Ignacio",r:"https://github.com/prieto-bellizzi/informatica",p:"https://humanidades2026.github.io/Protecto/"},
    {c:"3H",n:12,a:"Bruzzese Tomás; Degdeg Facundo",r:"https://github.com/tomasbruzzese/proyecto",p:"https://tomasbruzzese.github.io/proyecto/"},
    {c:"3H",n:13,a:"Gamarra Emanuel; Villafuerte Mick",r:"https://github.com/mickmoscoso/proyecto",p:"https://mickmoscoso.github.io/proyecto/index.html"},
    {c:"3H",n:14,a:"Crivelli Juan Ignacio; Molina Thiago",r:"https://github.com/Crivelli-Molina/proyecto.git",p:"https://crivelli-molina.github.io/proyecto/"},
    {c:"3H",n:15,a:"De Llano Candela; Gonzalez Joaquin",r:"https://github.com/gonz912/proyecto.info",p:""},
    {c:"3H",n:16,a:"Maino Maria de los Ángeles; Riganti Isabel María",r:"https://github.com/angie-isa/Proyecto-",p:"https://angie-isa.github.io/Proyecto-/"},
    {c:"3H",n:17,a:"Cerisola Paloma; Miranda Gonzalo",r:"https://github.com/Gonza-y-Paloma/Trabajo-Beato-Ignacio-Casanovas-Perram-n.git",p:"https://gonza-y-paloma.github.io/Trabajo-Beato-Ignacio-Casanovas-Perram-n/"},
    {c:"3H",n:18,a:"Cippitelli Valentín; Frutis Lucas Leopoldo",r:"",p:""},
    {c:"3H",n:19,a:"Conde Ignacio; Fernandez Martín",r:"https://github.com/condefernandez/proyecto",p:"https://condefernandez.github.io/proyecto/"},
    {c:"3H",n:20,a:"Bellomo Valentina; Ramos Condori Cecilia",r:"https://github.com/CeciyValen/proyecto",p:"https://ceciyvalen.github.io/proyecto/"},

    // 3.º E
    {c:"3E",n:1,a:"Corallo Stefano Alejandro; Marotta Tiziano Germán",r:"https://github.com/Corallo123/Proyecto-Web-Rostros-de-la-Santidad-Escolapia",p:"https://corallo123.github.io/Proyecto-Web-Rostros-de-la-Santidad-Escolapia/"},
    {c:"3E",n:2,a:"Baes Zaira; Reyes Ortiz Jana",r:"https://github.com/janitayzai/proyecto2/",p:"https://janitayzai.github.io/proyecto2/"},
    {c:"3E",n:3,a:"Marín María; Pastorino Guadalupe",r:"https://github.com/maripasto/Proyecto",p:"https://maripasto.github.io/Proyecto/index.html"},
    {c:"3E",n:4,a:"Bianco Celeste; Ces Moledo Sofía",r:"https://github.com/cybianco-ship-it/Proyecto.git",p:"https://cybianco-ship-it.github.io/Proyecto/"},
    {c:"3E",n:5,a:"Fuentes Catalina; Giso Micaela",r:"https://github.com/Mica-Belu/Proyecto",p:"https://mica-belu.github.io/Proyecto/"},
    {c:"3E",n:6,a:"González Luz; Rodriguez Sofia",r:"https://github.com/SofiaRodriguezyLuzGonzalez/Proyecto-Web-Rostros-de-la-Santidad-Escolapia",p:"https://sofiarodriguezyluzgonzalez.github.io/Proyecto-Web-Rostros-de-la-Santidad-Escolapia"},
    {c:"3E",n:7,a:"Lewkowicz Rial Martina; Sottana Mirko",r:"https://github.com/martumirko/Proyecto",p:"https://martumirko.github.io/Proyecto/"},
    {c:"3E",n:8,a:"Cingolani Isabella; Vazquez Ambrosano Delfina",r:"https://github.com/DelfinaeIsabella/proyecto",p:"https://delfinaeisabella.github.io/proyecto/"},
    {c:"3E",n:9,a:"Converti Rocco; Ravizzoli Lucio",r:"https://github.com/GerardProgramador/Proyecto",p:"https://gerardprogramador.github.io/Proyecto/"},
    {c:"3E",n:10,a:"Cruz Daiana; Ignacio Morena; Inocente Zahira",r:"https://github.com/moreigna/Proyecto",p:"https://moreigna.github.io/Proyecto/"},
    {c:"3E",n:11,a:"Kahale Ambar; Lovece Martina",r:"https://github.com/akahale/Proyecto/",p:"https://akahale.github.io/Proyecto/"},
    {c:"3E",n:12,a:"Helvadjian Camila; Lastiry Sofia",r:"https://github.com/camiysofi/proyecto",p:"https://camiysofi.github.io/proyecto/"}
];

// Completa automáticamente los datos del personaje y la imagen.
const equipos = datosEquipos.map(equipo => ({
    ...equipo,
    personaje: personajes[equipo.n - 1],
    imagen: `../shared/proyecto_img/personaje-${String(equipo.n).padStart(2, "0")}.jpeg`
}));


