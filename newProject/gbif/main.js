const wrapper = document.getElementById("wrapper");
const createHeader = document.createElement("div");
createHeader.id = "header";
wrapper.appendChild(createHeader);
const navHeader = document.createElement("nav");
navHeader.className = "navbar navbar-expand-sm wp";
navHeader.id = "nav_menu";
createHeader.appendChild(navHeader);

const divChildNavHeader = document.createElement("div");
divChildNavHeader.className =
  "container-fluid d-flex justify-content-between content_wp";
navHeader.appendChild(divChildNavHeader);

//child Element
const aChildDivNav = document.createElement("a");
aChildDivNav.className = "navbar-brand";
aChildDivNav.href = "#";
divChildNavHeader.appendChild(aChildDivNav);

const iChildA = document.createElement("i");
iChildA.className = "fa-brands fa-github";
iChildA.style = "color: #fff";
aChildDivNav.appendChild(iChildA);
//
const div2ChildNavHeader = document.createElement("div");
div2ChildNavHeader.className = "collapse navbar-collapse";
div2ChildNavHeader.id = "collapsibleNavbar";
divChildNavHeader.appendChild(div2ChildNavHeader);

const ulChildDiv2 = document.createElement("ul");
ulChildDiv2.className = "mainMenu__childGroup navbar-nav";
ulChildDiv2.id = "menu_main";
div2ChildNavHeader.appendChild(ulChildDiv2);
const ICONCLASSNAME = [
  "fa-solid fa-strikethrough",
  "fa-solid fa-language",
  "fa-solid fa-magnifying-glass",
  "fa-solid fa-file",
];
let lengthIcon = ICONCLASSNAME.length;

const div3ChildNavHeader = document.createElement("div");
div3ChildNavHeader.className = "icon_menu d-flex justify-content-between";
divChildNavHeader.appendChild(div3ChildNavHeader);
for (let i = 0; i < lengthIcon; i++) {
  const divChildDiv3 = document.createElement("div");
  divChildDiv3.className = "text-dark nav-item";
  divChildDiv3.style = "margin-right: 20px; cursor: pointer";
  div3ChildNavHeader.appendChild(divChildDiv3);
  const aIconLink = document.createElement("a");
  aIconLink.href = "#";
  divChildDiv3.appendChild(aIconLink);
  const iIconMenu = document.createElement("i");
  iIconMenu.className = `${ICONCLASSNAME[i]}`;
  if (i == 1) {
    iIconMenu.id = "language";
  }
  aIconLink.appendChild(iIconMenu);
}
const divLoginIcon = document.createElement("div");
divLoginIcon.className = "text-dark nav-item";
divLoginIcon.style = "margin-right: 20px; cursor: pointer";
divLoginIcon.id = "fonm_login";
div3ChildNavHeader.appendChild(divLoginIcon);
const aChildIconLogin = document.createElement("a");
aChildIconLogin.href = "#";
aChildIconLogin.style = ` display: inline-block;
padding: 0 10px;
background-color: #fff;
color: #17594a;
border-radius: 5px;`;
divLoginIcon.appendChild(aChildIconLogin);
const namelinkLogin = document.createTextNode("Login");
aChildIconLogin.appendChild(namelinkLogin);

//form login
const createForm = document.createElement("div");
createForm.className = "container hidden";
createForm.style = "position: absolute; right: 15px; top: 56px; width: 300px";
createForm.id = "login";
div3ChildNavHeader.appendChild(createForm);
const createRowForm = document.createElement("div");
createRowForm.className = "row justify-content-center";
createForm.appendChild(createRowForm);
const createCartForm = document.createElement("div");
createCartForm.className = "card";
createRowForm.appendChild(createCartForm);
const createCartUl = document.createElement("ul");
createCartUl.className =
  "nav nav-pills card-header-pills d-flex justify-content-evenly";
createCartForm.appendChild(createCartUl);
//li
const createFormUlLi = document.createElement("li");
createFormUlLi.className = "nav-item";
createFormUlLi.id = "login-tab";
createFormUlLi.style = "width:50%;text-align:center";
createCartUl.appendChild(createFormUlLi);

const createALogin = document.createElement("a");
createALogin.className = "nav-link";
createALogin.href = "#";

createFormUlLi.appendChild(createALogin);
const CreateTextNewLogin = document.createTextNode("Login");

createALogin.appendChild(CreateTextNewLogin);
//
const createFormUlLi2 = document.createElement("li");
createFormUlLi2.className = "nav-item";
createFormUlLi2.id = "register-tab";
createFormUlLi2.style = "width:50%;text-align:center";
createCartUl.appendChild(createFormUlLi2);
const createARegister = document.createElement("a");
createARegister.className = "nav-link";
createARegister.href = "#";
createFormUlLi2.appendChild(createARegister);
const createTextnewRegister = document.createTextNode("Register");
createARegister.appendChild(createTextnewRegister);
//cartBody
const createCartBody = document.createElement("div");
createCartBody.className = "card-body";
createCartForm.appendChild(createCartBody);
const creatLoginForm = document.createElement("div");
creatLoginForm.id = "login-form";
createCartBody.appendChild(creatLoginForm);
//username
const createFormGroup = document.createElement("div");
createFormGroup.className = "form-group";
creatLoginForm.appendChild(createFormGroup);
const createLableUsername = document.createElement("label");
createLableUsername.for = "login-email";
createFormGroup.appendChild(createLableUsername);
const createTextUsername = document.createTextNode("USERNAME");
createLableUsername.appendChild(createTextUsername);
const createInputUsername = document.createElement("input");
createInputUsername.type = "text";
createInputUsername.id = "login-email";
createInputUsername.placeholder = "Enter email";
createFormGroup.appendChild(createInputUsername);
//
//password
const createFormGroup2 = document.createElement("div");
createFormGroup2.className = "form-group";
creatLoginForm.appendChild(createFormGroup2);
const createLablePassword = document.createElement("label");
createLablePassword.for = "login-password";
createFormGroup2.appendChild(createLablePassword);
const createTextPassword = document.createTextNode("PASSWORD");
createLablePassword.appendChild(createTextPassword);
const createInputPassword = document.createElement("input");
createInputPassword.type = "password";
createInputPassword.id = "login-password";
createInputPassword.placeholder = "password";
createFormGroup2.appendChild(createInputPassword);
//button
const createButtonLogin = document.createElement("button");
createButtonLogin.type = "submit";
createButtonLogin.className = "btn btn-primary";
createButtonLogin.style = "width: 100%";
const createTextLogin = document.createTextNode("Login");
createButtonLogin.appendChild(createTextLogin);
creatLoginForm.appendChild(createButtonLogin);
// end login form
const creatRegisterForm = document.createElement("div");
creatRegisterForm.id = "register-form";
creatRegisterForm.className = "hidden";
createCartBody.appendChild(creatRegisterForm);
//email
const createFormGroup3 = document.createElement("div");
createFormGroup3.className = "form-group";
creatRegisterForm.appendChild(createFormGroup3);
const createLableEmail = document.createElement("label");
createLableEmail.for = "register-email";
createFormGroup3.appendChild(createLableEmail);
const createTextEmail = document.createTextNode("EMAIL");
createLableEmail.appendChild(createTextEmail);
const createInputEmail = document.createElement("input");
createInputEmail.type = "email";
createInputEmail.id = "register-email";
createInputEmail.placeholder = "Enter email";
createFormGroup3.appendChild(createInputEmail);
//username
const createFormGroup4 = document.createElement("div");
createFormGroup4.className = "form-group";
creatRegisterForm.appendChild(createFormGroup4);
const createLableUsernameRegister = document.createElement("label");
createLableUsernameRegister.for = "register-username";
createFormGroup4.appendChild(createLableUsernameRegister);
const createTextUsernameRegister = document.createTextNode("USERNAME");
createLableUsernameRegister.appendChild(createTextUsernameRegister);
const createInputUsernameRegister = document.createElement("input");
createInputUsernameRegister.type = "text";
createInputUsernameRegister.id = "register-username";
createInputUsernameRegister.placeholder = "Enter username";
createFormGroup4.appendChild(createInputUsernameRegister);
//password
const createFormGroup5 = document.createElement("div");
createFormGroup5.className = "form-group";
creatRegisterForm.appendChild(createFormGroup5);
const createLablePasswordRegister = document.createElement("label");
createLablePasswordRegister.for = "register-password";
createFormGroup5.appendChild(createLablePasswordRegister);
const createTextPasswordRegister = document.createTextNode("PASSWORD");
createLablePasswordRegister.appendChild(createTextPasswordRegister);
const createInputPasswordRegister = document.createElement("input");
createInputPasswordRegister.type = "password";
createInputPasswordRegister.id = "register-password";
createInputPasswordRegister.placeholder = "Enter password";
createFormGroup5.appendChild(createInputPasswordRegister);
//button
const createButtonRegister = document.createElement("button");
createButtonRegister.type = "submit";
createButtonRegister.className = "btn btn-primary";
createButtonRegister.style = "width: 100%";
const createTextRegister = document.createTextNode("Register");
createButtonRegister.appendChild(createTextRegister);
creatRegisterForm.appendChild(createButtonRegister);
//
//form language
const createFormLanguague = document.createElement("div");
createFormLanguague.id = "form_langue";
createFormLanguague.className = "hidden";
navHeader.appendChild(createFormLanguague);
const createFormLanguageItem = document.createElement("div");
createFormLanguageItem.className = "form-group";
createFormLanguageItem.id = "form_langua_item";
createFormLanguague.appendChild(createFormLanguageItem);
let DATA_MENU = [
  {
    id: 1,
    name: "Get Data",
    child_menu: [
      {
        child_id: 1,
        name: "SHEARE DATA",
        use_data: [
          "Occurrences",
          "GBIF API",
          "Species",
          "Datasets",
          "Hostedpotals",
          "Trends",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "How-to",
    child_menu: [
      {
        child_id: 1,
        name: "SHEARE DATA",
        use_data: [
          "Occurrences",
          "GBIF API",
          "Species",
          "Datasets",
          "Hostedpotals",
          "Trends",
        ],
      },
      {
        child_id: 2,
        name: "USE DATA",
        use_data: [
          "Occurrences",
          "GBIF API",
          "Species",
          "Datasets",
          "Hostedpotals",
          "Trends",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Tools",
    child_menu: [
      {
        child_id: "1",
        name: "PUBLISHING",
        use_data: [
          "Occurrences",
          "GBIF API",
          "Species",
          "Datasets",
          "Hostedpotals",
          "Trends",
        ],
      },
      {
        child_id: 2,
        name: "DATA ACCESS AND USE",
        use_data: [
          "Occurrences",
          "GBIF API",
          "Species",
          "Datasets",
          "Hostedpotals",
          "Trends",
        ],
      },
      {
        child_id: 3,
        name: "GIDBF LABS",
        use_data: [
          "Occurrences",
          "GBIF API",
          "Species",
          "Datasets",
          "Hostedpotals",
          "Trends",
        ],
      },
    ],
  },
];
// end form login
let DATA_LANGUAGE = [
  {
    id: 1,
    name: ["English", "العربية", "简体中文", "Français", "Русский", "Español"],
  },
  {
    id: 2,
    name: ["繁體中文", "日本語", "Português", "Українська"],
  },
];

//form language
const form_login = document.getElementById("login");
const form_langua_item = document.getElementById("form_langua_item");
function fn_showFormLanguage() {
  let length_data_langue = DATA_LANGUAGE.length;
  const createItemLanguage = document.createElement("div");
  createItemLanguage.for = "gender";
  createItemLanguage.className = "text-center";
  createItemLanguage.style = "background-color: #17594a; color: #fff";
  form_langua_item.appendChild(createItemLanguage);
  const createTextChangLanguage = document.createTextNode("Change language");
  createItemLanguage.appendChild(createTextChangLanguage);
  form_langua_item.appendChild(createItemLanguage);
  for (let i = 0; i < length_data_langue; i++) {
    let length_data_langue_i = DATA_LANGUAGE[i].name.length;
    const createItemNameLanguage = document.createElement("div");
    createItemNameLanguage.style =
      "border-bottom:1px solid #333;padding-left:15px";
    form_langua_item.appendChild(createItemNameLanguage);
    for (let j = 0; j < length_data_langue_i; j++) {
      const createFormCheckLanguage = document.createElement("div");
      createFormCheckLanguage.className = "form-check";
      createItemNameLanguage.appendChild(createFormCheckLanguage);
      const createInputLanguage = document.createElement("input");
      createInputLanguage.setAttribute("type", "radio");
      createInputLanguage.setAttribute("class", "form-check-input");
      createInputLanguage.setAttribute("name", "langue");
      createInputLanguage.setAttribute("value", `${DATA_LANGUAGE[i].name[j]}`);
      createInputLanguage.id = `${DATA_LANGUAGE[i].name[j]}`;
      if (i == 0 && j == 0) {
        createInputLanguage.checked = true;
      }
      createFormCheckLanguage.appendChild(createInputLanguage);
      const createFormCheckLabel = document.createElement("label");
      createFormCheckLabel.className = "form-check-label";
      createFormCheckLabel.for = `${DATA_LANGUAGE[i].name[j]}`;
      createFormCheckLanguage.appendChild(createFormCheckLabel);
      const createTextNameLanguage = document.createTextNode(
        `${DATA_LANGUAGE[i].name[j]}`
      );
      createFormCheckLabel.appendChild(createTextNameLanguage);
    }
  }
  fn_addEventFormLanguage();
}

function fn_addEventFormLanguage() {
  //sự kiện click
  const language = document.getElementById("language");
  const form_langue = document.getElementById("form_langue");
  language.addEventListener("click", function (e) {
    e.stopPropagation();
    form_langue.classList.toggle("hidden");
    document.getElementById("login").classList.add("hidden");
    // fn_removeActivee();
  });
}

let DATA_IMAGES = [
  "https://vtv1.mediacdn.vn/thumb_w/640/2018/11/29/photo-1-154348431990377584420.jpg",
  "https://msmobile.com.vn/upload_images/images/hinh-nen-dep-cho-may-tinh-full-hd-2.jpg",
  "https://teky.edu.vn/blog/wp-content/uploads/2022/03/Hinh-nen-may-tinh-dep-chu-de-phong-canh.jpg",
];
const header = document.getElementById("header");
function getRandomImage(images) {
  return images[Math.floor(Math.random() * images.length)];
}
window.addEventListener("load", function () {
  header.style.backgroundImage = `url('${getRandomImage(DATA_IMAGES)}')`;
  fn_loadData();
  fn_hideElement();
  fn_toggleHiddenForm();
  // fn_validateForm();
});

function fn_loadData() {
  fn_getMenu();
  fn_showFormLanguage();
  fn_showFormLoginRegister();
}
function fn_hideElement() {
  fn_clickHeaderHideElement();
  fn_scroollHiddenElement();
}

function fn_getMenu() {
  const menu_main = document.getElementById("menu_main");
  let DATA_MENU_length = DATA_MENU.length;
  for (let i = 0; i < DATA_MENU_length; i++) {
    const liChildMenuMain = document.createElement("li");
    liChildMenuMain.className = "mainMenu__columns nav-item";
    liChildMenuMain.style = "cursor:pointer;width:100px;text-align:center";
    menu_main.appendChild(liChildMenuMain);
    const nameliChildMenu = document.createTextNode(`${DATA_MENU[i].name}`);
    liChildMenuMain.appendChild(nameliChildMenu);
    const navChildLi = document.createElement("nav");
    navChildLi.className = "childnav";
    liChildMenuMain.appendChild(navChildLi);
    let length_menu_child = DATA_MENU[i].child_menu.length;
    if (length_menu_child) {
      for (let j = 0; j < length_menu_child; j++) {
        const ulChildNav = document.createElement("ul");
        ulChildNav.className = "mainMenu__childItem";
        navChildLi.appendChild(ulChildNav);
        const divChildSubMenu = document.createElement("div");
        divChildSubMenu.className = "menu_title";
        ulChildNav.appendChild(divChildSubMenu);
        const nameSubMenu = document.createTextNode(
          `${DATA_MENU[i].child_menu[j].name}`
        );
        divChildSubMenu.appendChild(nameSubMenu);
        let child_menu_user_data = DATA_MENU[i].child_menu[j].use_data.length;
        for (let k = 0; k < child_menu_user_data; k++) {
          const liChildSubMenu = document.createElement("li");
          ulChildNav.appendChild(liChildSubMenu);
          const aliChildSubMenu = document.createElement("a");
          aliChildSubMenu.dir = "auto";
          aliChildSubMenu.href = "/occurrence/search";
          liChildSubMenu.appendChild(aliChildSubMenu);
          const nameliChildSubMenu = document.createTextNode(
            `${DATA_MENU[i].child_menu[j].use_data[k]}`
          );
          aliChildSubMenu.appendChild(nameliChildSubMenu);
        }
      }
    }
  }
  fn_addEventForMenu();
}
const listMenu = document.getElementsByClassName("mainMenu__columns");
let leng_listMenu = listMenu.length;

function fn_addEventForMenu() {
  // Danh sách menu
  const listMenu = document.getElementsByClassName("mainMenu__columns");
  let leng_listMenu = listMenu.length;
  for (let i = 0; i < leng_listMenu; i++) {
    listMenu[i].addEventListener("click", function (e) {
      e.stopPropagation();
      document.getElementById("login").classList.add("hidden");
      form_langue.classList.add("hidden");
      for (let j = 0; j < leng_listMenu; j++) {
        if (listMenu[j] == this) {
          this.classList.toggle("activee");
          this.classList.toggle("color_orage");
        } else {
          listMenu[j].classList.remove("activee");
          listMenu[j].classList.remove("color_orage");
        }
      }
    });
  }
}
//
//
// sự kiện
//
function fn_removeActivee() {
  const listMenu = document.getElementsByClassName("mainMenu__columns");
  let leng_listMenu = listMenu.length;
  for (let j = 0; j < leng_listMenu; j++) {
    listMenu[j].classList.remove("activee");
    listMenu[j].classList.remove("color_orage");
  }
}
function fn_removeActivee() {
  const listMenu = document.getElementsByClassName("mainMenu__columns");
  let leng_listMenu = listMenu.length;
  for (let j = 0; j < leng_listMenu; j++) {
    listMenu[j].classList.remove("activee");
    listMenu[j].classList.remove("color_orage");
  }
}
function fn_clickHeaderHideElement() {
  // click header thì xóa
  header.addEventListener("click", function (e) {
    fn_removeActivee();
    if (!form_langue.classList.contains("hidden")) {
      form_langue.classList.add("hidden");
    }
    if (!form_login.classList.contains("hidden")) {
      form_login.classList.add("hidden");
    }
  });
}
form_langue.addEventListener("click", function (e) {
  e.stopPropagation();
});
function fn_scroollHiddenElement() {
  // scrooll thì xóa
  window.addEventListener("scroll", function (e) {
    if (document.documentElement.scrollTop === 0) {
      // thực hiện thay đổi màu nền của trang
      document.getElementById("nav_menu").style.backgroundColor = "";
    } else {
      // nếu không phải scroll top thì đặt lại màu nền mặc định của trang
      document.getElementById("nav_menu").style.backgroundColor = "pink";
    }
    fn_removeActivee();
    if (!form_langue.classList.contains("hidden")) {
      form_langue.classList.add("hidden");
    }

    if (!form_login.classList.contains("hidden")) {
      form_login.classList.add("hidden");
    }
  });
}
//form login
function fn_toggleHiddenForm() {
  const fomr_login = document.getElementById("fonm_login");
  fomr_login.addEventListener("click", function (e) {
    e.stopPropagation();
    document.getElementById("login").classList.toggle("hidden");
    form_langue.classList.add("hidden");
    fn_removeActivee();
  });
}
form_login.addEventListener("click", function (e) {
  e.stopPropagation();
});
function fn_clickHeaderHideElement() {
  // click header thì xóa
  header.addEventListener("click", function (e) {
    fn_removeActivee();
    if (!form_langue.classList.contains("hidden")) {
      form_langue.classList.add("hidden");
    }
    if (!form_login.classList.contains("hidden")) {
      form_login.classList.add("hidden");
    }
  });
}

function fn_showFormLoginRegister() {
  const register = document.getElementById("register-form");
  const login = document.getElementById("login-form");
  document
    .getElementById("register-tab")
    .addEventListener("click", function (e) {
      register.classList.remove("hidden");
      login.classList.add("hidden");
      this.classList.add("border_color");
      document.getElementById("login-tab").classList.remove("border_color");
    });
  document.getElementById("login-tab").addEventListener("click", function (e) {
    register.classList.add("hidden");
    login.classList.remove("hidden");
    this.classList.add("border_color");
    document.getElementById("register-tab").classList.remove("border_color");
  });
}
//
// content
const createContent = document.createElement("div");
createContent.className = "container";
createHeader.appendChild(createContent);
const createRowContent = document.createElement("div");
createRowContent.className = "row";
createRowContent.style =
  "display: flex; flex-direction: column; padding-top: 20%";
createContent.appendChild(createRowContent);
const createDiv1Content = document.createElement("div");
createDiv1Content.className = "col-6 col-md-6";
createRowContent.appendChild(createDiv1Content);
const createP1 = document.createElement("p");
createP1.style = "color: #fff";
createDiv1Content.appendChild(createP1);
const textNodeP = document.createTextNode(
  "GBIF | Global Biodiversity Information Facility"
);
createP1.appendChild(textNodeP);
const div1Content = document.createElement("div");
div1Content.className = "col-6 col-md-6";
createRowContent.appendChild(div1Content);
const h1 = document.createElement("h1");
h1.style = "color: #fff";
div1Content.appendChild(h1);
const div2Content = document.createElement("div");
div2Content.className = "col-8 col-md-8";
createRowContent.appendChild(div2Content);
const createDivChild = document.createElement("div");
createDivChild.className = "form-group";
div2Content.appendChild(createDivChild);
const createLabelLink = document.createElement("label");
createLabelLink.for = "link1";
createLabelLink.style = "background-color: rgb(0, 0, 0, 0.3)";
createDivChild.appendChild(createLabelLink);

const NAME_SEARCH = [
  "OCCURRENCES",
  "SPECIES",
  "DATASETS",
  "PUBLISHERS",
  "RESOURCES",
  "OCCURRENCES",
];
const length_NAME_SEARCH = NAME_SEARCH.length;
for (let i = 0; i < length_NAME_SEARCH; i++) {
  const aItemLink = document.createElement("a");
  aItemLink.className = `link${i + 1}`;
  aItemLink.href = "#";
  createLabelLink.appendChild(aItemLink);
  const TextNote = document.createTextNode(`${NAME_SEARCH[i]}`);
  aItemLink.appendChild(TextNote);
}
const inputSearch = document.createElement("input");
inputSearch.type = "text";
inputSearch.className = "form-control";
inputSearch.id = "input";
inputSearch.placeholder = "search";
inputSearch.style = "padding: 10px";

createDivChild.appendChild(inputSearch);

const lable2 = document.createElement("label");
lable2.style = "background-color: rgb(0, 0, 0, 0.3)";
createDivChild.appendChild(lable2);
const aLinkLable = document.createElement("a");
aLinkLable.href = "#";
aLinkLable.classList = "link1";
lable2.appendChild(aLinkLable);
const textNoteLable = document.createTextNode("What is GBIF");
aLinkLable.appendChild(textNoteLable);
const aLinkLable2 = document.createElement("a");
aLinkLable2.href = "#";
aLinkLable2.classList = "link1";
lable2.appendChild(aLinkLable2);
const textNoteLable2 = document.createTextNode("About GBIF VietNam");
aLinkLable2.appendChild(textNoteLable2);
