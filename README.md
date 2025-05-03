# Etch-a-Sketch

Interactive Grid

## Table of Contents

-   [Project Description](#project-description)
-   [Features](#features)
-   [How To Use](#how-to-use)
-   [Рublished Website](#published-website)

## Project Description

This is a JavaScript-based interactive Etch-a-Sketch application that lets users draw by hovering over squares on a customizable grid.
The project simulates drawing behavior with dynamic colors and a progressive opacity animation, enhancing user interaction and visual appeal.

## Features

**✅ Interactive Grid Drawing**

-   A grid of square cells is dynamically generated using JavaScript.
-   Users can specify the grid size (from 1 to 100) via a prompt.
-   On first mouse hover, each square receives a random RGB color.
-   With each additional hover:
    The square's opacity changes by 10%, creating a fading or glowing effect.
    The direction of opacity change reverses when fully transparent or fully opaque — creating a "wave" effect.

**🎨 Random Color Generator**

-   Each square receives a unique color generated with Math.random() upon first interaction.
-   Colors persist between hovers and only opacity is animated afterward.

**🔁 Progressive Opacity Cycle**

-   Opacity starts at 1.0 (fully visible).
-   Repeated mouse entries progressively reduce opacity by 0.1 per hover.
-   When opacity reaches 0.0, it begins increasing again up to 1.0, then repeats.
-   Creates a smooth fading in and out cycle for each cell.

**🧠 Technical Highlights**

-   Uses dataset attributes to store and manage:
-   The current color of the square (rgb)
-   The current opacity level (opacity)
-   The current fade direction (direction)
-   Whether the square has already been colored (colorSet)
-   Grid responsiveness is handled with flexbox, calc(), and aspect-ratio to maintain uniform sizing.
-   Clean and modular code separation: HTML (structure), CSS (styling), and JS (logic).

**📁 File Structure**

-   index.html — Loads the container and button, includes stylesheet and script.
-   style.css — Handles layout, button styles, and visual design of the grid.
-   script.js — Handles grid generation, random coloring, and opacity transitions.

## How To Use

1. Open the app in a browser.
2. Click the "Create a new grid" button.
3. Enter a size from 1 to 100.
4. Hover over squares to start drawing with dynamic color and fading effects.

## Рublished Website

https://codersimone.github.io/etch-a-sketch/
