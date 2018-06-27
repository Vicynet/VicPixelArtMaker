// Your code goes here!
$(document).ready(function() //Makes document safe to be manipulated
    {
// When size is submitted by the user, call makeGrid()
        $('#sizePicker').submit(function makeGrid(grid) 
            {
                $('table tr').remove(); //Prevents a new grid from appearing just after the old grid, thereby erasing the previous grid on fresh click of the submission button
                var boxRow = $('#inputHeight').val(); //Gets number of entered rows which translates to the grid height
                var boxColumn = $('#inputWidth').val(); //Gets number of entered rows which translates to the grid width
                for (var i = 1; i <= boxRow; i++) //Loop to create rows according to the specified input value for height
                    {
                        $('table').append("<tr></tr>"); //The rows are created to form part of the grid
                    for (var j = 1; j <= boxColumn; j++) //Loop to create columns according to the specified input value for width
                        {
                            $('tr:last').append("<td></td>"); //Here tr:last makes sure that the columns are added only to the last created table row
                            $('td').attr("class", 'box'); //A class, 'box' is created and applied to all the table data
                        }
                    }
                grid.preventDefault();  //Makes sure the page is not refreshed after clicking on submit button and retains the grid so it does not disappear.
            });
//Function for selecting and applying of color to the box/cell of the grid.
        $('#pixelCanvas').on('click','.box',function()
            {
            var click = $('#colorPicker').val(); //Picking a color
            $(this).css('background-color', click); //Color applied to box/cell
            });
    });
