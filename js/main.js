$(document).ready(function () {
  var viewportWidth = $(window).width();
  if (viewportWidth > 990) {
    $("#sidebar").addClass("active");
  }

  $(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 990) {
      $("#sidebar").removeClass("active").addClass("active");
    } else {
      $("#sidebar").removeClass("active");
    }
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $('#dismiss, .overlay').on('click', function () {
    // hide sidebar
    $('#sidebar').removeClass('active');
    // hide overlay
    $('.overlay').removeClass('active');
  });

  $('#sidebarCollapse').on('click', function () {
    // open sidebar
    $('#sidebar').addClass('active');
    // fade in the overlay
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

  $('#recovery-alert').hide();

  $('#recovery-btn').click(function () {
    $('#recovery-alert').show();
  })


  $('.carousel').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = 8;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $('.carousel-item').eq(i).appendTo('.carousel-inner');
        }
        else {
          $('.carousel-item').eq(0).appendTo('.carousel-inner');
        }
      }
    }
  });


  /* chart.js chart examples */

  // chart colors
  var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];

  /* large line chart */
  var chLine = document.getElementById("chLine");
  var chartData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      data: [35, 25, 56, 5, 17, 89, 43],
      backgroundColor: 'gainsboro',
      borderColor: colors[0],
      borderWidth: 4,
      pointBackgroundColor: colors[0]
    }]
  };

  if (chLine) {
    new Chart(chLine, {
      type: 'line',
      data: chartData,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    });
  }

});

