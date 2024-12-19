// 編輯名稱功能
let editButton = document.getElementById("editName");
let nameDisplay = document.getElementById("nameDisplay");

editButton.addEventListener("click", function() {
    if (editButton.textContent === "Edit") {
        let currentName = nameDisplay.textContent;
        nameDisplay.innerHTML = `<input type="text" id="nameInput" value="${currentName}">`;
        let nameInput = document.getElementById("nameInput");
        nameInput.focus();
        editButton.textContent = "Save";
        
        // 按下 Enter 鍵完成編輯
        nameInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                saveName();
            }
        });
    } else if (editButton.textContent === "Save") {
        saveName();
    }
});

// 儲存名稱
function saveName() {
    let nameInput = document.getElementById("nameInput");
    nameDisplay.textContent = nameInput.value;
    editButton.textContent = "Edit";
}

// 音樂新增功能
let addMusicButton = document.getElementById("addMusic");
let addMusicForm = document.getElementById("addMusicForm");
let musicList = document.querySelector(".music-list");
let submitMusicButton = document.getElementById("submitMusic");
let cancelMusicButton = document.getElementById("cancelMusic");

// 顯示/隱藏音樂新增表單
addMusicButton.addEventListener("click", function() {
    addMusicForm.style.display = addMusicForm.style.display === "none" ? "block" : "none";
});

// 提交音樂
submitMusicButton.addEventListener("click", function() {
    // 獲取輸入的音樂名稱和 URL
    let musicURLInput = document.getElementById("musicURL");
    let musicNameInput = document.getElementById("musicName");

    let musicURL = musicURLInput.value.trim();
    let musicName = musicNameInput.value.trim();

    // 檢查是否所有欄位都已填寫
    if (musicURL === '' || musicName === '') {
        alert("Please fill in both the music URL and name.");
        return;
    }

    // 創建新的音樂項目
    let newMusicItem = document.createElement("div");
    newMusicItem.innerHTML = `
        <div>
            <img src="new_music.jpg" alt="${musicName}">
            <a href="${musicURL}" class="song-link" target="_blank">${musicName}</a>
        </div>
    `;

    // 將新音樂項目加入到音樂列表中
    musicList.appendChild(newMusicItem);

    // 清空表單欄位並隱藏表單
    musicURLInput.value = '';
    musicNameInput.value = '';
    addMusicForm.style.display = 'none';
});

// 取消新增音樂
cancelMusicButton.addEventListener("click", function() {
    // 清空輸入框並隱藏表單
    let musicURLInput = document.getElementById("musicURL");
    let musicNameInput = document.getElementById("musicName");

    musicURLInput.value = '';
    musicNameInput.value = '';
    addMusicForm.style.display = 'none';
});
