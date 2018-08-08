 $(function() { 
 
    $.get('http://localhost:3000/studentsApi/',function(data){
        console.log(data);
   }); 

});

$(".student-form").submit(function(){
    $.post(
        'http://localhost:3000/studentsApi/', 
        {
            name: $('#feedback-form-name').val(),
            rollNumber: $('#feedback-form-rollnumber').val(),
            className: $('#feedback-form-class').val(),
        }, 
        function(data){
            console.log(data);
        });
});