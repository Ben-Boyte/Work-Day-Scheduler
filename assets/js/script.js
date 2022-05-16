var date = $("#currentDay");
var currentTime = moment().hour()
date.text(moment().format('MMMM Do YYYY, h:mm:ss a'));


function store() {
    localStorage.setItem($(this).attr("id"), $(this).prev().val());
    $(this).prev().transfer({
        to: $( $(this) ),
        duration: 5000
    })
}

$(".saveBtn").on("click", store)