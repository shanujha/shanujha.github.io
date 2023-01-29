import { expertise_list } from "./expertise-data.js";

let expertise_html = "";
expertise_list.forEach((exp) => {
  const data = `<div class='expertise-item'>
      <span>
        <img class='expertise-icon' src=${exp.icon} />
      </span>
    </div>`;
  expertise_html += data;
});

export default expertise_html;
