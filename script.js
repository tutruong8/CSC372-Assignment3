document.addEventListener("DOMContentLoaded", () => {
    const eventCards = document.querySelectorAll(".event-card, .featured-event-card");
    const eventsSection = document.querySelector(".events-section");

    if (!eventCards.length || !eventsSection) {
        return;
    }

    const savedEventsSection = document.createElement("section");
    savedEventsSection.className = "saved-events-section";

    const savedEventsHeading = document.createElement("h2");
    savedEventsHeading.textContent = "Saved Events";
    savedEventsSection.appendChild(savedEventsHeading);

    const savedEventsList = document.createElement("ul");
    savedEventsList.className = "saved-events-list";
    savedEventsSection.appendChild(savedEventsList);

    const emptyMessage = document.createElement("p");
    emptyMessage.className = "saved-events-empty";
    emptyMessage.textContent = "No events saved yet.";
    savedEventsSection.appendChild(emptyMessage);

    eventsSection.insertAdjacentElement("afterend", savedEventsSection);

    const updateSavedEvents = () => {
        savedEventsList.replaceChildren();
        const savedCards = document.querySelectorAll(".event-card.is-saved, .featured-event-card.is-saved");

        savedCards.forEach((card) => {
            const listItem = document.createElement("li");
            listItem.textContent = card.querySelector("h3").textContent;
            savedEventsList.appendChild(listItem);
        });

        emptyMessage.hidden = savedCards.length > 0;
    };

    eventCards.forEach((card) => {
        const saveButton = document.createElement("button");
        saveButton.className = "save-event-button";
        saveButton.type = "button";
        saveButton.textContent = "Save Event";
        saveButton.addEventListener("click", () => {
            const isSaved = card.classList.toggle("is-saved");
            saveButton.textContent = isSaved ? "Remove Event" : "Save Event";
            saveButton.setAttribute("aria-pressed", String(isSaved));
            updateSavedEvents();
        });

        card.querySelector(".event-card-body").appendChild(saveButton);
    });

    updateSavedEvents();
});
