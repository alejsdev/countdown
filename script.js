const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const finalDate = new Date("May 24, 2024 10:00:00 GMT-0500").getTime();

const countdownInterval = setInterval(() => {
  const currentDate = new Date().getTime();
  const remainingTime = finalDate - currentDate;

  const totalSeconds = Math.floor(remainingTime / 1000);
  const daysValue = Math.floor(totalSeconds / 86400);
  const hoursValue = Math.floor((totalSeconds % 86400) / 3600);
  const minutesValue = Math.floor((totalSeconds % 3600) / 60);
  const secondsValue = totalSeconds % 60;

  days.innerHTML = daysValue;
  hours.innerHTML = hoursValue;
  minutes.innerHTML = minutesValue;
  seconds.innerHTML = secondsValue;

  if (remainingTime < 0) {
    days.innerHTML = 0;
    hours.innerHTML = 0;
    minutes.innerHTML = 0;
    seconds.innerHTML = 0;
    clearInterval(countdownInterval);

    const defaults = {
      spread: 300,
      ticks: 200,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["heart"],
      colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
    };

    function shootConfetti() {
      confetti({
        ...defaults,
        particleCount: 50,
        scalar: 2,
      });

      confetti({
        ...defaults,
        particleCount: 25,
        scalar: 3,
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 4,
      });

      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.5,
        shapes: ["circle"],
      });
    }

    function startConfetti() {
      shootConfetti();
      setTimeout(startConfetti, 3000); 
    }

    startConfetti();
  }
});
