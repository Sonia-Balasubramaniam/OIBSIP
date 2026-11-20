# 🌡️ Task 3 — TempEase | Temperature Converter

An interactive, centred temperature converter supporting **Celsius,
Fahrenheit and Kelvin**, built with **HTML5, CSS3 and Vanilla JavaScript**,
as part of the **Oasis Infobyte Web Development & Designing Internship
(Level 1)**.

## 📌 Project Overview

**TempEase** lets the user enter a temperature, choose the source unit and
convert it with one click. All three converted values are displayed with
proper unit labels. The app performs strict numeric validation and enforces
the laws of physics: no temperature may go below absolute zero.

## 🎯 Objective

- Build a clean, intuitive unit-conversion utility.
- Demonstrate form validation, state handling and DOM updates with vanilla JS.
- Deliver an attractive, centred, fully responsive interface.

## ✨ Features

- **Numeric validation** — accepts `25`, `-40.5`, `+3`, `.5`; rejects empty
  input, letters and mixed garbage (`12abc`) with clear error messages.
- **Unit selection** — Celsius, Fahrenheit and Kelvin via accessible radio
  chips.
- **Convert button** (plus Enter-to-convert and live re-convert when the unit
  changes).
- **All three results** shown with unit labels (°C, °F, K) in animated cards.
- **Absolute-zero enforcement** — values below −273.15 °C / −459.67 °F / 0 K
  produce a friendly physics error instead of a negative Kelvin.
- **Contextual notes** — e.g. “freezing point of water” at 0 °C, “body
  temperature” near 37 °C.
- **Reset / clear** buttons and a quick-reference table of key temperatures.
- **Responsive** — stacks gracefully on small screens; no horizontal scroll.

## 🧪 Conversion Formulas

| From → To | Formula |
|---|---|
| °C → °F | `F = C × 9/5 + 32` |
| °C → K | `K = C + 273.15` |
| °F → °C | `C = (F − 32) × 5/9` |
| °F → K | `K = (F − 32) × 5/9 + 273.15` |
| K → °C | `C = K − 273.15` |
| K → °F | `F = (K − 273.15) × 9/5 + 32` |

**Absolute zero:** −273.15 °C = −459.67 °F = 0 K

## 🛠️ Technologies

| Technology | Purpose |
|---|---|
| HTML5 | Semantic form and result markup |
| CSS3 | Centred card layout, gradient theme, responsive grid |
| JavaScript (Vanilla) | Validation, conversion logic, DOM updates |
| Google Fonts | Outfit + JetBrains Mono typography |

## 📁 Folder Structure

```
WebDev-L1-TemperatureConverter/
├── index.html   # Converter markup
├── style.css   # Styling and responsive rules
├── script.js    # Validation and conversion logic
└── README.md    # This file
```

## ▶️ How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/OIBSIP.git
   ```
2. Open the folder:
   ```bash
   cd OIBSIP/WebDev-L1-TemperatureConverter
   ```
3. Double-click **`index.html`** to open the converter in your browser.

No installation or server needed.

## 🧪 Test Cases to Try

| Input | Unit | Expected |
|---|---|---|
| `0` | Celsius | 0 °C · 32 °F · 273.15 K |
| `100` | Celsius | 100 °C · 212 °F · 373.15 K |
| `32` | Fahrenheit | 0 °C · 32 °F · 273.15 K |
| `212` | Fahrenheit | 100 °C · 212 °F · 373.15 K |
| `0` | Kelvin | −273.15 °C · −459.67 °F · 0 K |
| `-40` | Celsius | −40 °C · −40 °F · 233.15 K (crossover point) |
| `abc` | any | Error: invalid input |
| *(empty)* | any | Error: enter a value |
| `-500` | Celsius | Error: below absolute zero |
| `-460` | Fahrenheit | Error: below absolute zero |

## ✅ Verification Checklist

- [x] Input field with numeric validation
- [x] Celsius / Fahrenheit / Kelvin unit selection
- [x] Convert button (also Enter key)
- [x] All converted values displayed with unit labels
- [x] Invalid inputs handled with clear errors
- [x] Absolute-zero violations blocked with informative message
- [x] Attractive, centred, responsive interface

---

Built for the **Oasis Infobyte Web Development & Designing Internship** · Task 3 of 3.
