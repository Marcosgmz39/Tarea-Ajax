let plantilla = $(".row").html();
 
  $(".row").html("");

  $.get("https://3a8i3.github.io/libros/", function(datos){
    mostrarDatos(datos);
  });


  function mostrarDatos(d){



  for (let i = 0; i < d.length; i++) {
  let plantillaJQ =$(plantilla);

  plantillaJQ.find(".titulo").text(d[i].titulo);
  plantillaJQ.find(".anho").text(d[i].anho);
  plantillaJQ.find(".editorial").text(d[i].editorial);
  plantillaJQ.find('.resumen').text(d[i].resumen);
  plantillaJQ.find('.tema').text(d[i].temas);


  plantillaJQ.find('.nombre_autor').text(d[i].autor.nombre);
  plantillaJQ.find('.bio_autor').text(d[i].autor.biografia);
  plantillaJQ.find('.feC_nacimiento').text(d[i].autor.nacimiento.fecha);
  plantillaJQ.find('.ciu_nacimiento').text(d[i].autor.nacimiento.ciudad);
  plantillaJQ.find('.pais_nacimiento').text(d[i].autor.nacimiento.pais);
  plantillaJQ.find('.ciu_nacimiento').text(d[i].autor.nacimiento.ciudad);


  plantillaJQ.find('.portada').attr('src',d[i].portada);
  plantillaJQ.find('.foto').attr('src',d[i].autor.foto);
  plantillaJQ.find('.audio').attr('src',d[i].audio);

  $('.row').append(plantillaJQ);
  }
  }
