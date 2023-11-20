
var estado = 1; // 1 para imagen normal, 2 para imagen presionada
var pezImagen = document.getElementById("pez2");
var miMusica = document.getElementById("miMusica");
var esferas = document.getElementById("esferas");
var cartel = document.getElementById("xmas");
var intervalID;

        function cambiarImagen() {
            var imagen = document.getElementById("botonImagen");

            if (estado === 1) {
                imagen.src = "./imgGit/2button.png";
                pezImagen.style=" animation: aparecerDesaparecer 1s infinite;"
                esferas.style="margin-top:60px;margin-left: -40px; animation: rotateAnimation 2s ease-in-out infinite;";
                cartel.style="margin-left: 1000px; margin-top:100px; animation: rotateAnimation 2s ease-in-out infinite;";
                miMusica.play()
                estado = 2;
                
            } else {
                imagen.src = "./imgGit/1button.png";
               pezImagen.style=" opacity:0;";
               esferas.style="opacity:0;";
               cartel.style="opacity:0;";
                miMusica.pause()
            
                estado = 1;
            }
        }

        function repetir(){
            miMusica.pause(); // Pausa la música
            miMusica.currentTime = 0;
            pezImagen.style=" opacity:0;";
            esferas.style="opacity:0;";
            cartel.style="opacity:0;";
            imagen.src = "./imgGit/1button.png";
            
        }

      