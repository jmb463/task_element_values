    $(document).ready(function() {
        $("#button_change").click(function() {
          
          var color = $(".cow_color").eq(0).text();
          var cow = $("#input_color").val();
          
          $(".cow_color").html(cow);
          $("#input_color").val(color);
        });
      
    });