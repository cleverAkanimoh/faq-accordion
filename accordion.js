export default function accordion(faqs) {
  return `

  <button class="accordion-button" >${faqs.question}</button>
  
  <p class="accordion-answer">
  ${faqs.answer}
  </p>
  
  
  `;
}
