  
  document.addEventListener('DOMContentLoaded', function() {
    var gridItems = document.querySelectorAll('.grid-item');
      

    function handleClick(event) {
      //if 2,3 is clicked, I need to trigger toggleLit on 1,3 2,3 3,3 2,2 2,3 2,4
      //row, column
      //row -1, column | row +1, column
      //row, column -1 |row, column +1
      // I need to check through every grid item to see if they fit these patterns
      // console.log(gridItems)
      var win = 0;
      for (var i = gridItems.length - 1; i >= 0; i--) {
        if(gridItems[i].firstChild.dataset.row == event.target.dataset.row && gridItems[i].firstChild.dataset.column == event.target.dataset.column){
          toggleLit(gridItems[i])
        }
        if(gridItems[i].firstChild.dataset.row == event.target.dataset.row -1 && gridItems[i].firstChild.dataset.column == event.target.dataset.column){
          toggleLit(gridItems[i])
        }
        if(gridItems[i].firstChild.dataset.row == parseInt(event.target.dataset.row) +1 && gridItems[i].firstChild.dataset.column == event.target.dataset.column){
          toggleLit(gridItems[i])
        }
        if(gridItems[i].firstChild.dataset.row == event.target.dataset.row && gridItems[i].firstChild.dataset.column == event.target.dataset.column - 1){
          toggleLit(gridItems[i])
        }
        if(gridItems[i].firstChild.dataset.row == event.target.dataset.row && gridItems[i].firstChild.dataset.column == parseInt(event.target.dataset.column) + 1){
          toggleLit(gridItems[i])
        }
        if (gridItems[i].firstChild.classList.contains("lit")) {
          win++
        }
      }
      if (win == 0) {alert("You are so smart!")}
       

    }
    function toggleLit(element){
      // console.log(element.target.classList)
      if (element.firstChild.classList.contains("lit")) {
        element.firstChild.classList.remove("lit");
      } else {
        element.firstChild.classList.add("lit");
      }
    }

    // Loop through each grid-item and attach the click event listener
    gridItems.forEach(function(item) {
      item.addEventListener('click', handleClick);
    });
    gridItems[2].click();
  });
  