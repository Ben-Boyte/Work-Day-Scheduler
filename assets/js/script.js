var date = $("#currentDay");
var currentTime = moment().hour()
date.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

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

function store() {
    localStorage.setItem($(this).attr("id"), $(this).prev().val());
    $(this).prev().transfer({
        to: $($(this)),
    })
}

// $(document).ready(function() {
//     $(".saveBtn").on(".click", function() {
//         var text = $(this).siblings(".description").val();
//         var time = $(this).parent().attr("id");
//         localStorage.setItem(text, time);
//     })
// })

window.onload = scheduler();
$(".saveBtn").on("click", save)