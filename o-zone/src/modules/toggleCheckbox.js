const toggleCheckbox = () => {
  const FilterCheckboxes = document.querySelectorAll(".filter-check_label");

  FilterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("click", () => {
      const newCheckbox = checkbox.querySelector(".filter-check_checkmark");
      if (newCheckbox.classList.contains("checked")) {
        newCheckbox.classList.remove("checked");
      } else {
        newCheckbox.classList.add("checked");
      }
    });
  });
};

export default toggleCheckbox;
