//Scripts for customizing behaviors of the Dregreed Marcom portal.
  

var dg = jQuery.noConflict(true);
dg(document).ready(function(){
    
    //var degOrange = "#e76024";
    var currLocStyle = {"padding-bottom": "10px","border-bottom":"3px solid #e76024","color":"#fff"};
    var otherLocStyle = {"color":"#a5bfd2"};
    console.log("The custom scripts for the Degreed portal are now online!");
    
    function addMeta(){
        var metatags = "<meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">";
        var doctype = document.implementation.createDocumentType('html','','');
        document.doctype.parentNode.replaceChild(doctype, document.doctype);
        //var doctype = "<!DOCTYPE html>";
        //dg("!doctype").replaceWith(doctype);
        dg("head").prepend(metatags);
    }
    //addMeta();
    
    function modMenu(){
        var username = dg("#ctl00_ctl08_lblUserName").html();
        var profileHref = dg("#menuLinkItem_10_MyProfileButton").attr("href");
        var homeURL = "https://marcomcentral.app.pti.com/Graphic_Village/Degreed/home.aspx?uigroup_id="+uiGroupId;
        var logoutURL = dg("#ctl00_ctl08_btnLogOut").attr("href");
        var orderMGRURL = dg("#menuLinkItem_11_OrderManagerLink").attr("href");
        var cartURL = dg("#ctl00_ctl08_lnkCartText").attr("href");
        var cartCount = dg("#ctl00_ctl08_lnkCart").html();
        //console.log(cartURL);
        var replacementNav = "<span id=\"shoppingLink\"><a href=\""+cartURL+"\">Shopping Cart&nbsp;"+cartCount+"</a></span><span id=\"orderMGRLink\"><a href=\""+orderMGRURL+"\">Order</a></span>";
        var newMenuBar = "<div id=\"logo-bar\"><div id=\"logo-wrapper\" class=\"new-menu-box\"><a id=\"home-link\" href=\""+homeURL+"\"><img src=\"https://mymulti-craft.com/degreed/images/logo-degreed.svg\" alt=\"Degreed\"></a><div class=\"hover-text\" id=\"home-hover\"><p>Back to Home</p></div></div><div id=\"username-wrapper\" class=\"new-menu-box\"><a href=\""+profileHref+"\">"+username+"</a></div><div id=\"profileBTN-wrapper\" class=\"new-menu-box\"><a id=\"profile-link\" href=\""+profileHref+"\"><img src=\"https://mymulti-craft.com/degreed/images/profile-btn.png\" alt=\"To your profile!\"></a><div class=\"hover-text\" id=\"profile-hover\"><p>Your Profile</p></div></div><div id=\"logout-wrapper\" class=\"new-menu-box\"><a id=\"logout-link\" href=\""+logoutURL+"\"><img src=\"https://mymulti-craft.com/degreed/images/logout-btn.png\" alt=\"Logout\"></a><div class=\"hover-text\" id=\"logout-hover\"><p>Logout</p></div></div></div>";
        //console.log("modifying menu.");
        dg(".NavTop > :first-child").addClass("mod-menu");
        dg(".mod-menu > :nth-child(4)").addClass("menu-ctl").attr("id","menu-controls");
        dg(".mod-menu > :nth-child(6)").addClass("cart-ctl").attr("id","cart-controls");
        dg(".mod-menu span.spSearch").removeAttr("style");
        dg("#ctl00_ctl08_pnlCart").hide();
        dg("#ctl00_ctl08_spUserName,#ctl00_ctl08_btnLogOut").hide();
        dg("#menu-controls").append(replacementNav);
        dg(".mod-menu").before(newMenuBar);
        dg("#orderMGRLink a").html("Order History");
        dg("#ctl00_ctl08_btnCatalog").html("Shop");
        dg("#ctl00_ctl08_pnlCart").remove();
        dg("#username-wrapper, #menu_ctl00_ctl08_ctl01_1").hover(function(){
            dg("#menu_ctl00_ctl08_ctl01_1").show();},function(){
            dg("#menu_ctl00_ctl08_ctl01_1").hide();}    
        );
        //menu_ctl00_ctl08_ctl00_[id#]
        /*dg("#menu_ctl00_ctl08_ctl00_2057228").css({
            top:"18px",
            left:"290px"
        });
        dg("#menu_ctl00_ctl08_ctl00_2056387").css({
            top:"42px",
            left:"290px"
        });
        dg("#menu_ctl00_ctl08_ctl00_2400910").css({
            top:"69px",
            left:"290px"
        });
        dg("#menu_ctl00_ctl08_ctl00_2445122").css({
            top:"43px",
            left:"552px"
        });
        dg("#menu_ctl00_ctl08_ctl00_2445120").css({
            top:"93px",
            left:"552px"
        }); 
        dg("#menu_ctl00_ctl08_ctl00_2445167").css({
            top:"330px",
            left:"552px"
        });
        */
        
    }
    
    function modPage(){
        modMenu();
        showPage();
    }
    
    function showPage(){
        dg("body#PageType01").css("display","block");
        dg("body#PageType01-elastic").css("display","block");
    }
    
    function expandSearchBar(){
        console.log("expanding the search bar!");
    }
    
    function homeDimensions(){
        var width = dg("#lp-hero-container").width();
        var height = (width * .3931) + "px";
        dg("#lp-hero-container").css("height", height);
        var navWidth = (width*.5)/*dg(".lp-nav").width()*/;
        var navHeight = (navWidth * .2708) + "px";
        dg(".lp-nav").css("min-height",navHeight);
        dg(".lp-nav").css("width",navWidth + "px");
        //console.log(width);
    }
    
    
    
    
    
    if(document.getElementById("login-page")){
        var loginPageBanner = "<div id=\"login-head-cap\"><div id=\"shop-name-container\"><p id=\"shop-name\">Degreed Swag Shop</p></div><br><hr id=\"orange-hilit\"></div>";
        /*var loginPageBanner = "<img src=\"https://mymulti-craft.com/degreed/images/login-header.png\" id=\"login-header-img\">";*/
        var loginPageFooter = "<img src=\"https://mymulti-craft.com/degreed/images/login-form-btm.png\">";
        
        
        
        dg("#ENUSmain").addClass("login-page-container");
        console.log("Welcome to the Login page!");
        
        
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/login-page-bg.png)",
        });
        
        dg("#banner-image-wrapper").html(loginPageBanner);
        dg("#login-footer-wrapper").html(loginPageFooter);
        dg("#ctl00_content_Login_Stringcontrol2").hide();
        dg("#ctl00_content_ImageControlHeader").hide();
        var newForm = "<tbody><tr><td><div id=\"input-wrapper\"><div id=\"username-row\"><div class=\"login-label\"><label for=\"ctl00_content_Login_txtLoginId\">Email</label></div><div class=\"login-input\"><input name=\"ctl00$content$Login$txtLoginId\" type=\"text\" id=\"ctl00_content_Login_txtLoginId\" tabindex=\"1\" autocomplete=\"off\" /></div></div><div id=\"password-row\"><div class=\"login-label\"><label for=\"ctl00_content_Login_txtPassword\">Password</label></div><div class=\"login-input\"><input name=\"ctl00$content$Login$txtPassword\" type=\"password\" id=\"ctl00_content_Login_txtPassword\" tabindex=\"2\" autocomplete=\"off\" /></div></div></div></td></tr></tbody>";
        
        dg("table.CtlSearchGroup").html(newForm);
        showPage();
        
    }//Login
    else if(document.getElementById("home-page")){
        var catDest = "https://marcomcentral.app.pti.com/Graphic_Village/Degreed/catalog.aspx?uigroup_id=531951";
        
        dg("#ENUSmain").addClass("home-page-container");
        
        console.log("Welcome to the Home page!");
        //addMeta();
        
        
        dg(".home-page-container .NavTop div div").css({
            "float":"none"
        });
        modPage();
        dg("a#ctl00_ctl08_btnCatalog").css(currLocStyle);
        dg("#shoppingLink a").css(otherLocStyle);
        dg("#orderMGRLink a").css(otherLocStyle);
        dg("#ctl00_ImageControlPageHeader").hide();
        homeDimensions();
        dg(window).resize(function(){
            homeDimensions();
        });
    }//Home
    else if(document.getElementById("catalog-page")){
        dg("#ENUSmain").addClass("catalog-page-container");
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/shop-page-bg.jpg)",
        });
       
        console.log("Welcome to the Catalog page!");
        //addMeta();
        modPage();
        dg("a#ctl00_ctl08_btnCatalog").css(currLocStyle);
        dg("#shoppingLink a").css(otherLocStyle);
        dg("#orderMGRLink a").css(otherLocStyle);
        dg(".catalog-page-container #CtlBody").removeAttr("style");
    }//Catalog
    else if(document.getElementById("ctl00_content_CtlAddToCart_ProductOrderInfoController_divProductOrderInfo")){
        dg("#ENUSmain").addClass("product-page-container");
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/shop-page-bg.jpg)",
        });
        console.log("Welcome to the Product page!");
        
        //addMeta();
        modPage();
        dg("a#ctl00_ctl08_btnCatalog").css(currLocStyle);
        dg("#shoppingLink a").css(otherLocStyle);
        dg("#orderMGRLink a").css(otherLocStyle);
        dg(".product-page-container #CtlBody #CtlCart .TnProd img").removeAttr("style");
        dg("#ctl00_content_CtlAddToCart_ProductOrderInfoController_AddToCartActionBox_mItemQuantity_txtQty").prop("type","number");
        dg(".product-page-container #CtlBody").removeAttr("style");
    }//Product
    else if(document.getElementById("shopping-cart-page")){
        dg("#ENUSmain").addClass("shopping-page-container");
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/shop-page-bg.jpg)",
        });
        dg("input.qty").prop("type","number");
        
        
        console.log("Welcome to the Cart page!");
        
        //addMeta();
        modPage();
        dg("a#ctl00_ctl08_btnCatalog").css(otherLocStyle);
        dg("#shoppingLink a").css(currLocStyle);
        dg("#orderMGRLink a").css(otherLocStyle);
        dg("[id*=ctl00_content_CurrentCart_CtlCartItemList_CtlCartItems]").removeAttr("style");
        dg("a[value='btnRemoveItems']").html("<i class=\"fa fa-times\" aria-hidden=\"true\"></i>&nbsp;Remove");
        dg("a[value='btnUpdate']").html("<i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>&nbsp;Update");
        dg("table.Switch tbody tr td img,table.Switch tbody tr td br").hide();
        dg(".shopping-page-container a#ctl00_content_CurrentCart_btnSaveCart").html("<i class=\"fa fa-floppy-o disk-icon\" aria-hidden=\"true\"></i> Save to Cart")
    }//Cart
    else if(document.getElementById("shipping-page")){
        dg("#ENUSmain").addClass("shipping-page-container");
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/shop-page-bg.jpg)",
        });
        console.log("Welcome to the Checkout page!");
        
        //addMeta();
        modPage();
        dg("a[value='btnRemoveItems']").html("<i class=\"fa fa-times\" aria-hidden=\"true\"></i>&nbsp;Remove");
        dg(".shipping-page-container a#ctl00_content_CartShipping_btnBack").html("<i class=\"fa fa-hand-o-left\" aria-hidden=\"true\"></i> Back");
        dg("a#ctl00_ctl08_btnCatalog").css(otherLocStyle);
        dg("#shoppingLink a").css(currLocStyle);
        dg("#orderMGRLink a").css(otherLocStyle);
    }//Checkout
    else if(document.getElementById("cat-search-page")){
        console.log("Welcome to the Category Search Results page!");
        dg("#ENUSmain").addClass("cat-search-page-container");
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/shop-page-bg.jpg)",
        });
        modPage();
        dg("a#ctl00_ctl08_btnCatalog").css(currLocStyle);
        dg("#shoppingLink a").css(otherLocStyle);
        dg("#orderMGRLink a").css(otherLocStyle);
    }
    else if(document.getElementById("save-cart-page")){
        console.log("Welcome to the Save Cart page!");
        dg("#ENUSmain").addClass("save-cart-page-container");
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/shop-page-bg.jpg)",
        });
        modPage();
        dg("a#ctl00_ctl08_btnCatalog").css(otherLocStyle);
        dg("#shoppingLink a").css(currLocStyle);
        dg("#orderMGRLink a").css(otherLocStyle);
    }
    else if(document.getElementById("billing-page")){
        console.log("Welcome to the Billing page!");
        dg("#ENUSmain").addClass("billing-page-container");
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/shop-page-bg.jpg)",
        });
        modPage();
        dg("a#ctl00_ctl08_btnCatalog").css(otherLocStyle);
        dg("#shoppingLink a").css(currLocStyle);
        dg("#orderMGRLink a").css(otherLocStyle);
    }
    else if(document.getElementById("billing-po-page")){
        console.log("Welcome to the Billing Purchase Order page!");
        dg("#ENUSmain").addClass("billing-po-page-container");
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/shop-page-bg.jpg)",
        });
        modPage();
        dg("a#ctl00_ctl08_btnCatalog").css(otherLocStyle);
        dg("#shoppingLink a").css(currLocStyle);
        dg("#orderMGRLink a").css(otherLocStyle);
    }
    else if(document.getElementById("billing-cc-page")){
        console.log("Welcome to the Billing Credit Card page!");
        dg("#ENUSmain").addClass("billing-cc-page-container");
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/shop-page-bg.jpg)",
        });
        modPage();
        dg("a#ctl00_ctl08_btnCatalog").css(otherLocStyle);
        dg("#shoppingLink a").css(currLocStyle);
        dg("#orderMGRLink a").css(otherLocStyle);
    }
    else if(document.getElementById("confirm-order-page")){
        console.log("Welcome to the Confirm Order page!");
        dg("#ENUSmain").addClass("confirm-order-page-container");
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/shop-page-bg.jpg)",
        });
        modPage();
        dg("a#ctl00_ctl08_btnCatalog").css(otherLocStyle);
        dg("#shoppingLink a").css(currLocStyle);
        dg("#orderMGRLink a").css(otherLocStyle);
    }
    else if(document.getElementById("order-sum-page")){
        console.log("Welcome to the Order Summary page!");
        dg("#ENUSmain").addClass("order-sum-page-container");
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/shop-page-bg.jpg)",
        });
        modPage();
        dg("a#ctl00_ctl08_btnCatalog").css(otherLocStyle);
        dg("#shoppingLink a").css(currLocStyle);
        dg("#orderMGRLink a").css(otherLocStyle);
    }
    else if(document.getElementById("order-mgr-page")){
        console.log("Welcome to the Order Manager page!");
        dg("#ENUSmain").addClass("order-mgr-page-container");
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/shop-page-bg.jpg)",
        });
        modPage();
        dg("a#ctl00_ctl08_btnCatalog").css(otherLocStyle);
        dg("#shoppingLink a").css(otherLocStyle);
        dg("#orderMGRLink a").css(currLocStyle);
    }
    else if(document.getElementById("reports-page")){
        console.log("Welcome to the Reports page!");
        dg("#ENUSmain").addClass("reports-page-container");
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/shop-page-bg.jpg)",
        });
        modPage();
        dg("a#ctl00_ctl08_btnCatalog").css(currLocStyle);
        dg("#shoppingLink a").css(otherLocStyle);
        dg("#orderMGRLink a").css(otherLocStyle);
    }
    else if(document.getElementById("self-reg-page")){
        console.log("Welcome to the Self Registration page!");
        dg("#ENUSmain").addClass("self-reg-page-container");
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/shop-page-bg.jpg)",
        });
        modPage();
        dg("a#ctl00_ctl08_btnCatalog").css(currLocStyle);
        dg("#shoppingLink a").css(otherLocStyle);
        dg("#orderMGRLink a").css(otherLocStyle);
    }
    else if(document.getElementById("err-page")){
        console.log("Welcome to the Error page!");
        dg("#ENUSmain").addClass("err-page-container");
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/shop-page-bg.jpg)",
        });
        modPage();
        dg("a#ctl00_ctl08_btnCatalog").css(currLocStyle);
        dg("#shoppingLink a").css(otherLocStyle);
        dg("#orderMGRLink a").css(otherLocStyle);
    }
    else if(document.getElementById("impersonate-page")){
        console.log("Welcome to the impersonate user page!");
        dg("#ENUSmain").addClass("impersonate-page-container");
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/shop-page-bg.jpg)",
        });
        modPage();
        dg("a#ctl00_ctl08_btnCatalog").css(currLocStyle);
        dg("#shoppingLink a").css(otherLocStyle);
        dg("#orderMGRLink a").css(otherLocStyle);
    }
    else{
        dg("body#PageType01").css({
            "background-image":"url(https://mymulti-craft.com/degreed/images/shop-page-bg.jpg)",
        });
        console.log("This might be the profile or any other page!");
        modPage();
        dg("a#ctl00_ctl08_btnCatalog").css(currLocStyle);
        dg("#shoppingLink a").css(otherLocStyle);
        dg("#orderMGRLink a").css(otherLocStyle);
    }
    
   if(dg("#home-link") && dg("#profile-link") && dg("#logout-link")){
        
        dg("#home-link").hover(function(){
            console.log("Home link just got hovered.");
            dg("#home-hover").fadeToggle();
        });
        dg("#profile-link").hover(function(){
            console.log("Profile link just got hovered.");
            dg("#profile-hover").fadeToggle();
        });
        dg("#logout-link").hover(function(){
            console.log("Logout link just got hovered.");
            dg("#logout-hover").fadeToggle();
        });   
    }
    else{
        console.log("Global controls aren't detected. Something's wrong here");
    } 
    
        
    
});