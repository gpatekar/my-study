 

 $(function() { 

     // api get call (static)
    $.get('http://localhost:3000/feedbackData/',function(data){
        console.log(data);
   }); 

});

//on  form submit
$(".feedback-form").submit(function(e){
    $.post('http://localhost:3000/feedbackData/', 
    {
        name: $('#feedback-form-name').val(),
        title: $('#feedback-form-title').val(),
        message: $('#feedback-form-message').val()
    }, function(data){
        var output = '';
        $.each(data,function(key, item) {
            output += '     <div class="feedback-item item-list media-list">';
            output += '       <div class="feedback-item media">';
            output += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
            output += '         <div class="feedback-info media-body">';
            output += '           <div class="feedback-head">';
            output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
            output += '           </div>';
            output += '           <div class="feedback-message">' + item.message + '</div>';
            output += '         </div>';
            output += '       </div>';
            output += '     </div>';
        });
        $('.feedback-messages').html(output);
    });
    return false;
});