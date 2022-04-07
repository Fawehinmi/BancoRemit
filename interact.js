// Functions to attach to event
const OpenSidebar = () => {
    document.querySelector(".sidebar").classList.add("show-sidebar");
    document.querySelector(".cancel").classList.add("show-cancel");
};


// 

// Display a section
const displaySection = (section) => {
    document.querySelector(`.${section}`).classList.remove("none");
    document.querySelector(`.add-bank-account`).classList.add("none");
};


const checkInvoiceDesign = () => {
        document.querySelector(".invoice-design").classList.remove("hidden");
        document.querySelector(".no-design").classList.add("hidden");
    }
    // 
const showPopup = (popup) => {
    document.querySelector(`.${popup}`).classList.remove("hidden");
    document.querySelector(".popup-overlay").classList.remove("hidden");
}
const CloseSidebar = () => {

    document.querySelector(".sidebar").classList.remove("show-sidebar")
    document.querySelector(".cancel").classList.remove("show-cancel")

    // }
};

const hideAllPopup = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
        document
            .querySelectorAll(".popup")
            .forEach((eachPopup) => eachPopup.classList.add("hidden"));
        document.querySelector(".popup-overlay").classList.add("hidden");
    }
};

const hidePopup = () => {
    document
        .querySelectorAll(".popup")
        .forEach((eachPopup) => eachPopup.classList.add("hidden"));
    document.querySelector(".popup-overlay").classList.add("hidden");
};

const showTransactionFilterPopup = () => {
    document.querySelector(".popup-overlay").classList.remove("hidden");
    document
        .querySelector(".transaction-filter-popup")
        .classList.remove("hidden");
};




const showInvoiceFilterPopup = () => {
    document.querySelector(".invoice-filter-popup").classList.remove("hidden");
    document.querySelector(".popup-overlay").classList.remove("hidden");
};

const showRefundFilterPopup = () => {
    document.querySelector(".popup-overlay").classList.remove("hidden");
    document.querySelector(".refund-filter-popup").classList.remove("hidden");
};



const showSingleRefundPopup = () => {
    document.querySelector(".popup-overlay").classList.remove("hidden");
    document.querySelector(".single-refund-popup").classList.remove("hidden");
};

const newSubaccountPopup = () => {
    document.querySelector(".popup-overlay").classList.remove("hidden");
    document.querySelector(".new-subaccount-popup").classList.remove("hidden");
}

const showRefundLogOption = () => {
    document.querySelector(".refund-log-dropdown").classList.toggle("hidden");
};

const showDownloadTransactionPopup = () => {
    document.querySelector(".popup-overlay").classList.remove("hidden");
    document
        .querySelector(".download-transaction-popup")
        .classList.remove("hidden");
};

const showTransferPopup = () => {
    document.querySelector(".popup-overlay").classList.remove("hidden");
    document.querySelector(".transfer-popup-1").classList.remove("hidden");
}

const showTransferPopup2 = () => {
    document.querySelector(".transfer-popup-1").classList.add("hidden");
    document.querySelector(".transfer-popup-2").classList.remove("hidden")
}


const buyAirtimePopup = () => {
    document.querySelector(".popup-overlay").classList.remove("hidden");
    document.querySelector(".airtime-popup-1").classList.remove("hidden");
}
const showLink = () => {
    document.querySelector(".popup-overlay").classList.remove("hidden");
    document.querySelector(".payment-link-popup").classList.remove("hidden");
}
const showLink1 = () => {
    document.querySelector(".payment-link-popup").classList.add("hidden");
    document.querySelector(".payment-link-1").classList.remove("hidden");
}
const paymentPlanPopup = () => {
    document.querySelector(".popup-overlay").classList.remove("hidden");
    document.querySelector(".payment-plan").classList.remove("hidden");
}
const showLink2 = () => {
    document.querySelector(".payment-link-popup").classList.add("hidden");
    document.querySelector(".payment-link-2").classList.remove("hidden");
}
const showLink3 = () => {
    document.querySelector(".payment-link-popup").classList.add("hidden");
    document.querySelector(".payment-link-3").classList.remove("hidden");
}

const showCustomUrl = () => {
    if (document.querySelector(".custom-url").classList.contains("hidden")) {
        document.querySelector(".custom-url").classList.remove("hidden");
    } else {
        document.querySelector(".custom-url").classList.add("hidden");
    }

}

const showMultipleEmail = () => {
    if (document.querySelector(".multiple-email").classList.contains("hidden")) {
        document.querySelector(".multiple-email").classList.remove("hidden");
        document.querySelector(".multiple-emails").innerHTML = "- Hide multiple emails"
    } else {
        document.querySelector(".multiple-email").classList.add("hidden");
        document.querySelector(".multiple-emails").innerHTML = "+ send multiple emails"
    }
}
const buyAirtimePopup2 = () => {
    document.querySelector(".airtime-popup-1").classList.add("hidden");
    document.querySelector(".airtime-popup-2").classList.remove("hidden")
}

const showBulkAirtimePopup = () => {
    document.querySelector(".airtime-popup-1").classList.add("hidden");
    document.querySelector(".bulk-airtime-popup").classList.remove("hidden")
}
const storePopup = () => {
    document.querySelector(".popup-overlay").classList.remove("hidden");
    document.querySelector(".store-popup").classList.remove("hidden");
}
const ActivateCustomTimeField = (e) => {
    if (document.querySelector(".custom-time-radio").checked) {
        document.querySelector(".time-custom-field").disabled = false;
    } else {
        document.querySelector(".time-custom-field").disabled = true;
    }
};

const timeOptionsForTransaction = (e) => {
    if (e.target.classList.contains("time-option")) {
        document.querySelectorAll(".time-option").forEach((elem) => {
            elem.classList.remove("border");
        });
        e.target.classList.add("border");
    }
};

const showAddCustomerToBlockPopup = () => {
    document.querySelector(".popup-overlay").classList.remove("hidden");
    document
        .querySelector(".choose-blocking-option-popup")
        .classList.remove("hidden");
};

const addCardPopup = () => {
    document.querySelector(".popup-overlay").classList.remove("hidden");
    document
        .querySelector(".add-card-popup")
        .classList.remove("hidden");
}

const goBackToCustomerBlockOption = () => {
    document.querySelector(".popup-overlay").classList.remove("hidden");
    document
        .querySelector(".choose-blocking-option-popup")
        .classList.remove("hidden");
    document
        .querySelector(".choose-blocking-email-popup")
        .classList.add("hidden");
};

const goBackToCustomerBlockOption2 = () => {
    document.querySelector(".popup-overlay").classList.remove("hidden");
    document
        .querySelector(".choose-blocking-option-popup")
        .classList.remove("hidden");
    document
        .querySelector(".choose-blocking-multiple-popup")
        .classList.add("hidden");
};

const showSingleBlocking = () => {
    document.querySelector(".popup-overlay").classList.remove("hidden");
    document
        .querySelector(".choose-blocking-option-popup")
        .classList.add("hidden");
    document
        .querySelector(".choose-blocking-email-popup")
        .classList.remove("hidden");
};

const showMultipleBlocking = () => {
    document.querySelector(".popup-overlay").classList.remove("hidden");
    document
        .querySelector(".choose-blocking-option-popup")
        .classList.add("hidden");
    document
        .querySelector(".choose-blocking-multiple-popup")
        .classList.remove("hidden");
};

const pickFile = () => {
    document.querySelector("#email-list").click();
};

// Adding event to elements
document.querySelector(".menu-btn").addEventListener("click", () => {
    OpenSidebar();
});
document.querySelectorAll(".tab-nav").forEach((navTab) => {
    navTab.addEventListener("click", (e) => {
        document.querySelectorAll(".tab-nav").forEach((elem) => {
            elem.classList.remove("active");
        });
        e.target.classList.add("active");
        document
            .querySelectorAll(".tab-content")
            .forEach((tab) => tab.classList.add("hidden"));
        document.querySelector(`.${e.target.id}`).classList.remove("hidden");
    });
});

// Phone number flag selector

// Graph plotting and rendeing
const myChart = new Chart(document.getElementById("myChart"), config);


const showDropDown = (dropDown) => {
    if (document.querySelector(`.${dropDown}`).classList.contains('none')) {
        document.querySelector(`.${dropDown}`).classList.remove('none')
    } else {
        document.querySelector(`.${dropDown}`).classList.add('none')
    }

}