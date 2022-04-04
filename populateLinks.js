const today = dayjs().format("MMM D, YYYY");
const yesterday = dayjs().subtract(1, "day").format("MMM D, YYYY");
const oneMonthForward = dayjs().add(1, "month").format("MMM D, YYYY");

const map = [
  {
    id: "courses__upcoming-cousres",
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
    id: "courses__online-courses",
    params: {
      page: "rs-programs",
      orderby: "start_date",
      order: "desc",
      tasks_compare: "LIKE",
      level: "normal",
      paged: "1",
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
    id: "transactions__total-payments-yesterday",
    params: {
      page: "rs-transactions",
      min_date: yesterday,
      max_date: yesterday,
      "categories[0]": "payment",
      "categories[1]": "cash-payment",
      "categories[2]": "other-payment",
      "categories[3]": "refund",
      "categories[4]": "cash-refund",
      "categories[5]": "other-refund",
      registration_attachment: "registration",
      totals: "1",
      paged: "1",
    },
  },
  {
    id: "transactions__cash-payments-yesterday",
    params: {
      page: "rs-transactions",
      min_date: yesterday,
      max_date: yesterday,
      "categories[0]": "cash-payment",
      "categories[1]": "cash-refund",
      registration_attachment: "registration",
      totals: "1",
      paged: "1",
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
    id: "rooms__deluxe-rooms",
    params: {
      "lodging_type[0]": "44",
      "lodging_type[1]": "36",
      page: "room-bookings",
      days: "30",
    },
  },
  {
    id: "rooms__single-double-rooms",
    params: {
      "lodging_type[0]": "46",
      "lodging_type[1]": "41",
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

  { id: "reg__yvp" },
  { id: "quick-reg__yvp" },
  { id: "quick-reg__speaker" },
];

map.forEach((reference) => {
  const $a = document.getElementById(reference.id);
  $a.target = "_blank";
  if (reference.params)
    $a.href = `https://sivanandabahamas.secure.retreat.guru/wp-admin/admin.php?${new URLSearchParams(
      reference.params
    ).toString()}`;
});
