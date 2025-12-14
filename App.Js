const cells = document.querySelectorAll(".cell");
const statusDisplay = document.querySelector(".status");
let turnX = true;
statusDisplay.innerHTML = "X's Turn";
let won = false;

const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (cell.classList.contains("disabled")) return;

        console.log("Box Clicked");
        if (turnX) {
            cell.innerHTML = "X";
            turnX = false;
            statusDisplay.innerHTML = "O's Turn";
        } else {
            cell.innerHTML = "O";
            turnX = true;
            statusDisplay.innerHTML = "X's Turn";
        }
        checkWinner();
        cell.classList.add("disabled");
        draw();
    });
});

const checkWinner = () => {
    for (let win of wins) {
        const [a, b, c] = win;
        if (cells[a].innerHTML !== "" && cells[b].innerHTML !== "" && cells[c].innerHTML !== "") {
            if (cells[a].innerHTML === cells[b].innerHTML && cells[b].innerHTML === cells[c].innerHTML) {
                statusDisplay.innerHTML = `${cells[a].innerHTML} Won!`;
                cells.forEach((cell) => { cell.classList.add("disabled"); });
                won = true;
                //console.log(`Winner ${cells[a].innerHTML}`);
            }
        }
    }

};


const resButton = document.querySelector(".resbtn");
resButton.addEventListener("click", () => {
    turnX = true;
    statusDisplay.innerHTML = "X's Turn";
    cells.forEach((cell) => {
        cell.classList.remove("disabled");
        cell.innerHTML = "";

    });

});


const draw = () => {
    let flag = true; // একটি ফ্ল্যাগ তৈরি করা হচ্ছে যা ডিফল্টভাবে সত্য (true)।
    for (let cell of cells) { // সব সেলগুলোর জন্য লুপ চালানো হচ্ছে।
        if (!cell.classList.contains("disabled")) { // যদি সেলটি নিষ্ক্রিয় (disabled) না হয়,
            flag = false; // তাহলে ফ্ল্যাগকে মিথ্যা (false) করা হচ্ছে।
        }
    }
    if (flag && !won) { // যদি ফ্ল্যাগ সত্য (true) হয় এবং কোনো বিজয়ী না হয়,
        statusDisplay.innerHTML = "Match is Draw"; // তাহলে স্ট্যাটাস ডিসপ্লেতে "ম্যাচ ড্র" লেখা হচ্ছে।
    }
};