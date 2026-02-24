// Membership toggle (Foundation & Economy)
function setupToggle(cardId){
  const card = document.getElementById(cardId);
  if (!card) return;

  const head = card.querySelector(".head");
  const chev = head.querySelector(".chev");

  head.addEventListener("click", () => {
    const isOpen = card.classList.toggle("open");
    head.setAttribute("aria-expanded", String(isOpen));
    chev.textContent = isOpen ? "▴" : "▾";
  });
}

setupToggle("foundation");
setupToggle("economy");

// Form validation (Join modal)
const joinForm = document.getElementById("joinForm");
if (joinForm){
  joinForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email");
    const plan  = document.getElementById("plan");
    const goal  = document.getElementById("goal");
    const msg   = document.getElementById("joinMsg");

    // reset
    [email, plan, goal].forEach(el => el.classList.remove("is-invalid", "is-valid"));
    msg.className = "small mt-2";
    msg.textContent = "";

    let ok = true;

    // email
    if (!email.value || !email.value.includes("@") || !email.value.includes(".")){
      email.classList.add("is-invalid");
      ok = false;
    } else email.classList.add("is-valid");

    // plan
    if (!plan.value){
      plan.classList.add("is-invalid");
      ok = false;
    } else plan.classList.add("is-valid");

    // goal
    const gv = Number(goal.value);
    if (!gv || gv < 1 || gv > 20){
      goal.classList.add("is-invalid");
      ok = false;
    } else goal.classList.add("is-valid");

    if (ok){
      msg.classList.add("text-success");
      msg.textContent = "Success! You’re enrolled. Check your email for next steps.";
      joinForm.reset();
      [email, plan, goal].forEach(el => el.classList.remove("is-valid"));
    } else {
      msg.classList.add("text-danger");
      msg.textContent = "Please fix the highlighted fields.";
    }
  });
}

// Theme toggle
const themeBtn = document.getElementById("themeBtn");
let darkMode = false;

if (themeBtn){
  themeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    darkMode = !darkMode;

    document.body.style.background = darkMode ? "#0f1115" : "var(--bg)";
    document.body.style.color = darkMode ? "#fff" : "#111";
  });
}