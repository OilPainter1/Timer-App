let userHoursInput
let userMinutesInput
let userSecondsInput

const spinner = $(".spinner").spinner({
    min:0,
    classes: {
        "ui-spinner": "highlight",
        
    }
}).val(0)

$("#start").attr("disabled","true")

$("#reset").click((event)=>{
    if(!$("#start").prop("disabled")){
        $("#start").attr("disabled","true")
        $("#configure").removeAttr("disabled")
    }
    $(".spinner").val(0)
    return
})

function setTimer(hours,minutes,seconds){
    $("#timerHours").text(hours)
    $("#timerMinutes").text(minutes)
    $("#timerSeconds").text(seconds)
    return
}




$("#configure").click((event)=>{
    userHoursInput = $("#HoursInput").val()
    userMinutesInput = $("#MinutesInput").val()
    userSecondsInput = $("#SecondsInput").val()
    setTimer(userHoursInput,userMinutesInput,userSecondsInput)
    $("#configure").prop("disabled","true")
    $("#start").removeAttr("disabled")
    console.log(userHoursInput,userMinutesInput,userSecondsInput)

})

$("#start").click((event)=>{
    $("#start").attr("disabled","true")
    var timeout = moment.duration({
        seconds: userSecondsInput,
        minutes: userMinutesInput,
        hours: userHoursInput
    })

        setInterval(()=>{
        timeout.subtract(1,"s")
        setTimer(timeout._data.hours,timeout._data.minutes,timeout._data.seconds)
        console.log(timeout._data.hours,timeout._data.minutes,timeout._data.seconds)
        },1000)
    

})


