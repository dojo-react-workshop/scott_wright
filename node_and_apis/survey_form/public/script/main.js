$(document).ready(()=>{
   $('#submit').click(()=>{
    let newName = $('#fullName').val()
    if (newName != '') {
        $.post( "/names", {"fullName" : newName} ,((res)=>{
            //add it to the existing list
            $('#list').append(`<li>${newName}&nbsp;<img class="trash" src="./img/trash.png" alt="delete list item"></li>`);
        }))
    }
   })

   $('#list').on("click",".trash",function(){
        let newName = $(this).parent().text()
        $.post( "/remove", {"fullName" : newName} ,((res)=>{
            //do nothing
        }))
        $(this).parent().remove()
   })
})
