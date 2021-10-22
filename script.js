				const body = document.querySelector("body");

				var switchbtn = document.getElementById("switch");

				function theme() {

				body.classList.toggle("dark");

				}

				switchbtn.addEventListener("click", theme);