/* =========================================================
   AINUL.DEV — PORTFOLIO JAVASCRIPT
   ========================================================= */



/* =========================================================
   CONTACT FORM
   ========================================================= */

async function handleFormSubmit(event) {

  event.preventDefault();


  const form = event.target;


  const submitButton =
    form.querySelector(
      'button[type="submit"]'
    );


  const formAction =
    "https://formsubmit.co/ajax/ainulhaqsde@gmail.com";


  const formData =
    new FormData(form);


  const originalButtonContent =
    submitButton.innerHTML;


  try {


    /* Loading State */

    submitButton.disabled =
      true;


    submitButton.innerHTML =
      `
        <i class="fas fa-spinner fa-spin"></i>
        Sending...
      `;


    const response =
      await fetch(
        formAction,
        {

          method:
            "POST",

          body:
            formData,

          headers: {

            Accept:
              "application/json"

          }

        }
      );


    if (!response.ok) {

      throw new Error(
        "Unable to send message."
      );

    }


    showNotification(

      "Message sent successfully! I'll get back to you soon.",

      "success"

    );


    form.reset();


  }

  catch (error) {


    console.error(

      "Contact Form Error:",

      error

    );


    showNotification(

      "Unable to send your message. Please contact me directly by email.",

      "error"

    );


  }

  finally {


    submitButton.disabled =
      false;


    submitButton.innerHTML =
      originalButtonContent;


  }

}



/* =========================================================
   NOTIFICATION SYSTEM
   ========================================================= */

function showNotification(
  message,
  type = "success"
) {


  const oldNotification =
    document.querySelector(
      ".notification"
    );


  if (oldNotification) {

    oldNotification.remove();

  }


  const notification =
    document.createElement(
      "div"
    );


  notification.className =
    `notification ${type}`;


  notification.innerHTML =
    `

      <div class="notification-content">

        <i class="${
          type === "success"
            ? "fas fa-circle-check"
            : "fas fa-circle-exclamation"
        }"></i>

        <span>
          ${message}
        </span>

        <button
          class="notification-close"
          aria-label="Close notification"
        >

          <i class="fas fa-times"></i>

        </button>

      </div>

    `;


  document.body.appendChild(
    notification
  );


  requestAnimationFrame(
    () => {

      notification.classList.add(
        "show"
      );

    }
  );


  const closeButton =
    notification.querySelector(
      ".notification-close"
    );


  closeButton.addEventListener(
    "click",
    () => {

      removeNotification(
        notification
      );

    }
  );


  setTimeout(
    () => {

      removeNotification(
        notification
      );

    },

    5000

  );

}



/* =========================================================
   REMOVE NOTIFICATION
   ========================================================= */

function removeNotification(
  notification
) {


  if (!notification) {

    return;

  }


  notification.classList.remove(
    "show"
  );


  setTimeout(
    () => {

      notification.remove();

    },

    300

  );

}



/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle =
  document.getElementById(
    "menu-toggle"
  );


const navLinks =
  document.querySelectorAll(
    ".nav-links a"
  );


navLinks.forEach(
  (link) => {


    link.addEventListener(
      "click",
      () => {


        if (menuToggle) {

          menuToggle.checked =
            false;

        }


      }
    );


  }
);



/* =========================================================
   CLOSE MOBILE MENU OUTSIDE
   ========================================================= */

document.addEventListener(
  "click",
  (event) => {


    const navbar =
      document.querySelector(
        ".navbar"
      );


    if (
      menuToggle &&
      navbar &&
      !navbar.contains(event.target)
    ) {


      menuToggle.checked =
        false;


    }


  }
);



/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
  document.querySelectorAll(
    "section[id]"
  );


function updateActiveNavigation() {


  const currentPosition =
    window.scrollY + 170;


  sections.forEach(
    (section) => {


      const sectionTop =
        section.offsetTop;


      const sectionHeight =
        section.offsetHeight;


      const sectionId =
        section.getAttribute(
          "id"
        );


      const link =
        document.querySelector(
          `.nav-links a[href="#${sectionId}"]`
        );


      if (!link) {

        return;

      }


      if (

        currentPosition >=
          sectionTop

        &&

        currentPosition <
          sectionTop +
          sectionHeight

      ) {


        navLinks.forEach(
          (item) => {

            item.classList.remove(
              "active"
            );

          }
        );


        link.classList.add(
          "active"
        );


      }


    }
  );


}


window.addEventListener(
  "scroll",
  updateActiveNavigation
);


window.addEventListener(
  "load",
  updateActiveNavigation
);



/* =========================================================
   NAVBAR SCROLL STATE
   ========================================================= */

const navbar =
  document.querySelector(
    ".navbar"
  );


function navbarScrollEffect() {


  if (!navbar) {

    return;

  }


  if (
    window.scrollY > 20
  ) {


    navbar.classList.add(
      "scrolled"
    );


  }

  else {


    navbar.classList.remove(
      "scrolled"
    );


  }


}


window.addEventListener(
  "scroll",
  navbarScrollEffect
);


window.addEventListener(
  "load",
  navbarScrollEffect
);



/* =========================================================
   SCROLL TO TOP
   ========================================================= */

const scrollTopButton =
  document.getElementById(
    "scrollTopBtn"
  );


if (scrollTopButton) {


  window.addEventListener(
    "scroll",
    () => {


      if (
        window.scrollY > 450
      ) {


        scrollTopButton
          .classList
          .add(
            "show"
          );


      }

      else {


        scrollTopButton
          .classList
          .remove(
            "show"
          );


      }


    }
  );


  scrollTopButton.addEventListener(
    "click",
    () => {


      window.scrollTo({

        top: 0,

        behavior:
          "smooth"

      });


    }
  );


}



/* =========================================================
   INFINITE SKILLS SLIDER
   ========================================================= */

const skillsTrack =
  document.querySelector(
    ".skills-track"
  );


if (skillsTrack) {


  const skills =
    Array.from(
      skillsTrack.children
    );


  skills.forEach(
    (skill) => {


      const clone =
        skill.cloneNode(
          true
        );


      clone.setAttribute(
        "aria-hidden",
        "true"
      );


      skillsTrack.appendChild(
        clone
      );


    }
  );


}



/* =========================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================= */

const revealElements =
  document.querySelectorAll(
    `
      .section-heading,
      .about-img,
      .about-content,
      .skill-category,
      .project-card,
      .contact-info,
      .contact-form
    `
  );


revealElements.forEach(
  (element) => {


    element.classList.add(
      "reveal"
    );


  }
);



const revealObserver =
  new IntersectionObserver(

    (
      entries,
      observer
    ) => {


      entries.forEach(
        (entry) => {


          if (
            entry.isIntersecting
          ) {


            entry.target.classList.add(
              "visible"
            );


            observer.unobserve(
              entry.target
            );


          }


        }
      );


    },

    {

      threshold:
        0.12,

      rootMargin:
        "0px 0px -50px 0px"

    }

  );



revealElements.forEach(
  (element) => {


    revealObserver.observe(
      element
    );


  }
);



/* =========================================================
   PROJECT STAGGER ANIMATION
   ========================================================= */

const projectCards =
  document.querySelectorAll(
    ".project-card"
  );


projectCards.forEach(
  (
    card,
    index
  ) => {


    card.style.transitionDelay =
      `${index * 70}ms`;


  }
);



/* =========================================================
   SKILL CATEGORY STAGGER
   ========================================================= */

const skillCategories =
  document.querySelectorAll(
    ".skill-category"
  );


skillCategories.forEach(
  (
    category,
    index
  ) => {


    category.style.transitionDelay =
      `${index * 60}ms`;


  }
);



/* =========================================================
   SMOOTH ANCHOR SCROLL
   ========================================================= */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach(
    (anchor) => {


      anchor.addEventListener(
        "click",
        function (event) {


          const href =
            this.getAttribute(
              "href"
            );


          if (
            !href ||
            href === "#"
          ) {

            return;

          }


          const target =
            document.querySelector(
              href
            );


          if (!target) {

            return;

          }


          event.preventDefault();


          const navbarHeight =
            navbar
              ? navbar.offsetHeight
              : 0;


          const targetPosition =

            target
              .getBoundingClientRect()
              .top

            +

            window.scrollY

            -

            navbarHeight;


          window.scrollTo({

            top:
              targetPosition,

            behavior:
              "smooth"

          });


        }
      );


    }
  );



/* =========================================================
   HERO INITIAL ANIMATION
   ========================================================= */

window.addEventListener(
  "DOMContentLoaded",
  () => {


    const heroLeft =
      document.querySelector(
        ".hero-left"
      );


    const heroRight =
      document.querySelector(
        ".hero-right"
      );


    if (heroLeft) {


      setTimeout(
        () => {


          heroLeft.classList.add(
            "hero-loaded"
          );


        },

        100

      );


    }


    if (heroRight) {


      setTimeout(
        () => {


          heroRight.classList.add(
            "hero-loaded"
          );


        },

        250

      );


    }


  }
);



/* =========================================================
   AUTOMATIC COPYRIGHT YEAR
   ========================================================= */

const copyright =
  document.querySelector(
    ".copyright"
  );


if (copyright) {


  const year =
    new Date()
      .getFullYear();


  copyright.innerHTML =
    `© ${year} Ainul Haq. Designed & Developed by Ainul Haq.`;


}



/* =========================================================
   EXTERNAL LINK SECURITY
   ========================================================= */

document
  .querySelectorAll(
    'a[target="_blank"]'
  )
  .forEach(
    (link) => {


      link.setAttribute(
        "rel",
        "noopener noreferrer"
      );


    }
  );



/* =========================================================
   IMAGE ERROR HANDLING
   ========================================================= */

document
  .querySelectorAll(
    "img"
  )
  .forEach(
    (image) => {


      image.addEventListener(
        "error",
        function () {


          console.warn(

            "Image not found:",

            this.src

          );


        }
      );


    }
  );