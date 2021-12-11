$(document).ready(function () {
  console.log("js loading")
   $(document).on(
        'click',
        'button[role="createtodo"]',

        function (e) {
          console.log('Add func working')
            $.ajax({
                    url: "addtask",
                    method: "GET",
                    data: {
                        "name": $.trim($('input#myInput').val()),
                    },
                    success: function (result) {
                        location.reload();
                    }
                });
            });
            
  // var myNodelist = document.getElementsByTagName("LI");
  // var i;
  // for (i = 0; i < myNodelist.length; i++) {
  //   var span = document.createElement("SPAN");
  //   var txt = document.createTextNode("\u00D7");
  //   span.className = "close";
  //   span.appendChild(txt);
  //   myNodelist[i].appendChild(span);
  // };

  // // Click on a close button to hide the current list item
  // var close = document.getElementsByClassName("close");
  // var i;
  // for (i = 0; i < close.length; i++) {
  //   close[i].onclick = function() {
  //     var div = this.parentElement;
  //     div.style.display = "none";
  //   }
  // };

  // // Add a "checked" symbol when clicking on a list item
  // var list = document.querySelector('ul');
  // list.addEventListener('click', function(ev) {
  //   if (ev.target.tagName === 'LI') {
  //     ev.target.classList.toggle('checked');
  //   }
  // }, false);

 
    
  // Create a new list item when clicking on the "Add" button
  // function newElement() {
  //   var li = document.createElement("li");
  //   var inputValue = document.getElementById("myInput").value;
  //   var t = document.createTextNode(inputValue);
  //   li.appendChild(t);
  //   if (inputValue === '') {
  //     alert("You must write something!");
  //   } else {
  //     console.log('Add func working')
  //           $.ajax({
  //                   url: "addtask",
  //                   method: "GET",
  //                   data: {
  //                       "name": $.trim($('input#myInput').val()),
  //                   },
  //                   success: function (result) {
  //                       location.reload();
  //                   }
  //               });
  //           };
  //     document.getElementById("myUL").appendChild(li);
  //   }
  //   document.getElementById("myInput").value = "";

  //   var span = document.createElement("SPAN");
  //   var txt = document.createTextNode("\u00D7");
  //   span.className = "close";
  //   span.appendChild(txt);
  //   li.appendChild(span);

  //   for (i = 0; i < close.length; i++) {
  //     close[i].onclick = function() {
  //       var div = this.parentElement;
  //       div.style.display = "none";
  //     };
  //   };
  // });
  // document.getElementById("showImage").onclick = function() {
  //     document.getElementById("theImage").style.visibility = "visible";
  //     function showCatImage() {
  //     document.getElementById("theImage2").style.visibility = "visible";
  // function myFunction1() {
  //   var element = document.body;
  //   element.classList.toggle("dark-mode");
  // };
});