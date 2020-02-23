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
    '"keywords":["fantasy", "epic", "aventure"], "score":5}'+
    '}}';

$(document).ready(function(){
    $('.nav-alert-custom')
    .mouseover(function(){
        $(this).find('span').addClass('alert-primary');
    })
    .mouseout(function(){
        $(this).find('span').removeClass('alert-primary')
    });
    $('.make-reservation').on('click', function(){
        alert("Successful Operation.\n A copy has just been reservated!");
    });
    //Buttons events
    var data_json = JSON.parse(data_json_text);
    $('.see-button').on('click', function(){
        let aux='<span class="badge badge-pill badge-success mr-3 ">';
        let idbook = new String($(this).attr("idb"));
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
    });
});