var time = ["9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"]
date.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
var container = $(".container");
var date = $("#currentDay");
var currentTime = moment().hour()
container.append(date);

function scheduler() {
    for (i = 0; i < time.length; i++)

}

window.onload = scheduler();