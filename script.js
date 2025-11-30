// const messages = [
//   "Nhớ nhớ nhớ Sâuu!"
// ];

// function generateRandomNotifications() {
//   const notificationCount = 100;

//   for (let i = 0; i < notificationCount; i++) {
//     setTimeout(() => {
//       const notification = document.createElement('div');
//       notification.className = 'notification';

//       const randomMessage = messages[Math.floor(Math.random() * messages.length)];
//       notification.innerHTML = `
//         <div class="notification-header">
//           <button class="minimize-btn" onclick="minimizeNotification(this)">–</button>
//           <span>Tràn ngập bộ</span>
//         </div>
//         <p>${randomMessage}</p>
//       `;

//       const x = Math.random() * (window.innerWidth - 240);
//       const y = Math.random() * (window.innerHeight - 160);
//       notification.style.left = `${x}px`;
//       notification.style.top = `${y}px`;

//       document.body.appendChild(notification);
//     }, i * 200);
//   }
// }

// function minimizeNotification(button) {
//   const notification = button.closest('.notification');
//   notification.style.display = 'none'; 
// }

// document.addEventListener("DOMContentLoaded", function () {
//   var encodedText = '&#68;&#101;&#115;&#105;&#103;&#110;&#32;&#98;&#121;&#32;&#80;&#97;&#110;&#98;&#97;&#112;';
//   var footer = document.createElement("a");
//   footer.innerHTML = encodedText; 
//   document.body.appendChild(footer); 
// });

// Đoạn mã đã có
const messages = [
  "Nhớ nhớ nhớ Sâuu!"
];

function generateRandomNotifications() {
  const notificationCount = 35; // Số lượng cửa sổ nhỏ

  for (let i = 0; i < notificationCount; i++) {
    setTimeout(() => {
      const notification = document.createElement('div');
      notification.className = 'notification';

      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      notification.innerHTML = `
        <div class="notification-header">
          <button class="minimize-btn" onclick="minimizeNotification(this)">–</button>
          <span>Tràn ngập bộ</span>
        </div>
        <p>${randomMessage}</p>
      `;

      const x = Math.random() * (window.innerWidth - 240);
      const y = Math.random() * (window.innerHeight - 160);
      notification.style.left = `${x}px`;
      notification.style.top = `${y}px`;

      document.body.appendChild(notification);
    }, i * 200);
  }
}

function minimizeNotification(button) {
  const notification = button.closest('.notification');
  notification.style.display = 'none'; 
}

document.addEventListener("DOMContentLoaded", function () {
  var encodedText = '&#68;&#101;&#115;&#105;&#103;&#110;&#32;&#98;&#121;&#32;&#80;&#97;&#110;&#98;&#97;&#112;';
  var footer = document.createElement("a");
  footer.innerHTML = encodedText; 
  document.body.appendChild(footer); 
});

// Tích hợp phát nhạc và hiện cửa sổ
function handleTextClick() {
  const audio = document.getElementById('background-music');
  
  // Phát hoặc dừng nhạc
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  
  // Hiện các cửa sổ nhỏ
  generateRandomNotifications();
}

// Thêm sự kiện nhấn vào dòng chữ
document.getElementById('clickable-text').addEventListener('click', handleTextClick);
