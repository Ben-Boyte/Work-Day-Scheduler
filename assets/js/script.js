var date = $("#currentDay");
var currentTime = moment().hour()
date.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
container.append(date);

function scheduler() {
    for (i = 0; i < time.length; i++) {
    let timeInteger = parseInt(time[i])

        if (timeInteger < currentTime) {
            var moment = "past"
        }
       else if (timeInteger > currentTime) {
            var moment = "future"
        }
       else if (timeInteger == currentTime) {
            var moment = "present"
        }
    }
    
    
}

window.onload = scheduler();