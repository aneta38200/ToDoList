$(document).ready(function(){
    $('#mode').click(function(){
        $(this).toggleClass("active");
        $('body').toggleClass("night");
        $('.logo').toggleClass("darkmode");
    });

    $(".new_task_text").on("keyup", function(e){
        if(e.keyCode == 13 && $(".new_task_text").val() != "")
        {
            var task = $("<div class='uncompleted_task'></div>").text($(".new_task_text").val());
            var del = $("<i class='fas fa-trash'></i>").click(function(){
                var p = $(this).parent();
                p.animate({
                    opacity: 0,
                    marginLeft: '100px'}
                    ,'fast','linear',function(){
                    p.remove();
                });
            });
            
            var check = $("<i class='fas fa-check'></i>").click(function(){
                var p = $(this).parent();
                p.fadeOut(function(){
                    $(".completed_tasks").append(p.toggleClass("completed_task"));
                    p.fadeIn();
                });
                $(this).remove();
            });

            task.append(del,check);
            $(".uncompleted_tasks").append(task);

            $(".new_task_text").val("");
        }
    });
});