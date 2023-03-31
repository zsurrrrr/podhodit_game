$( document ).ready(function() {

  $( function() {
      $( ".paper" ).draggable({ containment: ".content"});
      $( ".paper" ).draggable({ revert: true });
      $( ".romb" ).droppable({
        drop: function( event, ui ) {
          $( ".content2" ).css( "display", 'block' );
          $( ".content1" ).css( "display", 'none' );
          $( ".back" ).css( "background-color", '#FFC759' );
          $(".knopka").click(function() {
            $( ".content2" ).css( "display", 'none' );
            $( ".content1" ).css( "display", 'block' );
            $( ".back" ).css( "background-color", '#5687FF' );
        });
        }
      });
    });


  $( function() {
      $( ".paper" ).draggable({ containment: ".content"});
      $( ".polygon" ).droppable({
        drop: function( event, ui ) {
          $( ".content3" ).css( "display", 'block' );
          $( ".content1" ).css( "display", 'none' );
          $( ".back" ).css( "background-color", '#79E759' );
          $(".knopka").click(function() {
            $( ".content3" ).css( "display", 'none' );
            $( ".content1" ).css( "display", 'block' );
            $( ".back" ).css( "background-color", '#5687FF' );
        });
        }
      });
    } );



  $( function() {
      $( ".paper" ).draggable({ containment: ".content"});
      $( ".circle" ).droppable({
        drop: function( event, ui ) {
          $( ".content4" ).css( "display", 'block' );
          $( ".content1" ).css( "display", 'none' );
          $( ".back" ).css( "background-color", '#F86B6B' );
          $(".knopka").click(function() {
            $( ".content4" ).css( "display", 'none' );
            $( ".content1" ).css( "display", 'block' );
            $( ".back" ).css( "background-color", '#5687FF' );
        });
        }
      });
    } );


  $( function() {
      $( ".paper" ).draggable({ containment: ".content"});
      $( ".star" ).droppable({
        drop: function( event, ui ) {
          $( ".content5" ).css( "display", 'block' );
          $( ".content1" ).css( "display", 'none' );
          $( ".back" ).css( "background-color", '#B087F3' );
          $(".knopka").click(function() {
            $( ".content5" ).css( "display", 'none' );
            $( ".content1" ).css( "display", 'block' );
            $( ".back" ).css( "background-color", '#5687FF' );
        });
        }
      });
    } );



  $( function() {
      $( ".part2" ).draggable({ axis: "x" });
      $( ".part2" ).draggable({ revert: true });
      $( ".part1" ).droppable({
        drop: function( event, ui ) {
          $( ".fin" ).css( "display", 'block' );
          $( ".content2" ).css( "display", 'none' );
          $( ".back" ).css( "background-color", '#5687FF' );
          $(".knopka").click(function() {
            $( ".fin" ).css( "display", 'none' );
            $( ".content1" ).css( "display", 'block' );
            $( ".back" ).css( "background-color", '#5687FF' );
        });
        }
      });
    } );

  $(".voskl").click(function() {
    $( ".content1" ).css( "display", 'none' );
    $( ".info" ).css( "display", 'block' );
    $( ".back" ).css( "background-color", '#5687FF' );
    $(".knopka").click(function() {
      $( ".info" ).css( "display", 'none' );
      $( ".content1" ).css( "display", 'block' );
      $( ".back" ).css( "background-color", '#5687FF' );
    });
  });

  let putin = 0;

  $(".figure1").click(function() {
    $(".povorot").css("animation-play-state", 'running');
    putin += 1;
  });

  $(".figure2").click(function() {
    $(".povorot1").css("animation-play-state", 'running');
    putin += 1;
  });

  $(".figure3").click(function() {
    $(".povorot2").css("animation-play-state", 'running');
    putin += 1;
  });

  $(".proverka").click(function() {
    if (putin==3){
      $(".fin").css("display", 'block');
      $( ".content4" ).css( "display", 'none' );
      $( ".back" ).css( "background-color", '#5687FF' );
      $(".knopka").click(function() {
        $( ".fin" ).css( "display", 'none' );
        $( ".content1" ).css( "display", 'block' );
        $( ".back" ).css( "background-color", '#5687FF' );
      });
    };
  });

let putin2 = 0;

  // квадраты

  $(".kvadrat01_empty").click(function() {
    $( ".bip1" ).css("animation-play-state", "running");
    $( this ).css("opacity", "1");
    putin2 += 1;
  });

  $(".kvadrat02_empty").click(function() {
    $( ".bip2" ).css("animation-play-state", "running");
    $( this ).css("opacity", "1");
    putin2 += 1;
  });

  $(".kvadrat03_empty").click(function() {
    $( ".bip3" ).css("animation-play-state", "running");
    $( this ).css("opacity", "1");
    putin2 += 1;
  });

  // круги

  $(".crug01_empty").click(function() {
    $( ".bop1" ).css("animation-play-state", "running");
    $( this ).css("opacity", "1");
    putin2 += 1;
  });

  $(".crug02_empty").click(function() {
    $( ".bop2" ).css("animation-play-state", "running");
    $( this ).css("opacity", "1");
    putin2 += 1;
  });

  $(".crug03_empty").click(function() {
    $( ".bop3" ).css("animation-play-state", "running");
    $( this ).css("opacity", "1");
    putin2 += 1;
  });

  //  треугольники

  $(".treugolnuk01_empty").click(function() {
    $( ".bup1" ).css("animation-play-state", "running");
    $( this ).css("opacity", "1");
    putin2 += 1;
  });

  $(".treugolnuk02_empty").click(function() {
    $( ".bup2" ).css("animation-play-state", "running");
    $( this ).css("opacity", "1");
    putin2 += 1;
  });

  $(".treugolnuk03_empty").click(function() {
    $( ".bup3" ).css("animation-play-state", "running");
    $( this ).css("opacity", "1");
    putin2 += 1;
  });
  
  $(".proverka").click(function() {
    if (putin2==9){
      $(".fin").css("display", 'block');
      $( ".content3" ).css( "display", 'none' );
      $( ".back" ).css( "background-color", '#5687FF' );
      $(".knopka").click(function() {
        $( ".fin" ).css( "display", 'none' );
        $( ".content1" ).css( "display", 'block' );
        $( ".back" ).css( "background-color", '#5687FF' );
      });
    };
  });





});
