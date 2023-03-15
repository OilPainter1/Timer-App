let userHoursInput
let userMinutesInput
let userSecondsInput
let timeout
let timerID
let timerFeedbackIntervalID


Disable(["start","stop"])

const spinner = $(".spinner").spinner({
    min:0,
    classes: {
        "ui-spinner": "highlight",
    }
}).val(0)


function setTimer(hours,minutes,seconds){
    $("#timerHours").text(hours)
    $("#timerMinutes").text(minutes)
    $("#timerSeconds").text(seconds)
    return
}

function openModalResetButtons(timeout){
    var modal = $("#modal")

    modal.addClass("is-active")
    $(".modal-background").click(()=>{
        modal.removeClass("is-active")
    })
    $(".modal-close").click(()=>{
        modal.removeClass("is-active")
        
    })
    setTimer(0,0,0)
    Disable(["stop"])
    Disable(["start"])
    $("#configure").removeAttr("disabled")
    $("#reset").removeAttr("disabled")

}

function Disable(idArray){
    for(var i =0; i<idArray.length;i++){
        $(`#${idArray[i]}`).attr("disabled","true")
    }
    return
}


$("#reset").click((event)=>{
    Disable(["start","stop"])
    $("#configure").removeAttr("disabled")
    $(".spinner").val(0)
    return
})


$("#configure").click((event)=>{
    userHoursInput = $("#HoursInput").val()
    userMinutesInput = $("#MinutesInput").val()
    userSecondsInput = $("#SecondsInput").val()
    if (userHoursInput == 0 && userMinutesInput == 0 && userSecondsInput == 0) {
        var badInput = document.createElement("p")
        if(timerFeedbackIntervalID){
            return
        }
        else{
            $("#timerInputFeedback").text("non-zero time required").css("color","red").css("font-size","15px").css("padding-right","4px")
            timerFeedbackIntervalID = setTimeout(()=>{
                $("#timerInputFeedback").text("")
                timerFeedbackIntervalID = null
            },2500)
        }
        
        return
    }
    setTimer(userHoursInput,userMinutesInput,userSecondsInput)
    Disable(["configure"])
    $("#start").removeAttr("disabled")
    console.log(userHoursInput,userMinutesInput,userSecondsInput)

})

$("#start").click((event)=>{
    Disable(["start","reset"])
    

    timeout = moment.duration({
        seconds: userSecondsInput,
        minutes: userMinutesInput,
        hours: userHoursInput
    })
    var timeoutClone = timeout.clone()

        timerID = setInterval(()=>{
        timeout.subtract(1,"s")
        setTimer(timeout._data.hours,timeout._data.minutes,timeout._data.seconds)
        if($("#timerHours").text() ==0 && $("#timerMinutes").text() == 0 &&
        $("#timerSeconds").text() == 0){
            openModalResetButtons(timeoutClone)
            clearInterval(timerID) 
            return
        }
        },1000)

        $("#stop").removeAttr("disabled")
      
})

$("#stop").click(()=>{
    Disable(["stop"])
    $("#configure").removeAttr("disabled")
    $("#reset").removeAttr("disabled")
    clearInterval(timerID)
}
)




$(".timerArea").css("font-size","40px")