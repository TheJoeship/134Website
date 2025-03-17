async function populateReviews(local = false) {
    //Was having an issue where reviews kept double loading, not sure why but this fixes it
    if (window.loaded) {
        return;
    }
    window.loaded = true;
    const url = "https://api.jsonbin.io/v3/b/67d397898561e97a50eb9706";
    let jsonData;

    try {
        if (local) {
            //Call to populate from local storeage
            const localData = localStorage.getItem('reviews');
            if (!localData) {
                window.alert("No content is stored locally");
                return;
            }
            console.log("Populating reviews from local storage");
            jsonData = JSON.parse(localData);
        } else {
            //Call to populate remotely (from url)
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const temp = await response.json();
            jsonData = temp.record;
            localStorage.setItem('reviews', JSON.stringify(jsonData)); //store data locally for next access
            console.log("Populating reviews from remote storage");
        }

        jsonData.forEach(cshop => {
            const galleryItem = document.createElement("review-card");
            galleryItem.setAttribute("coffeeShop", cshop.coffeeShop || "No name");
            galleryItem.setAttribute("reviewText", cshop.reviewText || "No review");
            galleryItem.setAttribute("overallScore", cshop.overallScore || "No overall score");
            galleryItem.setAttribute("tasteScore", cshop.tasteScore || "No taste score");
            galleryItem.setAttribute("specialtiesScore", cshop.specialtiesScore || "No Specialties score");
            galleryItem.setAttribute("locationScore", cshop.locationScore || "No Location score");
            galleryItem.setAttribute("vibesScore", cshop.vibesScore || "No Music/vibes score");
            galleryItem.setAttribute("valueScore", cshop.valueScore || "No value score");
            galleryItem.setAttribute("outletsScore", cshop.outletsScore || "No outlets score");
            galleryItem.setAttribute("foodScore", cshop.foodScore || "No food score");
            galleryItem.setAttribute("accessibilityScore", cshop.accessibilityScore || "No accessibility score");
            galleryItem.setAttribute("image", cshop.image || "No image");
            galleryItem.setAttribute("linkto", cshop.linkto || "No URL");

            document.getElementById("gallery").appendChild(galleryItem);
            console.log(`Added review for: ${cshop.coffeeShop}`);
        });
    } catch (error) {
        console.error(error.message);
    }
}

window.populateReviews = populateReviews;