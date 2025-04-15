$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();

        const taskText = $('#task-input').val();
        
        if (taskText) {
            const taskItem = $('<li></li>').text(taskText);

            const removeButton = $('<button class="remove">Remover</button>');
            removeButton.click(function() {
                $(this).parent().remove();
            });

            taskItem.append(removeButton);

            taskItem.click(function() {
                $(this).toggleClass('completed');
            });

            $('#task-list').append(taskItem); 
            $('#task-input').val(''); 
        }
    });
});
