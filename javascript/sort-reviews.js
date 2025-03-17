document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("Categories").addEventListener("change",  function () {
        //Mapping of selection options to  attribute values
        const map = new Map();
        map.set("Coffee Taste", "tasteScore");
        map.set("Specialties", "specialtiesScore");
        map.set("Location/Parking", "locationScore");
        map.set("Music/Vibes", "vibesScore");
        map.set("Value", "valueScore");
        map.set("Outlets/Convenience", "outletsScore");
        map.set("Food", "foodScore");
        map.set("Accessibility", "accessibilityScore");
        map.set("Highest Score", "overallScore");
        map.set("Lowest Score", "overallScore");

        //Get our selected attribute
        const selectedCategory = document.getElementById("Categories").value;
        const selectedAttribute = map.get(selectedCategory);

        //Create an array of our review cards
        const gallery = document.getElementById("gallery");
        const reviewArray = Array.from(gallery.getElementsByTagName("review-card"));

        //Sort based on two elements for comparison
        reviewArray.sort((a,b) => {
            const vara = parseFloat(a.getAttribute(selectedAttribute));
            const varb = parseFloat(b.getAttribute(selectedAttribute));
            if (selectedCategory == "Lowest Score"){
                return vara-varb;
            } else {
                return varb-vara;
            }
        });

        reviewArray.forEach(
            review => {gallery.appendChild(review)}
        );
    });

})