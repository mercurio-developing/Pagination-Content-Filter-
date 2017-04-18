

// i declare all variables

var numberOfStudents = $(".student-list").children();
var numberForPage = 10;
var numberOfPage = Math.ceil(numberOfStudents.length / numberForPage) + 1;
var i;
var a;
var b;
var c;
var student;
var search;

// i create the functions!

function pagination (){
  $(window).on('load', function(){

    $(".student-item").hide();

//pagination in the first page when loading

    a = 0;
    b = (numberForPage * 1) - 1;

    for (i = a; i < b;i += 1){

              $(".student-item").eq(i).show();

    }

//pagination and creating to the page for the number of students in the list

  for (d = 1; d < numberOfPage; d += 1) {
    $(".pagination ul").append('<li><a  class="' + d + '" href="#">' + d + '</a></li>');
  }

//an equation for adding users and making the correct location with reference to the number of pages;

  $( ".pagination ul li a" ).click(function( event ) {

        $(".student-item").hide();

        c = parseInt( event.target.className);

        var a = ( c - 1 ) * numberForPage;
        var b = (numberForPage * c) - 1;

       for (i = a; i < b;i += 1){

                 $(".student-item").eq(i).show();

       }
    });

});

};

// function for searching students!!

function searchStundent() {

// i decided to use dblclick event for restoring the student list

    $('button').dblclick(function() {

      $(".student-item").hide();


      a = 0;
      b = (numberForPage * 1) - 1;

      for (i = a; i < b;i += 1){

                $(".student-item").eq(i).show();

      }


    });


// making the search button functional!!

    $('button').click(function(){

        $(".student-item").hide();
        search = $('input').val();     // i store the value in search
        $(".student-item:contains('" +search+ "')").show(); // if the variable search complete the reference the student is shown in the screen
        $("input").val(''); // remove the value in the input

        // when the word in search is not in the content of the list i put the message in the screen!
        if ($("h3:contains('" +search+ "')").eq(0).text() === ""){
            $('h10').remove();  //remove the historial of messages
            $(".student-list").append('<h10>No encontramos nada...</h10>');


        }

    });

}


pagination();
searchStundent();
