const msgPart1 = ["Quizás ", "Seguro ","Definitivamente ", "Probablemente ", "No dudes que ", "Hoy ", "No te preocupes, "];
const msgPart2 = ["la respuesta ", "lo que buscas ", "aquello ", "el dinero ", "la vida ", "el amor ", "la felicidad ", "lo bueno ", ] ;
const msgPart3 = ["llegará ", "se encuentra ", "se esconde ", "no está ",  "te alcanzará ", "se da ", "está "];
const msgPart4 = ["debajo de la cama", "mirando atrás", "en el futuro", "en un banquete", "ordenando tacos", "en la amistad", "en algún lugar de un gran país", "la luna", "adelante", "el viento", "entre las ofertas del OXXO"];
const asciiEmote = ["(* o *)", "(' v ')", "(・∀・)", "(★ ω ★)", "(´ ▿ `)", "(¬‿¬ )"];


const randomMsg = () => {
    const randomIndex1 = (Math.floor(Math.random()*msgPart1.length));
    const randomIndex2 = (Math.floor(Math.random()*msgPart2.length));
    const randomIndex3 = (Math.floor(Math.random()*msgPart3.length));
    const randomIndex4 = (Math.floor(Math.random()*msgPart4.length));
    const randomIndex5 = (Math.floor(Math.random()*asciiEmote.length));
    

    console.log(`======= El mensaje de hoy =======`);
    console.log('\n')
    console.log(msgPart1[randomIndex1] + msgPart2[randomIndex2] + msgPart3[randomIndex3] + msgPart4[randomIndex4] +".");
    console.log('\n')
    console.log(`============ ${asciiEmote[randomIndex5]} ============`)
};

console.log(randomMsg());