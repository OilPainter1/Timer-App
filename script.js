const spinner = $(".spinner").spinner({
    min:0,
    classes: {
        "ui-spinner": "highlight",
        
    }
}).val(0)

$("#reset").click((event)=>{
    event.preventDefault()
    $(".spinner").val(0)
    return
})
