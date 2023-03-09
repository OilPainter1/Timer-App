let userHoursInput
let userMinutesInput
let userSecondsInput

const spinner = $(".spinner").spinner({
    min:0,
    classes: {
        "ui-spinner": "highlight",
        
    }
}).val(0)

$("#start").prop("disabled","true")

$("#reset").click((event)=>{
    $(".spinner").val(0)
    return
})


$("#configure").click((event)=>{
    userHoursInput = $("#HoursInput").val()
    userMinutesInput = $("#MinutesInput").val()
    userSecondsInput = $("#SecondsInput").val()
    console.log(userHoursInput,userMinutesInput,userSecondsInput)
})


