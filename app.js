function deleteTask(id) {
  const ulist = document.getElementById("list");

  //const container = document.getElementsByClassName("container")
  if (ulist.childElementCount != 0) {

    const x = document.getElementById(id);
    const y = x.previousElementSibling;
    let tcont = y.parentNode;
    tcont.style.display = "none";
    y.remove();
    x.remove();
  }

  if (ulist.childElementCount == 0) {
    const msg = document.createElement('p')
    console.log(msg)
    msg.innerText = 'Oops!List is Empty';
    document.body.appendChild(msg);
  }

}