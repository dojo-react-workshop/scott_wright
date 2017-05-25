$(document).ready(()=>{
   $('#submit').click(()=>{
    let newName = $('#fullName').val()
    if (newName != '') {
        $.post( "/names", {"fullName" : newName} ,((res)=>{
            //add it to the existing list
            $('#list').append(`<li>${newName}</li>`);
        }))
    }
   })
})


