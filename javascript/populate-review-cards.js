window.addEventListener('DOMContentLoaded', async () => {
    console.log("DOM Content loaded");
    const url = "https://api.jsonbin.io/v3/b/67d397898561e97a50eb9706";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const jsonData = await response.json();
        jsonData.record.forEach(cshop => {
            window.galleryItem = document.createElement("review-card");
            window.galleryItem.setAttribute("coffeeShop", `${cshop.coffeeShop}`);
            window.galleryItem.setAttribute("reviewText", `${cshop.reviewText}`);
            window.galleryItem.setAttribute("overallScore", `${cshop.overallScore}`);
            window.galleryItem.setAttribute("tasteScore",`${cshop.tasteScore}`);
            window.galleryItem.setAttribute("specialtiesScore", `${cshop.specialtiesScore}`);
            window.galleryItem.setAttribute("locationScore", `${cshop.locationScore}`);
            window.galleryItem.setAttribute("vibesScore", `${cshop.vibesScore}`);
            window.galleryItem.setAttribute("valueScore", `${cshop.valueScore}`);
            window.galleryItem.setAttribute("outletsScore", `${cshop.outletsScore}`);
            window.galleryItem.setAttribute("foodScore", `${cshop.foodScore}`);
            window.galleryItem.setAttribute("accessibilityScore", `${cshop.accessibilityScore}`);
            window.galleryItem.setAttribute("image", `${cshop.image}`);
            window.galleryItem.setAttribute("linkto", `${cshop.linkto}`);
            document.getElementById("gallery").appendChild(window.galleryItem);
            console.log(`${cshop.image}`);
        });

    } catch (error) {
        console.error(error.message);
    }
});