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

   //trash can function
   $('#list').on("click",".trash",function(){
        let newName = $(this).parent().text()
        $.post( "/remove", {"fullName" : newName} ,((res)=>{
            //do nothing
        }))
        console.log('removing')
        $(this).parent().remove()
   })

   //edit name function
   $('#list').on("dblclick","li",function(){
       if ($(this).children(":first").is('img')){
            let text = $(this).text()
            $(this).replaceWith(`<input class="edit" type="text" value="${text}">`).change()
       }
   })
    $('#list').on("blur",".edit",function(){
         let text = $(this).val()
        $(this).replaceWith(`<li>${text}&nbsp;<img class="trash" src="./img/trash.png" alt="delete list item"></li>`)
   })  
})


