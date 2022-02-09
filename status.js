function open_close(myid) {
  var el = document.getElementById(myid);
  if (el.style.display == "none" || el.style.display == '' ) {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}