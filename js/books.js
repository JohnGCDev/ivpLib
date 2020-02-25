/*Variable wich simulate web server response */
var data_json_text='{"books": {'+
    '"b1":{"img":"phpbook.jpg","title":"PHP for Absolute Beginners", "author":"Jason Lengstorf",'+
    '"edition":"1st", "editorial":"Apress", "year":"2009", "isbn":"1430224738", "copies":"6",'+
    '"keywords":["web", "programming", "php"], "score":3.5},'+
    '"b2":{"img":"physicsbook.jpg","title":"Principles of Physics", "author":"Resnick, Halliday and Jearl Walker",'+
    '"edition":"9th", "editorial":"Wiley", "year":"2004", "isbn":"ES8-0-470-56158-4", "copies":"6",'+
    '"keywords":["science", "physics", "principles"], "score":4.5},'+
    '"b3":{"img":"lordoftheringsbook.jpg","title":"Lord of the Rings", "author":"J.R.R. Tolkien",'+
    '"edition":"One-volume edition", "editorial":"Houghton Mifflin", "year":"2004", "isbn":"0-618-64561-6", "copies":"13",'+
    '"keywords":["fantasy", "epic", "aventure", "bestseller"], "score":5}'+
    '}}';

    var reservation_control_json = {"reservations": []};
    var aux_global;

$(document).ready(function(){
    $('.nav-alert-custom')
    .mouseover(function(){
        $(this).find('span').addClass('alert-primary');
    })
    .mouseout(function(){
        $(this).find('span').removeClass('alert-primary')
    });
    //Buttons events
    var data_json = JSON.parse(data_json_text);
    //See more Function
    $('.see-button').on('click', function(){ 
        let aux='<span class="badge badge-pill badge-success mr-3 ">';
        let idbook = new String($(this).attr('idb'));
        aux_global = idbook;
        $('#see-img').attr('src', "./img/"+data_json.books[idbook].img);
        $('#see-title').val(data_json.books[idbook].title);
        $('#see-author').val(data_json.books[idbook].author);
        $('#see-editorial').val(data_json.books[idbook].editorial);
        $('#see-edition').val(data_json.books[idbook].edition);
        $('#see-year').val(data_json.books[idbook].year);
        $('#see-copies').val(data_json.books[idbook].copies);
        $('#see-isbn').val(data_json.books[idbook].isbn);
        for(i=0; i<data_json.books[idbook].keywords.length; i++){
            aux += data_json.books[idbook].keywords[i].toUpperCase() +'</span><span class="badge badge-pill badge-success mx-3">';
        } aux += '</span>';
        $('#see-keywords').html(aux);
        $('#see-score').html(data_json.books[idbook].score);
        $('#reserve-tile').html(data_json.books[idbook].title + ' ('+data_json.books[idbook].edition+')');
    });
    //Reservating Function
    $('#make-reservation').on('click', function(){
        alert("Successful Operation.\nA copy has just been reservated!");
        reservation_control_json.reservations.push(aux_global);
        refresh_reservation_buttons();
    });
    $('.reserve-button').on('click', function(){
        let idbook = new String($(this).attr('idb')), exist=-1;
        aux_global = idbook;
        //Checking existence at reservation_control_json
        /*for(i=0; i< reservation_control_json.reservations.length; i++){
            exist = (idbook.localeCompare(reservation_control_json.reservations[i])); 
            if (exist == 0) break;
        }
        //Results
        if(exist == 0){//Undo Reservation
            if(confirm("Are you sure to undo your reservation?")){
                reservation_control_json.reservations.pop(idbook);
                $('.reserve-button').filter("[idb='"+idbook+"']")
                .parent().html(
                    '<button type="button" class="btn btn-primary btn-sm m-2 see-button" data-toggle="modal" data-target="#see-more-modal" idb="'+idbook+'"><span class="fas fa-glasses"></span> SEE MORE</button>'+
                    '<button type="button" class="btn btn-primary btn-sm m-2 mt-4 reserve-button" data-toggle="modal" data-target="#reserve-modal" idb="'+idbook+'"><span class="fas fa-book-open"></span> RESERVE COPY</button>'
                );
                //PROBLEM: Recreating 'see-more' and 'reservation' buttons extracts these button's functionality :C
            }
        }else{//Do Reservation*/
           $('#reserve-tile').html(data_json.books[idbook].title + ' ('+data_json.books[idbook].edition+')'); 
        /*}*/
    });
    //Deleting Function
    $('.delete-button').on('click', function(){
        let idbook = new String($(this).attr('idb'));
        $('#delete-title').html(data_json.books[idbook].title + ' ('+data_json.books[idbook].edition+')');
    });
    $('#deleting').on('click', function(){
        alert('Successful Operation.\nThe book has just been "delete"!');
    });
    //Support Function
    function refresh_reservation_buttons(){
        let item;
        item = reservation_control_json.reservations[reservation_control_json.reservations.length-1];

        $(".reserve-button").filter("[idb='"+item+"']")
        .removeClass('btn-primary ')
        .addClass('btn-secondary')
        .attr('data-toggle','')
        .attr('data-target','')
        .html('<span class="fas fa-undo"></span> UNDO RESERVATION');
    
    }
});