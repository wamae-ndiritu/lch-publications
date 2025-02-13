const services = document.querySelectorAll(".service-item");
const descriptionBox = document.getElementById("service-description");

const serviceDetails = {
    "content-editing": {
        title: "Content Editing",
        description:
            "Content Editing focuses on refining and restructuring your content to ensure clarity, coherence, and impactful communication. This includes grammar checking, sentence structure adjustments, and improving overall readability.",
    },
    "ghost-writing": {
        title: "Ghost Writing",
        description:
            "Ghostwriting services allow you to bring your ideas to life without the stress of writing it yourself. Professional writers craft content under your name, whether it's books, blogs, or speeches.",
    },
    "scripts-manuscripts": {
        title: "Scripts & Manuscripts",
        description:
            "We offer writing and editing services for scripts, plays, screenplays, and manuscripts, ensuring that the story flows seamlessly, characters are developed, and the dialogue is captivating.",
    },
    "developmental-editing": {
        title: "Developmental Editing",
        description:
            "Developmental Editing takes your manuscript from good to great by refining structure, narrative arcs, pacing, and character development. This process helps you create a well-rounded and compelling story.",
    },
    "line-editing": {
        title: "Line Editing",
        description:
            "Line Editing focuses on sentence-level revisions to enhance clarity, tone, and flow. It involves refining sentence structure, word choice, and the overall reading experience.",
    },
    "copy-editing": {
        title: "Copy Editing",
        description:
            "Copy Editing ensures that your content is polished and includes grammar checks, spelling, punctuation, and style consistency to maintain a professional tone throughout.",
    },
};


// on document load, show first service description
descriptionBox.innerHTML = `
  <h6 class="text-xl md:text-3xl font-normal text-teal-700 mb-4">
    ${serviceDetails["content-editing"].title}
  </h6>
  <p class="text-gray-600 md:text-xl">${serviceDetails["content-editing"].description}</p>
`;
// on document load, show add class text-teal-900 to first service
services[0].classList.add("text-teal-900");

services.forEach((service) => {
    service.addEventListener("click", () => {
        // Remove active state from all
        services.forEach((s) => s.classList.remove("text-teal-900"));
        // Add active state to clicked service
        service.classList.add("text-teal-900");

        // Update description box
        const serviceKey = service.dataset.service;
        descriptionBox.innerHTML = `
      <h6 class="text-xl md:text-3xl font-normal text-teal-700 mb-4">
        ${serviceDetails[serviceKey].title}
      </h6>
      <p class="text-gray-600 md:text-xl">${serviceDetails[serviceKey].description}</p>
    `;
    });
});
