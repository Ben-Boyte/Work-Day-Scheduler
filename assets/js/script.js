var container = $(".container");
var time = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
var date = $("#currentDay");
var currentTime = moment().hour()
date.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

function scheduler() {
    for (i = 0; i < time.length; i++) {
    let timeInteger = parseInt(time[i])

        if (timeInteger < currentTime) {
            var placeInTime = "past"
        }
       else if (timeInteger > currentTime) {
            var placeInTime = "future"
        }
       else if (timeInteger == currentTime) {
            var placeInTime = "present"
        }
        
        
    var row = $("<div>");
            row.attr("class", "row");
            container.append(row);

    var label = $("<label>");
            label.attr("class", "col-3 col-sm-1 time-block hour");
            label.text(time[i]);
            row.append(label);
        
    var textArea = $("<textarea>");
            textArea.attr("class", "col-7 col-sm-10 description " + placeInTime);
            textArea.text(localStorage.getItem("Time " + i));
            row.append(textArea);

    var button = $("<button>");
            button.attr("class", "col-3 col-sm-1 saveBtn fas fa-save");
            button.attr("id", "Time " + i);
            row.append(button);
    }
}

function store() {
    localStorage.setItem($(this).attr("id"), $(this).prev().val());
}

window.onload = scheduler();
$(".saveBtn").on("click", store);