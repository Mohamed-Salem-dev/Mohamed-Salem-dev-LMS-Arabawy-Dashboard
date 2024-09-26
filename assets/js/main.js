function toggleNav() {
  const sidebar = document.getElementById("mySidebar");
  const main = document.getElementById("main");
  sidebar.classList.toggle("closed");
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle("open");
  }
}

// =======================================
$(document).ready(function () {
  new DataTable("#example");
  
});


new DataTable('#example', {
  scrollX: true,
  language: {
    url: '//cdn.datatables.net/plug-ins/2.1.6/i18n/ar.json',
},
});


// ==================================
document.querySelectorAll('.btn-eye-password').forEach(button => {
  button.addEventListener('click', function() {
    const passwordInput = this.previousElementSibling;
    const showIcon = this.querySelector('.show');
    const hideIcon = this.querySelector('.hide');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      showIcon.style.display = 'inline-block';
      hideIcon.style.display = 'none';
    } else {
      passwordInput.type = 'password';
      showIcon.style.display = 'none';
      hideIcon.style.display = 'inline-block';
    }
  });
});
// =========================================================
//  ====================================================================================================================================
let btnToggle = document.querySelector(".btn-navbar-toggler");
let listNav = document.querySelector(".box-navbar-nav");
let btnCloseNav = document.querySelector(".btn-close-nav");

document.addEventListener("DOMContentLoaded", () => {
  // createElement in Dom
  let layerScreen = document.createElement("div");
  layerScreen.className = "box-layer-screen";
  layerScreen.textContent = "";
  // تحديد المكان الذي تريد إضافة العنصر إليه، هنا نضيفه إلى body
  document.body.appendChild(layerScreen);
  let navbarComprehensive = document.querySelector(".box-navbar");
  layerScreen.remove();

  //   --------------------------------------------------
  btnToggle.onclick = () => {
    // console.log("btnToggle");
    listNav.classList.toggle("active");

    // ---------------------
    if (layerScreen && !navbarComprehensive.contains(layerScreen)) {
      navbarComprehensive.appendChild(layerScreen); // إعادة إضافة العنصر إلى DOM
      setTimeout(() => {
        layerScreen.classList.add("visible");
      }, 10); // تأخير بسيط للسماح بإعادة إضافة العنصر إلى DOM
    } else if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.toggle("visible");
    }
  };

  //   -----------------------------
  btnCloseNav.onclick = () => {
    console.log("btnCloseNav");
    listNav.classList.remove("active");

    //-------------------
    if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.remove("visible");

      setTimeout(() => {
        layerScreen.remove();
      }, 500); // تأخير إزالة العنصر حتى تنتهي الانتقالية
    }
  };

  // -------------------------------
  layerScreen.onclick = () => {
    console.log("layerScreen");
    listNav.classList.remove("active");
    if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.remove("visible");

      setTimeout(() => {
        layerScreen.remove();
      }, 500); // تأخير إزالة العنصر حتى تنتهي الانتقالية
    }
  };
});

// ===================================================================================
// Chat 
const userChatButtons = document.querySelectorAll('.btn-item-user-chat');
const caratAuctionChat = document.querySelector('.box-Carat-Auction-chat');
const caratMessages = document.querySelector('.box-Carat-Messages');
const backButton = document.querySelector('.btn-arrow-back');
const userChatItems = document.querySelectorAll('.item-user-chat'); 

caratMessages.classList.add('hidden');

function activateItem(item) {
  userChatItems.forEach(chatItem => {
    if (chatItem === item) {
      chatItem.classList.add('active');
    } else {
      chatItem.classList.remove('active');
    }
  });
}

userChatButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    activateItem(userChatItems[index]); 
    caratAuctionChat.classList.add('hidden');
    caratMessages.classList.remove('hidden');
  });
});

backButton.addEventListener('click', () => {
  caratAuctionChat.classList.remove('hidden');
  caratMessages.classList.add('hidden');
  
  userChatItems.forEach(chatItem => {
    chatItem.classList.remove('active');
  });
});


// ----------------------------------
// delete user
const indexCheckbox = document.getElementById('indexCheckbox');
const userCheckboxes = document.querySelectorAll('.input-checkbox-user');
const deleteButton = document.querySelector('.btn-delete-user');

indexCheckbox.addEventListener('change', () => {
  userCheckboxes.forEach(checkbox => {
    checkbox.checked = indexCheckbox.checked;
  });
});

deleteButton.addEventListener('click', () => {
  userCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      const item = checkbox.closest('.item-user-chat');
      item.classList.add('hidden');
    }
  });
});


