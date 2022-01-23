$(".owl-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  loop: true,
  margin: 40,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// -----

$(window).on("load", function () {
  $(window)
    .scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".section6Home").each(function () {
        let objectBottom = $(this).offset().top + $(this).outerHeight();
        if (objectBottom < windowBottom) {
          // Objeto en la vista

          $(".counter").each(function () {
            var $this = $(this),
              countTo = $this.attr("data-count");

            $({ countNum: $this.text() }).animate(
              {
                countNum: countTo,
              },

              {
                duration: 1000,
                easing: "linear",
                step: function () {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                  $this.text(this.countNum);
                },
              }
            );
          });

          // Objeto en la vista
        } else {
          // Objeto fuera de la vista
        }
      });
    })
    .scroll();
});

const $form = document.querySelector("#form");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    this.reset();
    alertSucc("Gracias por escribirnos! Te contactaremos a la brevedad.");
  } else {
    alertError("Algo salio mal, intentalo nuevamente.");
  }
}
