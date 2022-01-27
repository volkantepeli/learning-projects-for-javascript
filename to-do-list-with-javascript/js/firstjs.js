let taskFormDOM = document.querySelector("#taskForm")
taskFormDOM.addEventListener("submit", formHandler)
const alertDOM = document.querySelector("#alert")
const alertFunction =  (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()
    const TEXT_INPUT = document.querySelector("#textInput")
    if(TEXT_INPUT.value) {
        addItem(TEXT_INPUT.value)
        TEXT_INPUT.value = ""
        alertDOM.innerHTML = alertFunction (
            "Successful",
            "Your transaction has been completed",
            "success"
        )
    }else{
        alertDOM.innerHTML = alertFunction (
            "ERROR :",
            "You entered incorrect information!",
            "danger"
            )

    }
    
}
let taskListDOM = document.querySelector("#taskList")

const addItem = (textInput) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${textInput}`
    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
    taskListDOM.append(liDOM)
}