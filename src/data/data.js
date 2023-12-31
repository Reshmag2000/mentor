import { iconsImgs } from "../utils/images";
// import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Home', image: iconsImgs.home },
    { id: 2, title: 'Project Overview', image: iconsImgs.budget },
    { id: 3, title: 'Team Members', image: iconsImgs.plane },
    { id: 4, title: 'Project Grade', image: iconsImgs.wallet },
    { id: 5, title: 'Reference Material', image: iconsImgs.bills },
    { id: 6, title: 'Feedback', image: iconsImgs.report },
    { id: 7, title: 'Project Calender', image: iconsImgs.wallet },
    { id: 8, title: 'Help and Support', image: iconsImgs.wealth },
    { id: 9, title: 'Logout', image: iconsImgs.user },
    { id: 10, title: 'Settings', image: iconsImgs.gears }
];

export const transactions = [
    {
        id: 1, 
        name: "Group 1",
        topic:"ICTAK Internship Portal-Student View",
        // image: personsImgs.person_four,
        // date: "23/12/04",
        // amount: 22000
    },
    {
        id: 2, 
        name: "Group 2 : ",
        topic:"ICTAK Internship Portal-Admin and Mentor View",

        // image: personsImgs.person_three,
        // date: "23/07/21",
        // amount: 20000
    },
    {
        id: 3, 
        name: "Group 3",
        topic:"ICTAK Exam Registration Portal",

        // image: personsImgs.person_two,
        // date: "23/08/25",
        // amount: 30000
    },
    {
        id: 4, 
        name: "Group 4",
        topic:"ICTAK Internship Portal-student view",
        // image: personsImgs.person_three,
        // date: "23/07/21",
        // amount: 20000
    },
    {
        id: 5, 
        name: "Group 5",
        topic:"ICTAK Internship Portal-Admin and Mentor View",
        // image: personsImgs.person_three,
        // date: "23/07/21",
        // amount: 20000
    }
];

export const grade = [
    {
        id: 14,
        group: "group1",
        phase1: 45,
        phase2: "-",
        finalgrade:"-"
    },
    {
        id: 15,
        group: "group2",
        phase1: 48,
        phase2: "-",
        finalgrade:"-"
    },
    {
        id: 16,
        group: "group3",
        phase1: 45,
        phase2: "-",
        finalgrade:"-"
    },
    {
        id: 17,
        group: "group4",
        phase1: 47,
        phase2: "-",
        finalgrade:"-"
    },
    {
        id: 18,
        group: "group5",
        phase1: 40,
        phase2: "-",
        finalgrade:"-"
    }
];





 

export const feedback = [
    {
      animationEnabled: true,
      title: {
        text: "Number of New Customers"
      },
      axisY: {
        title: "Number of Customers"
      },
      toolTip: {
        shared: true
      },
      data: [
        {
          type: "spline",
          name: "2016",
          showInLegend: true,
          dataPoints: [
            { y: 155, label: "Jan" },
            { y: 150, label: "Feb" },
            { y: 152, label: "Mar" },
            { y: 148, label: "Apr" },
            { y: 142, label: "May" },
            { y: 150, label: "Jun" },
            { y: 146, label: "Jul" },
            { y: 149, label: "Aug" },
            { y: 153, label: "Sept" },
            { y: 158, label: "Oct" },
            { y: 154, label: "Nov" },
            { y: 150, label: "Dec" }
          ]
        },
        {
          type: "spline",
          name: "2017",
          showInLegend: true,
          dataPoints: [
            { y: 172, label: "Jan" },
            { y: 173, label: "Feb" },
            { y: 175, label: "Mar" },
            { y: 172, label: "Apr" },
            { y: 162, label: "May" },
            { y: 165, label: "Jun" },
            { y: 172, label: "Jul" },
            { y: 168, label: "Aug" },
            { y: 175, label: "Sept" },
            { y: 170, label: "Oct" },
            { y: 165, label: "Nov" },
            { y: 169, label: "Dec" }
          ]
        }
      ]
    }
  ];
  





    
   
// export const subscriptions = [
//     {
//         id: 24,
//         title: "LinkedIn",
//         due_date: "23/12/04",
//         amount: 20000
//     },
//     {
//         id: 25,
//         title: "Netflix",
//         due_date: "23/12/10",
//         amount: 5000
//     },
//     {
//         id: 26,
//         title: "DSTV",
//         due_date: "23/12/22",
//         amount: 2000
//     }
// ];

export const savings = [
    {
        id: 27,
        // image: personsImgs.person_one,
        // saving_amount: 250000,
        title: "POSITIVE FEEDBACK",
        // date_taken: "23/12/22",
        // amount_left: 40000
    },
    {
      id:28,
      title:"NEGATIVE FEEDBACK"
    }
]