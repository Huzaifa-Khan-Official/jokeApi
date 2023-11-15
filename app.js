const container = document.querySelector(".container");

fetch("https://v2.jokeapi.dev/joke/any?")
    .then(res => res.json())
    .then(res => {
        const jokeCat = res.category
        let joke;
        if (res.setup) {
            joke = res.setup;
        } else {
            joke = res.joke;
        }
        container.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${jokeCat}</h5>
                    <p class="card-text">${joke}</p>
                    <a class="btn btn-primary">Another Joke</a>
                 </div>
            </div>
            `
        const btn = document.querySelector(".btn");

        if (btn) {
            btn.addEventListener("click", () => {
                console.log("chal gaya");
                location.reload()
            })
        }
    })
    .catch(err => {
        console.log(err);
    });