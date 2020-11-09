// New JS
    
$(function() {
    // Tabers click
      $(".dream-srvc-blk").on("click",function () {
        var sam = $(this).attr("id");
        $(".dream-srvc-blk").removeClass("active");
        $("div#" + sam).addClass("active");
        $(".srvcs-cntnr").hide();
        $(".srvcs-cntnr." + sam).css("display","flex");
      });
    
      // Experienced selection
      $(".dream-team-level, .adding-devs-counter, #currency-select, .delete, .step2 a, .add, .remove").on('click', function () {
        $('input[type="radio"]').parent().removeClass('active');
        $('input[type="radio"]:checked').parent().addClass('active');
        expArray = [];
		i = 0; 
        
            
            $("body").on("click", ".add.inside, .remove.inside", function () {
                sum = 0;
                thisDataID = $(this).siblings('input').data('id');
                thisInputVal = $(this).siblings('input').val();
                $(".new.qty").each(function(){
                    sum += +$(this).val();
                });
                $.each(expArray, function() {
                    if (this.id == thisDataID) {
                        this.num = thisInputVal;
                    }
                });
                $(".tot-members span").html(sum);
                console.log("Inside Val: " + $(this).siblings('input').val())
              });
              
              
        var cur = $('#currency-select').data('val');
        console.log(cur);
        $(".dream-team-level").each(function () {
          if ($(this).is(":checked")) {
            var thisCheck = $(this);
				i++;
    
            // Function to REMOVE from array
            function removeItem() {
              expArray = expArray.filter(function (el) {
                return el.id !== remId;
              });
            }
    
            // PUSH to array
            expArray.push({
              'exp': $(this).data('experience'),
              'from': $(this).data('from'),
              'price': $(this).data('price'),
              'id': $(this).attr('id'),
              'num': $(this).parent().parent().children('.adding-devs-counter').children('input').val(),
              'cur': $('#currency-select').find(':selected').data('val'),
              'cursymbol': $('#currency-select').find(':selected').data('symbol'),
    		  'slno': i
            });
    
    
            myFn();
    
            // Main Function 
            function myFn() {
              console.clear();
              $('table').html('');
              $('table').append(
                '<tr><th>Sl.No</th><th>No. of Members</th><th>Expert From</th><th>Expert type</th><th></th></tr>'
              );
              const totMembers = expArray.reduce((tot,sum) => Number(tot) + Number(sum.num), 0);
              const curSymbol = expArray[0].cursymbol;
              var totPrice = expArray.reduce((tot,sum) => Number(tot) + ((Number(sum.price) * Number(sum.num)) * Number(sum.cur)), 0);
              totPrice = Math.ceil(totPrice);
              $('.tot-price span').html(totPrice + ' ' + curSymbol);
              console.log("Tot Price: " + totPrice);
              $('.tot-members span').html(totMembers);
              console.log(totPrice);
              expArray.forEach(function (arr) {
                console.log(arr.cur);
                $('table').append(
                  '<tr><td>' + arr.slno + '</td><td><div class="dream-team-level"><div class="adding-devs-counter"><p class="add inside">+</p><input type="text" data-id="' + arr.id + '" class="new qty" value="' + arr.num + '"><p class="remove inside">-</p></div></td><td>' + arr.from + '</td><td>' + arr.exp + '</td><td id="' + arr.id + '" class="delete">Remove</td></tr>'
                );
              })
            }
              
              
        
    
            // Remove click
            $('body').on('click','.delete',function () {
              remId = $(this).attr('id');
              myFn();
              removeItem();
              $('#' + remId).parent().removeClass('active');
              $('#' + remId).prop('checked',false)
              console.log(expArray)
            })
          }
        });
        console.log(expArray);
    
      });
      
      
        swCount = 0;
    $('#talk-expert-1 a').click(function() {
        if (expArray.length == 0) {
            swal("Please select any one of the expert type!", "Qualified / Experienced / Master");
        } else {
            $('.dream-team-cntnr').hide();
            $('#talk-expert-1').hide();
            $('.hire-dev-main').show();
            $('.step1').addClass('active');
            $('.step2').addClass('active');
            if (swCount == 0) {
                swal("Click on Step 1 to edit your team!");
            }
        swCount++;
        }
    })
    
    
      // Increment Numbers
      $("body").on("click", ".add", function () {
        var $qty = $(this).closest(".adding-devs-counter").find(".qty");
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
          $qty.val(currentVal + 1);
        }
      });
    
      // Decrement Numbers
      $("body").on("click", ".remove", function () {
        var $qty = $(this).closest(".adding-devs-counter").find(".qty");
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 1) {
          $qty.val(currentVal - 1);
        }
      });
      
      $('.step1').click(function() {
        $('.dream-team-cntnr').show();
        $('.hire-dev-main').hide();
        $('.step1').addClass('active');
        $('#talk-expert-1').show();
      })
        
        // $('div#talk-expert-1 a').on('click', function() {
        // $('.dream-team-cntnr').hide();
        // $('.hire-dev-main').show();
        // $(this).hide();
        // })
  })
