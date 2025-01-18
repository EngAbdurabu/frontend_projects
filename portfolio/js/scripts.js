// this function for change year automatically 
$(function(){
    var currentDate = new Date();
    $('#currentYear').text(currentDate.getFullYear());
});