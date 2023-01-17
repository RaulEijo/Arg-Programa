var clickCount = 0;

var mensajeTurbioIzq = document.getElementById('mensajeTurbioIzq');
var mensajeTurbioMed = document.getElementById('mensajeTurbioMed');
var mensajeTurbioDer = document.getElementById('mensajeTurbioDer');
var botonTurbioTexto = document.getElementById('botonTurbio');

console.log(clickCount);

document.getElementById('botonTurbio').onclick = function(){
    clickCount++;

    console.log("el numero actualizado es: "+clickCount);

    switch(clickCount){
        case 1:
            
            mensajeTurbioMed.innerHTML = "TU";
            mensajeTurbioMed.style.color = 'red';
            mensajeTurbioMed.style.fontWeight = 'bold';
            mensajeTurbioMed.style.fontSize = '20px';
        break;

        case 2:
            mensajeTurbioIzq.innerHTML = "¿De verdad querés saber donde estoy?";
            mensajeTurbioMed.innerHTML = "";
            mensajeTurbioDer.innerHTML = "";
            botonTurbioTexto.innerHTML = "   .   .   .   ";
        break;

        case 3:
            mensajeTurbioIzq.innerHTML = ""
            botonTurbioTexto.innerHTML = "Revelar ubicación actual"
        break;

        case 4:
            const outputSpan = document.getElementById('contenedorDeTexto');
            outputSpan.style.color = 'red';
            outputSpan.style.fontSize = '30px';
            var doppleganger = document.getElementById('contenedorDeImagen');
            var printArea = document.getElementById('printAreaId');
            var audioGlitch = document.getElementById('sonidosRancios');




            const textoTipeado = 'A̵̡̡̢̳͓͎̯̻̗͇̥̪̲̖̻̖̥̝̺̪̰̓̆̓͗͂̋̏̓̈́̀͌͜͝ ̶̢̨̛̝̗͙̪̤̦͇̼͉͙̀̏͒̉͗̏̊̏̈́̈́̆̔͐̕͜͜͝͝T̵̢̨̡̨͓̩͙͙̞̪̖̣͔̫̻͓̜͚̥͋͐͌̈̋̃͛̋̅́̊ ̶̢̧͇̜͓̖̘̰̬͖̜̖̼̦̗̜̺͇̳̹̦̟̅̊̅͐̅̇̿̍͆̆̐̈́̑͒̍̋̐R̸̡͍̮̙̜͔̲̰̮͖̈́̽ͅ ̵̧̨͙̮͖̠̘̳͎̹̟̳̘͙̳̝̜͈̥͖͎̦͎̪̰̩̫̒̉̉̓̎̔̒̀̎̅͐̍͒̈̃͛͛̊̕̚͘͝͝͠͝Ą̴̢̻̳͖̥̬̪̖͈̖̗̃̈́͐̆̅̈̒̾̓̔̔̽͋̌͗̿̚͜͝ ̷̛̜̺͔̥̓̀́͒͌̊̂̔̿̎͌̊̀̆͗̀͆́̅͛̓͘̕͝͝͝S̴̳͖̙̗̮̣̦̟̩̟͚̼͖̺̜̼̣̹͉͓͠ ̶̡̹̭̙̟̝͕̼̼̟̖̹̄̌ͅ ̶̢̢̡̠̦̝͙̱̥̯̱̤͕̟̱͎̬̬͎̖͔̗͈̦̂̀̑̌̿̓̐̐̀̀͐͝ ̶̡̛̞̞̭̄̈̃͐͌͊̄̈̈͆́̈́͗̿̆̑́̀̎̉́͘̚͠T̷̨̛̳͇̬̯̙̝̥̠͛̌͑̅̿̿̆̊͂̄̌̈͒̈́͂̚̚͜ ̷̨̡̢̤̹͍͔̜̲̬̜͙̖̻̟͕̠̂͐̽̇̐͊͛̎̂̾͊̚Ṷ̶̡̭͈̙̰̩͙̬͔͍̱̥̫̻̞̳̒̎͌͆͛̽̋̀̈́̈̎̍̑̎̃̆̀͘͜͠ ̶̦͙̳̗̯͕̦͎̤̪͛̉̂̾̐͊̐̀̃̋͗̈̐̾̀͐̑̔̑́̃̋͝ͅŸ̸̢̧̠͓̥͍̰̞͔̣̖̩̗͍͍͎̣̩̜͙͈͍́̍̋̈́̓́̆̏̒̈́̾̓́̅́̍̓̐̋͋̕͜͝͠ ̷̢̠̞͓̞̟͖̩̙̝̪̖͔̳͚̰̆͒̈͑̽̽̊̈͛̋͒́̇O̴̡̮̙̥̻̎̽̉͋͌͝';



            let i = 0;

            setTimeout(typewriterMachine, 1000)

            function typewriterMachine(){

                const intervalId = setInterval(function(){
                        outputSpan.innerHTML += textoTipeado[i];
                        i++;

                       if(i == textoTipeado.length){
                           clearInterval(intervalId);
                        }

                }, 1)
            }

            setTimeout(reproductor, 1000)

            function reproductor(){
                
                audioGlitch.play();
            }

            setTimeout(ocultarTodo, 11000)

            function ocultarTodo(){
                printArea.style.display = 'none'
                doppleganger.style.display = 'block'
                

            }

            setTimeout(cerrarVentana, 12000)

            function cerrarVentana(){
                window.close();
            }
            
        break;



    

    }
}

