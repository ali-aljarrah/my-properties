$(document).ready(function () {
  // Create list of properties to get the 
  // property after user submit his information
  var properties = [
    {
      id: 1,
      city: "دمشق",
      details: "شقة غرفتين وصالة",
      price: "900,000,000 ل.س",
      area: "المنطقة البرامكة",
      parking: "لا يوجد كراج",
      floor: "الطابق الرابع",
      contract: "الملكية: طابو",
      balkon: "لا يوجد بلكون",
      furniture: "مفروشة",
      img1: "/images/img-1.webp",
      img2: "/images/img-2.webp",
      img3: "/images/img-3.webp",
    },
    {
      id: 2,
      city: "دمشق",
      details: "شقة ثلاث غرف وصالة",
      price: "1,000,000,000 ل.س",
      area: "المنطقة المالكي",
      parking: "يوجد كراج",
      floor: "الطابق الاول",
      contract: "الملكية: طابو",
      balkon: "يوجد بلكون",
      furniture: "مفروشة",
      img1: "/images/img-4.webp",
      img2: "/images/img-5.webp",
      img3: "/images/img-6.webp",
    },
    {
      id: 3,
      city: "اللاذقية",
      details: "شقة ثلاث غرف وصالة",
      price: "1,500,000,000 ل.س",
      area: "المنطقة الامريكان",
      parking: "لا يوجد كراج",
      floor: "الطابق الرابع",
      contract: "الملكية: طابو",
      balkon: "يوجد بلكون",
      furniture: "مفروشة",
      img1: "/images/img-7.webp",
      img2: "/images/img-8.webp",
      img3: "/images/img-9.webp",
    },
    {
      id: 4,
      city: "دمشق",
      details: "شقة غرفتين وصالة",
      price: "1,600,000,000 ل.س",
      area: "المنطقة الميدان",
      parking: "لا يوجد كراج",
      floor: "الطابق الاول",
      contract: "الملكية: طابو",
      balkon: "يوجد بلكون",
      furniture: "غير مفروشة",
      img1: "/images/img-10.webp",
      img2: "/images/img-11.webp",
      img3: "/images/img-12.webp",
    },
    {
      id: 5,
      city: "دمشق",
      details: "شقة غرفتين وصالة",
      price: "1,800,000,000 ل.س",
      area: "المنطقة الميدان",
      parking: "لا يوجد كراج",
      floor: "الطابق الاول",
      contract: "الملكية: طابو",
      balkon: "يوجد بلكون",
      furniture: "غير مفروشة",
      img1: "/images/img-13.webp",
      img2: "/images/img-14.webp",
      img3: "/images/img-15.webp",
    },
    {
      id: 6,
      city: "دمشق",
      details: "شقة ثلاث غرف وصالة",
      price: "2,800,000,000 ل.س",
      area: "المنطقة ابو رمانة",
      parking: "لا يوجد كراج",
      floor: "الطابق العاشر",
      contract: "الملكية: طابو",
      balkon: "يوجد بلكون",
      furniture: "مفروشة",
      img1: "/images/img-16.webp",
      img2: "/images/img-17.webp",
      img3: "/images/img-18.webp",
    },
    {
      id: 7,
      city: "ريف دمشق",
      details: "شقة اربع غرف وصالة",
      price: "800,000,000 ل.س",
      area: "المنطقة جرمانا",
      parking: "لا يوجد كراج",
      floor: "الطابق الثاني",
      contract: "الملكية: طابو",
      balkon: "يوجد بلكون",
      furniture: "مفروشة",
      img1: "/images/img-19.webp",
      img2: "/images/img-20.webp",
      img3: "/images/img-21.webp",
    },
    {
      id: 8,
      city: "ريف دمشق",
      details: "شقة غرفتين وصالة",
      price: "1,500,000,000 ل.س",
      area: "المنطقة مشروع دمر",
      parking: "يوجد كراج",
      floor: "الطابق الاول",
      contract: "الملكية: طابو",
      balkon: "يوجد بلكون",
      furniture: "مفروشة",
      img1: "/images/img-22.webp",
      img2: "/images/img-23.webp",
      img3: "/images/img-24.webp",
    },
    {
      id: 9,
      city: "دمشق",
      details: "شقة ثلاث غرف وصالة",
      price: "2,500,000,000 ل.س",
      area: "المنطقة القصور",
      parking: "يوجد كراج",
      floor: "الطابق الرابع",
      contract: "الملكية: طابو",
      balkon: "يوجد بلكون",
      furniture: "مفروشة",
      img1: "/images/img-25.jpg",
      img2: "/images/img-26.jpg",
      img3: "/images/img-27.jpg",
    },
    {
      id: 10,
      city: "دمشق",
      details: "شقة اربع غرف وصالة",
      price: "2,600,000,000 ل.س",
      area: "المنطقة القصور",
      parking: "يوجد كراج",
      floor: "الطابق الرابع",
      contract: "الملكية: طابو",
      balkon: "لا يوجد بلكون",
      furniture: "مفروشة",
      img1: "/images/img-28.jpg",
      img2: "/images/img-29.jpg",
      img3: "/images/img-30.jpg",
    },
    {
      id: 11,
      city: "دمشق",
      details: "شقة غرفتين وصالة",
      price: "700,000,000 ل.س",
      area: "المنطقة البرامكة",
      parking: "لا يوجد كراج",
      floor: "الطابق الثاني",
      contract: "الملكية: طابو",
      balkon: "يوجد بلكون",
      furniture: "مفروشة",
      img1: "/images/img-31.jpg",
      img2: "/images/img-32.jpg",
      img3: "/images/img-33.jpg",
    },
    {
      id: 12,
      city: "ريف دمشق",
      details: "شقة ثلاث غرف وصالة",
      price: "750,000,000 ل.س",
      area: "المنطقة صحنايا",
      parking: "لا يوجد كراج",
      floor: "الطابق العاشر",
      contract: "الملكية: طابو",
      balkon: "يوجد بلكون",
      furniture: "مفروشة",
      img1: "/images/img-34.webp",
      img2: "/images/img-35.webp",
      img3: "/images/img-36.webp",
    },
  ];

  var chosenPropertyID;

  // Create and generate captcha code from a plugin
  var captcha = new $.Captcha();
  captcha.generate();

  // Regax expression for arabic
  var arabicAlphabetDigits =
    /[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]|[\u0200]|[\u00A0]/g;

  // Show and hide property details
  // when the checkbox change
  $(".showDetails").change(function () {
    let detailsNum = $(this).attr("data-details");
    if ($(this).is(":checked")) {
      $("#hiddenRow" + detailsNum).show();
    } else {
      $("#hiddenRow" + detailsNum).hide();
    }
  });
  
  // Back from user information form to the properties list
  $("#backBtn").click(function() {
    $("#formDiv").hide();
    $("#PropDiv").show();
  });

   // Back from property result to the properties list
   $("#backBtn1").click(function() {
    $("#propertyDetailsWrapper").hide();
    $("#PropDiv").show();
  });

  // Handle choose property form submit
  $('form[name="propertiesForm"]').submit(function (e) {
    e.preventDefault();

    // Get the chosen propery
    let chosenPropertyRadioID = $("input[name='property']:checked").val();

    // Check if the user choose propery or not
    if (chosenPropertyRadioID == null) {
      // return with alert if the user didn't choose
      alert("يرجى اختيار العقار قبل المتابعة");
      return false;
    } else {
      // Show the user details form if the user choose property
      // And hide properties table
      $("#PropDiv").hide();
      $("#formDiv").show();
      chosenPropertyID = chosenPropertyRadioID;
    }
  });

  // Handle user information form submit
  $("form[name='informationForm']").submit(function (e) {
    e.preventDefault();

    // Check Captcha code
    if (captcha.validate($(".user-text").val().trim())) {
      // Check if the user ID in empty
      if ($("input[name='userID']").val().trim() == "") {
        alert("يرجى ادخال الرقم الوطني");
        return false;
      }
      if (!checkUserID($("input[name='userID']").val().trim())) {
        alert("يرجى ادخال الرقم الوطني صحيح");
        return false;
      }
      // Check user full name if entered
      if ($("input[name='fullName']").val().trim() != "") {
        if (
          !arabicAlphabetDigits.test($("input[name='fullName']").val().trim())
        ) {
          alert("يرجى ادخال الإسم باللغة العربية فقط");
          return false;
        }
      }
      // Check if the user birthday with correct
      // format if the user enter a birthday date
      if ($("input[name='userbirthday']").val().trim() != "") {
        if (!isValidDate($("input[name='userbirthday']").val().trim())) {
          alert("يرجى ادخال تاريخ الولادة بشكل صحيح yyyy-mm-dd");
          return false;
        }
      }
      // Check if phone number is Syrian if the user
      // entered a phone number
      if ($("#phoneNum").val().trim() != "") {
        if (!checkPhoneNum($("#phoneNum").val().trim())) {
          alert("يرجى ادخال رقم جوال سوري");
          return false;
        }
      }
      // Check if the email address is correct
      // if the user entered an emain
      if ($("#email").val().trim() != "") {
        if (!isValidEmail($("#email").val().trim())) {
          alert("يرجى ادخال البريد الإلكتروني بشكل صحيح");
          return false;
        }
      }
    } else {
      alert("يرجى ادخال رمز التحقق");
      return false;
    }

    // Get the chosen property
    var propertyInfo = properties.filter((property) => {
      return property.id == chosenPropertyID;
    });

    // Show the property information
    showPropertyInfo(propertyInfo);
  });

  // Check if userID is 11 length and it's a number
  // and start with number from 0 to 9
  function checkUserID(userID) {
    if (userID.length === 11) {
      if (!isNaN(userID)) {
        if (userID.charAt(0) === "0" || userID.charAt(0) === "1") {
          return true;
        }
      }
    }
    return false;
  }

  // Check the birthday date if has a valid format dd-mm-yyyy
  const dateRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

  function isValidDate(dateString) {
    return dateRegex.test(dateString);
  }

  // Check the phone number format if it's
  // match syrian local number (MTN, Syriatel)
  function checkPhoneNum(phoneNum) {
    if (phoneNum.length === 10) {
      if (!isNaN(phoneNum)) {
        if (phoneNum.charAt(0) === "0" && phoneNum.charAt(1) === "9") {
          return true;
        }
      }
    }
    return false;
  }

  // Check email if it's valid
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Show the property information
  function showPropertyInfo(property) {
    $("#propertyID").text(property[0].id);
    $("#propertyCity").text(property[0].city);
    $("#propertyDetails").text(property[0].details);
    $("#propertyPrice").text(property[0].price);
    $("#propertyArea").text(property[0].area);
    $("#propertyParking").text(property[0].parking);
    $("#propertyFloor").text(property[0].floor);
    $("#propertyContract").text(property[0].contract);
    $("#propertyBalkon").text(property[0].balkon);
    $("#propertyFurniture").text(property[0].furniture);
    $("#propertyImage1").attr('src' ,property[0].img1);
    $("#propertyImage2").attr('src' ,property[0].img2);
    $("#propertyImage3").attr('src' ,property[0].img3);

    $("#formDiv").hide();
    $("#propertyDetailsWrapper").show();

    // Empty inputs after user finish
    resetAllInputs();
  }

  function resetAllInputs() {
    captcha.generate();
    $('form[name="propertiesForm"]').trigger('reset');
    $('form[name="informationForm"]').trigger('reset');
  }
});
