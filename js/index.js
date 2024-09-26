$(document).ready(function () {
  if (
    (window.location.hash !== "" && $(window).scrollTop() > 0) ||
    $(window).scrollTop() > 0
  ) {
    $("body").removeClass("modal-open");
    $(".burger").removeClass("active");
  } else {
    $("body").addClass("modal-open");
  }

  $(window).on("wheel", function (event) {
    setTimeout(() => {
      $(".header").addClass("active");
      setTimeout(() => {
        $("body").removeClass("modal-open");
      }, 500);
    }, 500);
  });

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        $(entry.target).addClass("animated");
      } else {
        $(entry.target).removeClass("animated");
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection);

  toggleObserver();

  $(window).on("resize", function () {
    toggleObserver();
  });

  function toggleObserver() {
    if ($(window).width() > 992) {
      $(".step__block").each((index, element) => observer.observe(element));
      $(".results").each((index, element) => observer.observe(element));
    } else {
      $(".step__block").each((index, element) => observer.unobserve(element));
      $(".results").each((index, element) => observer.unobserve(element));
    }
  }

  function checkInput() {
    var wrapper = $(this).parent();
    if ($(this).val().trim() !== "") {
      wrapper.addClass("input__full");
    } else {
      wrapper.removeClass("input__full");
    }
  }
  $(".feedback__form-wrapper input").on("input change", function () {
    checkInput.call(this);
  });
  $(".feedback__form-wrapper textarea").on("input", function () {
    checkInput.call(this);
  });
  $(".payment__form-wrapper input").on("input change", function () {
    checkInput.call(this);
  });
  $(".settings__main-form__wrapper input").on("input change", function () {
    checkInput.call(this);
  });
  $(".settings__password-form__wrapper input").on("input change", function () {
    checkInput.call(this);
  });
  $(".create__domain-group input").on("input change", function () {
    checkInput.call(this);
  });

  $(".show__form").on("click", function () {
    $("#feedback").fadeIn(300).css("display", "flex");
    $("body").addClass("modal-open");
  });

  $(".show__beta-test-form").on("click", function () {
    $("#beta-test").fadeIn(300).css("display", "flex");
    $("body").addClass("modal-open");
  });

  $(".feedback__close").on("click", function () {
    $("#feedback").fadeOut(300);
    if (
      $(".presentation__wrapper").css("display") === "none" ||
      $(".create__settings").length
    ) {
      $("body").removeClass("modal-open");
    }
  });

  $(".beta-test__close").on("click", function () {
    $("#beta-test").fadeOut(300);
    if (
      $(".presentation__wrapper").css("display") === "none" ||
      $(".create__settings").length
    ) {
      $("body").removeClass("modal-open");
    }
  });

  $(".features__block-list__item").on("click", function () {
    var currentIndex = $(this).index();
    var previewImages = $(".features__block-preview__item");
    var currentImage = previewImages.eq(currentIndex);

    if (!currentImage.is(":visible")) {
      previewImages.hide().eq(currentIndex).fadeIn().css("display", "block");
    }
  });

  $(".templates__list-item").first().addClass("active");

  $(".templates__list-item").on("click", function () {
    var currentIndex = $(this).index();
    var previewImages = $(".templates__content-item");
    var currentImage = previewImages.eq(currentIndex);
    $(".templates__list-item").removeClass("active");
    $(this).addClass("active");

    if (!currentImage.is(":visible")) {
      previewImages.hide().eq(currentIndex).fadeIn().css("display", "grid");
    }
  });

  function checkHeight() {
    var headers = $(".faq__accordion-header");
    var maxHeight = 0;
    headers.each(function () {
      var height = $(this).height();
      if (height > maxHeight) {
        maxHeight = height;
      }
    });
    headers.height(maxHeight);
  }
  checkHeight();
  $(window).on("resize", function () {
    if ($(window).width() > 992) {
      checkHeight();
    } else {
      $(".faq__accordion-header").height("auto");
    }
  });

  $(".faq__accordion-header").click(function () {
    var accordionItem = $(this).closest(".faq__accordion-item");
    var accordionContent = accordionItem.find(".faq__accordion-content");
    var arrow = $(this).find(".faq__accordion-arrow");

    // $('.faq__accordion-item').not(accordionItem).find('.faq__accordion-content').slideUp(300);
    // $('.faq__accordion-item').not(accordionItem).find('.faq__accordion-arrow').removeClass('rotate180');

    accordionContent.slideToggle(300);
    arrow.toggleClass("rotate180");
  });

  // let wow = new WOW({
  //   offset: 100,
  // });
  // wow.init();

  $(".burger__open").on("click", function () {
    $(".burger").addClass("active").css("display", "flex");
    $("body").addClass("modal-open");
  });
  $(".burger__close").on("click", function () {
    $(".burger").removeClass("active");
    $("body").removeClass("modal-open");
  });

  $(".tariffs__block-more").click(function () {
    var accordionItem = $(this).closest(".tariffs__block-item");
    var accordionContent = accordionItem.find(".tariffs__block-list");
    var arrow = $(this).find(".tariffs__block-arrow");

    $(".tariffs__block-item")
      .not(accordionItem)
      .find(".tariffs__block-list")
      .slideUp(300);
    $(".tariffs__block-item")
      .not(accordionItem)
      .find(".tariffs__block-arrow")
      .removeClass("rotate180");

    accordionContent.slideToggle(300);
    arrow.toggleClass("rotate180");
  });

  $(".header__links").each(function () {
    var links = $(this).find(".header__links-item a");
    //links.eq(1).removeAttr('href');
    links.on("click", function (event) {
      var index = $(this).parent().index();
      /*$('#beta-test').fadeIn(300).css('display', 'flex');
                $('body').addClass('modal-open');
            } else {*/
      if (index != 1) {
        event.preventDefault();
        $(".presentation__wrapper").hide();
        $("body").removeClass("modal-open");
        $(".burger").removeClass("active");
      }
    });
  });

  var observer1 = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          $(".presentation__wrapper").hide();
          $("body").removeClass("modal-open");
          $(".header").addClass("active");
        }
      });
    },
    {
      rootMargin: "-100px",
    }
  );
  var contentElement = $(".content")[0];
  if (contentElement) {
    observer1.observe(contentElement);
  }

  $.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };

  $("#feedback")
    .find("input,textarea")
    .on("input keypress", function (e) {
      let $form = $(this).closest("form");
      if ($form.length) {
        $form.find(".error").addClass("hidden");
      }
    });

  $(".burger__open").on("click", function () {
    console.log("tetst");
    $(".burger").addClass("active").css("display", "flex");
    $("body").addClass("modal-open");
  });
  $(".burger__close").on("click", function () {
    $(".burger").removeClass("active");
    $("body").removeClass("modal-open");
  });
});
