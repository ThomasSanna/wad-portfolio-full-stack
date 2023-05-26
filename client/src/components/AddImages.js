import React, { useEffect } from "react";
import "../styles/AddImages.css";

export default function AddImages() {

  useEffect(() => {
    const addForm = document.querySelector(".add-form");
    const buttonLink = document.querySelector(".button-link");
    const inputLink = document.querySelector(".input-link");
    const addImagesButton = document.querySelector(".add-images-button");
    let addFormOpen = false;

    addImagesButton.addEventListener("click", () => {
      if (!addFormOpen) {
        addForm.style.display = "flex";
        addFormOpen = true;
      } else {
        addForm.style.display = "none";
        addFormOpen = false;
      }
    });
    document.addEventListener("click", (e) => {
      if (
        addFormOpen &&
        e.target !== addForm &&
        e.target !== inputLink &&
        e.target !== buttonLink &&
        e.target !== addImagesButton
      ) {
        addForm.style.display = "none";
        addFormOpen = false;
      }
    });
  }, []);

  return (
    <div className="add-container">
      <button className="add-images-button">+</button>
      <form action="/portfolio" class="add-form" method="POST">
        <input
          placeholder="https://. . . . . . . . ."
          type="text"
          name="link"
          id="link"
          class="input-link"
        />
        <input className="button-link" type="submit" value="Add" />
      </form>
    </div>
  );
}
