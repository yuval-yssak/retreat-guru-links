const today = dayjs().format("MMM D, YYYY");
const yesterday = dayjs().subtract(1, "day").format("MMM D, YYYY");
const aWeekAgo = dayjs().subtract(1, "week").format("MMM D, YYYY");
const oneMonthForward = dayjs().add(1, "month").format("MMM D, YYYY");

const map = [
  {
    id: "population__arrivals-today",
    params: {
      page:"registrations",
      orderby:"first_name",
      order:"asc",
      "program_category[0]":"30",
      "stay_range":"today",
      "statuses[0]":"reserved",
      "statuses[1]":"arrived",
      "statuses[2]":"checked-out",
      "rs-action":"filter",
      "report_description":"Lodging-Based+Only+%2B+Flight+Times",
      "rs-report-screen":"toplevel_page_registrations",
      paged:"1",
      success:"true",
      "report_added":"13407",
      "rs-report":"13407",
    },
  },
  {
    id: "population__departures-today",
    params: {
      page:"registrations",
      orderby:"first_name",
      order:"asc",
      "program_category[0]":"30",
      "departing_range":"today",
      "statuses[0]":"reserved",
      "statuses[1]":"arrived",
      "statuses[2]":"checked-out",
      "rs-action":"filter",
      "report_description":"Lodging-Based+Only+%2B+Flight+Times",
      "rs-report-screen":"toplevel_page_registrations",
      paged:"1",
      success:"true",
      "report_added":"13408",
      "rs-report":"13408",
    },
  },
  {
    id: "population__arrivals-tomorrow",
    params: {
      page:"registrations",
      orderby:"first_name",
      order:"asc",
      "program_category[0]":"30",
      arriving:"1",
      "statuses[0]":"reserved",
      "statuses[1]":"arrived",
      "statuses[2]":"checked-out",
      "rs-action":"filter",
      "report_description":"Lodging-Based+Only+%2B+Flight+Times",
      "rs-report-screen":"toplevel_page_registrations",
      paged:"1",
      success:"true",
      "report_added":"13409",
      "rs-report":"13409", 
    },
  },
  {
    id: "population__departures-tomorrow",
    params: {
      page:"registrations",
      orderby:"first_name",
      order:"asc",
      "program_category[0]":"30",
      departing:"1",
      "statuses[0]":"reserved",
      "statuses[1]":"arrived",
      "statuses[2]":"checked-out",
      "rs-action":"filter",
      "report_description":"Lodging-Based+Only+%2B+Flight+Times",
      "rs-report-screen":"toplevel_page_registrations",
      paged:"1",
      success:"true",
      "report_added":"13411",
      "rs-report":"13411",
    },
  },
  {
    id: "population__balances-due-14-days", 
    params: {
      page:"registrations",
      orderby:"start_date",
      order:"asc",
      "stay_range":"in-next",
      arriving:"14",
      "statuses[0]":"reserved",
      "statuses[1]":"arrived",
      "statuses[2]":"checked-out",
      "balance_due":"registration",
      payment:"1",
      paged:"1",
    },
  },
  {
    id: "population__OVD-bed-setup",
    params: {
      page:"registrations",
      orderby:"start_date",
      order:"asc",
      "program_category[0]":"30",
      "stay_range":"in-next",
      arriving:"365",
      "statuses[0]":"reserved",
      "statuses[1]":"arrived",
      "statuses[2]":"checked-out",
      "fields[are-you-staying-in-an-oceanview-deluxe-room]":"yes-i-am-staying-in-an-oceanview-deluxe-room",
      "rs-action":"filter",
      "rs-report-screen":"toplevel_page_registrations",
      paged:"1",
      success:"true",
      "report_added":"13092",
      "rs-report":"13092",
    },
  },
  {
    id: "population__payment-reminders",
    params: {
      "program_category[0]":"30",
      "stay_range":"in-next",
      arriving:"21",
      "statuses[0]":"reserved",
      "statuses[1]":"arrived",
      "statuses[2]":"checked-out",
      payment:"1",
      page:"registrations",
      "hidden-report-export-columns":"first_name%2Clast_name%2Carrive_date%2Cleave_date%2Clodging%2Cpaymenttravel_reminder_sent%2Carrival_info_sent%2Cbalance_due",
      "rs-report":"12321",
      "rs-action":"filter",
      orderby:"start_date",
      order:"asc",
    },
  },

  {
    id: "population__arrival-instructions",
    params: {
      "program_category[0]":"30",
      "stay_range":"in-next",
      arriving:"5",
      "statuses[0]":"reserved",
      "statuses[1]":"arrived",
      "statuses[2]":"checked-out",
      payment:"1",
      page:"registrations",
      "hidden-report-export-columns":"first_name%2Clast_name%2Carrive_date%2Cleave_date%2Clodging%2Cpaymenttravel_reminder_sent%2Carrival_info_sent%2Cbalance_due",
      "rs-report":"12321",
      "rs-action":"filter",
      orderby:"start_date",
      order:"asc",
    },
  },  

  {
    id: "population__upcoming-food-allergies",
    params: {
      "program_category[0]":"30",
      "stay_range":"in-next",
      "arriving":"7",
      "statuses[0]":"reserved",
      "statuses[1]":"arrived",
      "statuses[2]":"checked-out",
      "fields[do-you-have-any-food-allergies-or-important-dietary-restrictions]":"yes",
      "meal-summary":"1",
      page:"registrations",
      "hidden-report-export-columns":"first_name%2Clast_name%2Cspiritual_name%2Carrive_date%2Cleave_date%2Cprogram%2Cfood_allergies%2Cwheat_or_gluten_restriction_reason%2Cother_food_allergy",
      "rs-report":"12492",
      "rs-action":"filter",
      orderby:"start_date",
      order:"asc",
    },
  },
/*
  {
    id: "population__upcoming-us-arrivals",
    params: {
      page:"registrations",
      "program_category[0]":"21",
      "program_category[1]":"8",
      "program_category[2]":"53",
      "program_category[3]":"9",
      "program_category[4]":"40",
      "program_category[5]":"29",
      "stay_range":"in-next",
      arriving:"30",
      "statuses[0]":"reserved",
      "fields[address]":"ANY",
      "rs-action":"filter",
      orderby:"start_date",
      order:"asc",  
      paged:"1",
      success:"true",
      "report_added":"12457",
      "rs-report":"12457" 
    },
  },
  */
  {
    id: "population__match-registrations",
    params: {
      page:"rs-persons-match-registrations",
    },
  },

  {
    id: "courses__upcoming-courses",
    params: {
      page: "rs-programs",
      "program_category[0]": "all-courses",
      "program_category[1]": "attc",
      "program_category[2]": "ttc",
      in_future: "1",
      level: "normal",
    },
  },
  {
    id: "courses__current-courses",
    params: {
      page: "rs-programs",
      "program_category[0]": "all-courses",
      "program_category[1]": "attc",
      "program_category[2]": "ttc",
      in_now: "1",
      level: "normal",
      paged: "1",
    },
  },
  {
    id: "courses__upcoming-ttc-and-attc",
    params: {
      page: "rs-programs",
      "program_category[0]": "attc",
      "program_category[1]": "ttc",
      in_future: "1",
      paged: "1",
    },
  },
  {
    id: "courses__past-ttc-and-attc",
    params: {
      page: "rs-programs",
      "program_category[0]": "attc",
      "program_category[1]": "ttc",
      in_past: "1",
      order: "desc",
      orderby: "start_date",
      paged: "1",
    },
  },
  {
    id: "courses__upcoming-online-courses",
    params: {
      page: "rs-programs",
      orderby: "start_date",
      order: "asc",
      tasks_compare: "LIKE",
      in_future: "1",
      program_category: "online",
    },
  },
  {
    id: "courses__upcoming-online-onsite-courses",
    params: {
      page: "rs-programs",
      orderby: "start_date",
      order: "asc",
      "program_category[0]": "all-courses",
      "program_category[1]": "attc",
      "program_category[2]": "ttc",
      "program_category[3]": "online",
      in_future: "1",
    },
  },
  {
    id: "courses__current-online-courses",
    params: {
      page: "rs-programs",
      orderby: "start_date",
      order: "asc",
      tasks_compare: "LIKE",
      in_progress: "1",
      program_category: "online",
    },
  },
  {
    id: "courses__past-online-courses",
    params: {
      page: "rs-programs",
      orderby: "start_date",
      order: "desc",
      tasks_compare: "LIKE",
      in_past: "1",
      program_category: "online",
    },
  },

  {
    id: "population__current-population",
    params: {
      page: "registrations",
      "program_category[0]": "30",
      min_stay: today,
      max_stay: today,
      "statuses[0]": "reserved",
      "statuses[1]": "arrived",
      "statuses[2]": "checked-out",
      payment: "1",
      summary: "1",
      "meal-summary": "1",
      paged: "1",
    },
  },
  {
    id: "population__upcoming-month",
    params: {
      page: "registrations",
      "program_category[0]": "30",
      min_stay: today,
      max_stay: oneMonthForward,
      "statuses[0]": "reserved",
      "statuses[1]": "arrived",
      "statuses[2]": "checked-out",
      payment: "1",
      summary: "1",
      "meal-summary": "1",
      paged: "1",
    },
  },
  {
    id: "population__current-food-allergies",
    params: {
      "program_category[0]":"30",
      min_stay: today,
      max_stay: today,
      "statuses[0]":"reserved",
      "statuses[1]":"arrived",
      "statuses[2]":"checked-out",
      "fields[do-you-have-any-food-allergies-or-important-dietary-restrictions]":"yes",
      payment:"1",
      summary:"1",
      "meal-summary":"1",
      page:"registrations",
      "hidden-report-export-columns":"first_name%2Clast_name%2Cspiritual_name%2Carrive_date%2Cleave_date%2Cprogram%2Cfood_allergies%2Cwheat_or_gluten_restriction_reason%2Cother_food_allergy",
      "rs-report":"12509",
      "rs-action":"filter",
      orderby:"first_name",
      order:"asc",
    },
  },
  {
    id: "transactions__accounting-report",
    params: {
      page: "rs-reports-accounting",
    },
  },
  {
    id: "transactions__accounting-report-yesterday",
    params: {
      page: "rs-reports-accounting",
      start: dayjs().subtract(1, "day").format("YYYY-MM-DD"),
      end: dayjs().subtract(1, "day").format("YYYY-MM-DD"),
    },
  },
  {
    id: "transactions__refunds-last-7-days",
    params: {
      "categories[0]": "refund",
      "categories[1]": "cash-refund",
      "categories[2]": "other-refund",
      max_date: today,
      min_date: aWeekAgo,
      page: "rs-transactions",
    },
  },
  {
    id: "transactions__past-open-balances",

    params: {
      max_stay: today,
      page: "registrations",
      balance_due: "registration",
      orderby: "start_date",
      order: "desc",
    },
  },

  {
    id: "rooms__has-bathroom",
    params: {
      "lodging_type[0]": "44",
      "lodging_type[1]": "36",
      "lodging_type[2]": "516",
      page: "room-bookings",
      days: "30",
    },
  },
  {
    id: "rooms__oceanview-deluxe-rooms",
    params: {
      "lodging_type[0]": "44",
      page: "room-bookings",
      days: "30",
    },
  },
  {
    id: "rooms__beachfront-deluxe-rooms",
    params: {
      "lodging_type[0]": "36",
      page: "room-bookings",
      days: "30",
    },
  },
  {
    id: "rooms__bayside-with-bath",
    params: {
      "lodging_type[0]": "516",
      page: "room-bookings", 
      days: "30",
    },
  },
  {
    id: "rooms__single-double-rooms",
    params: {
      "lodging_type[0]": "46",
      "lodging_type[1]": "41",
      "lodging_type[2]": "11761",
      page: "room-bookings",
      days: "30",
    },
  },
  {
    id: "rooms__twin-bed-rooms",
    params: {
      "lodging_type[0]": "40",
      "lodging_type[1]": "38",
      page: "room-bookings",
      days: "30",
    },
  },
  {
    id: "rooms__tent-huts",
    params: {
      "lodging_type[0]": "48",
      "lodging_type[1]": "49",
      page: "room-bookings",
      days: "30",
    },
  },
  {
    id: "rooms__beach-huts",
    params: {
      "lodging_type[0]": "35",
      page: "room-bookings",
      days: "30",
    },
  },
  {
    id: "rooms__platform-tents",
    params: {
      "lodging_type[0]": "47",
      page: "room-bookings",
      days: "30",
    },
  },
  {
    id: "rooms__staff-residence",
    params: {
      "lodging_type[0]": "42",
      page: "room-bookings",
      days: "30",
    },
  },
  {
    id: "rooms__karma-yogis-summer",
    params: {
     /* "lodging_type[0]": "7203", */
      "lodging_type[1]": "3477",
      "lodging_type[2]": "3479",
      "lodging_type[3]": "6649",
      "lodging_type[4]": "3476",
      "lodging_type[5]": "6632",
      "lodging_type[6]": "3478",
      "lodging_type[7]": "40",
      "lodging_type[8]": "46",
      "lodging_type[9]": "488",
      "lodging_type[10]": "38",
      "lodging_type[11]": "41",
      "lodging_type[12]": "42",
      page: "room-bookings",
      days: "60",
    },
  },

  { id: "reg__yvp" },
  { id: "quick-reg__yvp" },
  { id: "quick-reg__speaker" },
  { id: "quick-reg__children" },
  { id: "quick-reg__babies" },
  { id: "quick-reg__donation" },
];

map.forEach((reference) => {
  const $a = document.getElementById(reference.id);
  if (reference.params)
    $a.href = `https://sivanandabahamas.secure.retreat.guru/wp-admin/admin.php?${new URLSearchParams(
      reference.params
    ).toString()}`;
});

document.querySelectorAll("a").forEach(($) => ($.target = "_blank"));

// initialize date picker for total payments
const totalPaymentsDatePicker = new Datepicker(
  document.querySelector(
    "#transactions__total-payments--date-input input[name='total-payments-choose-date']"
  ),
  {
    format: "yyyy MM dd",
    todayBtn: true,
    todayBtnMode: 1,
    autohide: true,
  }
);
totalPaymentsDatePicker.setDate(new Date());
const $totalPaymentsReportLink = document.querySelector(
  "#transactions__total-payments--date-input a"
);
$totalPaymentsReportLink.target = "_blank";
const setTotalPaymentsDate = (date) =>
  ($totalPaymentsReportLink.href = `http://sivanandabahamas.secure.retreat.guru/wp-admin/admin.php?${new URLSearchParams(
    {
      page: "rs-transactions",
      min_date: dayjs(date).format("MMM D. YYYY"),
      max_date: dayjs(date).format("MMM D. YYYY"),
      "categories[0]": "payment",
      "categories[1]": "cash-payment",
      "categories[2]": "other-payment",
      "categories[3]": "refund",
      "categories[4]": "cash-refund",
      "categories[5]": "other-refund",
      registration_attachment: "registration",
      totals: "1",
      paged: "1",
    }
  ).toString()}`);
setTotalPaymentsDate(today);

document
  .querySelector(
    "#transactions__total-payments--date-input input[name='total-payments-choose-date']"
  )
  .addEventListener("changeDate", (event) =>
    setTotalPaymentsDate(event.detail.date)
  );

document
  .getElementById("transactions__total-payments")
  .addEventListener("click", () => {
    const dateInputContainer = document.querySelector(
      "#transactions__total-payments--date-input.date-input-container"
    );

    if (dateInputContainer.classList.contains("hidden"))
      dateInputContainer.classList.remove("hidden");
    else dateInputContainer.classList.add("hidden");
  });

// initialize date picker for cash transactions
const cashDatePicker = new Datepicker(
  document.querySelector(
    "#transactions__cash-payments--date-input input[name='cash-choose-date']"
  ),
  {
    format: "yyyy MM dd",
    todayBtn: true,
    todayBtnMode: 1,
    autohide: true,
  }
);
cashDatePicker.setDate(new Date());
const $cashReportLink = document.querySelector(
  "#transactions__cash-payments--date-input a"
);
$cashReportLink.target = "_blank";
const setCashDate = (date) =>
  ($cashReportLink.href = `http://sivanandabahamas.secure.retreat.guru/wp-admin/admin.php?${new URLSearchParams(
    {
      page: "rs-transactions",
      min_date: dayjs(date).format("MMM D. YYYY"),
      max_date: dayjs(date).format("MMM D. YYYY"),
      "categories[0]": "cash-payment",
      "categories[1]": "cash-refund",
      registration_attachment: "registration",
      totals: "1",
      paged: "1",
    }
  ).toString()}`);
setCashDate(today);

document
  .querySelector(
    "#transactions__cash-payments--date-input input[name='cash-choose-date']"
  )
  .addEventListener("changeDate", (event) => setCashDate(event.detail.date));

document
  .getElementById("transactions__cash-payments")
  .addEventListener("click", () => {
    const dateInputContainer = document.querySelector(
      "#transactions__cash-payments--date-input.date-input-container"
    );

    if (dateInputContainer.classList.contains("hidden"))
      dateInputContainer.classList.remove("hidden");
    else dateInputContainer.classList.add("hidden");
  });
