/* ==========================================================================
   TempEase — Temperature Converter · script.js
   Task 3 · Oasis Infobyte Web Dev & Designing Internship (Level 1)
   Vanilla JavaScript — no libraries or frameworks
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
   * Constants and formulas
   * ------------------------------------------------------------------ */
  var ABSOLUTE_ZERO = {
    celsius: -273.15,
    fahrenheit: -459.67,
    kelvin: 0
  };

  var SYMBOLS = {
    celsius: "°C",
    fahrenheit: "°F",
    kelvin: "K"
  };

  /* Convert any unit to Celsius (the canonical internal unit). */
  function toCelsius(value, unit) {
    if (unit === "celsius") return value;
    if (unit === "fahrenheit") return (value - 32) * 5 / 9;
    if (unit === "kelvin") return value - 273.15;
    return NaN;
  }

  /* Convert Celsius to any unit. */
  function fromCelsius(c, unit) {
    if (unit === "celsius") return c;
    if (unit === "fahrenheit") return c * 9 / 5 + 32;
    if (unit === "kelvin") return c + 273.15;
    return NaN;
  }

  function roundTo(value, places) {
    var factor = Math.pow(10, places);
    return Math.round(value * factor) / factor;
  }

  /* ------------------------------------------------------------------
   * DOM references
   * ------------------------------------------------------------------ */
  var form = document.getElementById("converterForm");
  var input = document.getElementById("tempInput");
  var clearBtn = document.getElementById("clearBtn");
  var resetBtn = document.getElementById("resetBtn");
  var errorBox = document.getElementById("errorBox");
  var results = document.getElementById("results");
  var summary = document.getElementById("summary");
  var note = document.getElementById("note");

  var resultCards = {
    celsius: document.getElementById("resCelsius"),
    fahrenheit: document.getElementById("resFahrenheit"),
    kelvin: document.getElementById("resKelvin")
  };

  /* ------------------------------------------------------------------
   * Validation
   * ------------------------------------------------------------------ */
  function showError(message) {
    errorBox.textContent = "⚠ " + message;
    errorBox.hidden = false;
    input.classList.add("invalid");
    input.setAttribute("aria-invalid", "true");
    results.hidden = true;
  }

  function clearError() {
    errorBox.hidden = true;
    errorBox.textContent = "";
    input.classList.remove("invalid");
    input.removeAttribute("aria-invalid");
  }

  /* Accepts: "25", "-40.5", "+3", ".5", " 12 " — rejects "", "abc", "12abc", "1,2" */
  function parseTemperature(raw) {
    if (raw === null || raw === undefined) return null;
    var text = String(raw).trim();
    if (text === "") return null;
    if (!/^[+-]?(\d+(\.\d+)?|\.\d+)$/.test(text)) return NaN;
    var value = Number(text);
    return Number.isFinite(value) ? value : NaN;
  }

  /* ------------------------------------------------------------------
   * Rendering results
   * ------------------------------------------------------------------ */
  function renderResult(unit, value) {
    var card = resultCards[unit];
    var valueEl = card.querySelector("[data-value]");
    valueEl.textContent = value.toFixed(2).replace(/\.?0+$/, "") || "0";
  }

  function renderAll(celsiusValue, fromUnit, original) {
    Object.keys(resultCards).forEach(function (unit) {
      var converted = fromCelsius(celsiusValue, unit);
      renderResult(unit, converted);
    });

    summary.innerHTML =
      "<strong>" + original.toFixed(2).replace(/\.?0+$/, "") + SYMBOLS[fromUnit] +
      "</strong> equals:";

    notes(celsiusValue);
    results.hidden = false;
  }

  /* Small contextual note under the results. */
  function notes(celsiusValue) {
    var notesList = [];
    if (Math.abs(celsiusValue) < 1e-9) notesList.push("This is the freezing point of water.");
    if (Math.abs(celsiusValue - 37) < 0.5) notesList.push("This is roughly average human body temperature.");
    if (Math.abs(celsiusValue - 100) < 1e-9) notesList.push("This is the boiling point of water at sea level.");
    if (celsiusValue < -200) notesList.push("Brrr! That is colder than dry ice.");
    note.textContent = notesList.join(" ");
    if (!notesList.length) note.textContent = "";
  }

  /* ------------------------------------------------------------------
   * Main convert routine
   * ------------------------------------------------------------------ */
  function convert() {
    clearError();

    var parsed = parseTemperature(input.value);
    if (parsed === null) {
      showError("Please enter a temperature value — it cannot be empty.");
      input.focus();
      return;
    }
    if (Number.isNaN(parsed)) {
      showError("Invalid input. Please enter a numeric value, e.g. 25 or -40.5 (no letters or symbols).");
      input.focus();
      return;
    }

    var fromUnit = document.querySelector('input[name="fromUnit"]:checked');
    if (!fromUnit) {
      showError("Please choose a unit to convert from.");
      return;
    }
    fromUnit = fromUnit.value;

    /* Absolute-zero validation (small float tolerance). */
    if (parsed < ABSOLUTE_ZERO[fromUnit] - 1e-9) {
      showError(
        "Physically impossible: " + input.value.trim() + SYMBOLS[fromUnit] +
        " is below absolute zero (" + ABSOLUTE_ZERO[fromUnit] + SYMBOLS[fromUnit] +
        "). Nothing can be colder than that!"
      );
      input.focus();
      return;
    }

    var c = toCelsius(parsed, fromUnit);
    if (Number.isNaN(c)) {
      showError("Conversion failed. Please check the value and unit, then try again.");
      return;
    }

    renderAll(c, fromUnit, parsed);
  }

  /* ------------------------------------------------------------------
   * Reset
   * ------------------------------------------------------------------ */
  function resetAll() {
    input.value = "";
    clearError();
    results.hidden = true;
    clearBtn.hidden = true;
    var celsiusRadio = document.querySelector('input[name="fromUnit"][value="celsius"]');
    if (celsiusRadio) celsiusRadio.checked = true;
    input.focus();
  }

  /* ------------------------------------------------------------------
   * Events
   * ------------------------------------------------------------------ */
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    convert();
  });

  resetBtn.addEventListener("click", resetAll);

  input.addEventListener("input", function () {
    clearBtn.hidden = input.value === "";
    /* Clear a stale error as soon as the user edits. */
    if (!errorBox.hidden) clearError();
  });

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      convert();
    }
  });

  clearBtn.addEventListener("click", function () {
    input.value = "";
    clearBtn.hidden = true;
    clearError();
    results.hidden = true;
    input.focus();
  });

  /* Re-run the last conversion live when the unit changes. */
  var unitRadios = document.querySelectorAll('input[name="fromUnit"]');
  unitRadios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      if (input.value.trim() !== "" && results.hidden === false) {
        convert();
      }
    });
  });

  /* Focus the input on load for a fast first conversion. */
  window.addEventListener("load", function () {
    input.focus();
  });
})();
