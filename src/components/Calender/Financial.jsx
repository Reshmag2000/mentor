// // import React from 'react';
// import "./Financial.css";
// import dayjs, { Dayjs } from 'dayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import { PickersShortcutsItem } from '@mui/x-date-pickers/PickersShortcuts';

// const Financial = () => {
//   const getMonthWeekday = (
//     monthIndex: number,
//     weekdayIndex: number,
//     dayRank: number
//   ) => {
//     // Helper to find, for example, the 3rd Monday in Jun
//     const today = dayjs();
//     const firstDayOfMonth = today.month(monthIndex).startOf('month');
//     const weekDay = firstDayOfMonth.day(); // 0 (Sunday) to 6 (Saturday)

//     const deltaToFirstValidWeekDayInMonth =
//       (weekDay > weekdayIndex ? 7 : 0) + weekdayIndex - weekDay;
//     return firstDayOfMonth.add(
//       (dayRank - 1) * 7 + deltaToFirstValidWeekDayInMonth,
//       'day',
//     );
//   };

//   const shortcutsItems: PickersShortcutsItem<Dayjs | null>[] = [
//     {
//       label: "New Year's Day",
//       getValue: () => {
//         // (January 1)
//         const today = dayjs();
//         return today.month(0).date(1);
//       },
//     },
//     {
//       label: 'Birthday of MLK Jr.',
//       getValue: () => {
//         // (third Monday in January)
//         return getMonthWeekday(0, 1, 3);
//       },
//     },
//     {
//       label: 'Independence Day',
//       getValue: () => {
//         // (July 4)
//         const today = dayjs();
//         return today.month(6).date(4);
//       },
//     },
//     {
//       label: 'Labor Day',
//       getValue: () => {
//         // (first Monday in September)
//         return getMonthWeekday(8, 1, 1);
//       },
//     },
//     {
//       label: 'Veterans Day',
//       getValue: () => {
//         // (November 11)
//         const today = dayjs();
//         return today.month(10).date(11);
//       },
//     },
//     {
//       label: 'Thanksgiving Day',
//       getValue: () => {
//         // (fourth Thursday in November)
//         return getMonthWeekday(10, 4, 4);
//       },
//     },
//     {
//       label: 'World AIDS Day',
//       getValue: () => {
//         // (December 1)
//         const today = dayjs();
//         return today.month(11).date(1);
//       },
//     },
//     {
//       label: 'Christmas Day',
//       getValue: () => {
//         // (December 25)
//         const today = dayjs();
//         return today.month(11).date(25);
//       },
//     },
//   ];

//   const middleDate = dayjs(new Date().setMonth(6));

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <StaticDatePicker
//         slotProps={{
//           shortcuts: {
//             items: shortcutsItems,
//           },
//         }}
//         minDate={middleDate}
//       />
//     </LocalizationProvider>
//   );
// };

// export default Financial;


// import { iconsImgs } from "../../utils/images"
// import dayjs, { Dayjs } from 'dayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import { PickersShortcutsItem } from '@mui/x-date-pickers/PickersShortcuts';

// const Financial = () => {
//   return (
//     <div className="subgrid-two-item grid-common grid-c8">
//         <div className="grid-c-title">
//             <h3 className="grid-c-title-text">Financial Advice</h3>
//             <button className="grid-c-title-icon">
//                 <img src={ iconsImgs.plus } />
//             </button>
//         </div>
//         <div className="grid-c8-content">
//         const getMonthWeekday = (
//   monthIndex: number,
//   weekdayIndex: number,
//   dayRank: number,
// ) => {
//   // Helper to find for example the 3rd monday in Jun
//   const today = dayjs();
//   const firstDayOfMonth = today.month(monthIndex).startOf('month');
//   const weekDay = firstDayOfMonth.day(); // 0 (Sunday) to 6 (Saturday)

//   const deltaToFirstValidWeekDayInMonth =
//     (weekDay > weekdayIndex ? 7 : 0) + weekdayIndex - weekDay;
//   return firstDayOfMonth.add(
//     (dayRank - 1) * 7 + deltaToFirstValidWeekDayInMonth,
//     'day',
//   );
// };

// const shortcutsItems: PickersShortcutsItem<Dayjs | null>[] = [
//   {
//     label: "New Year's Day",
//     getValue: () => {
//       // (January 1)
//       const today = dayjs();
//       return today.month(0).date(1);
//     },
//   },
//   {
//     label: 'Birthday of MLK Jr.',
//     getValue: () => {
//       // (third Monday in January)
//       return getMonthWeekday(0, 1, 3);
//     },
//   },
//   {
//     label: 'Independence Day',
//     getValue: () => {
//       // (July 4)
//       const today = dayjs();
//       return today.month(6).date(4);
//     },
//   },
//   {
//     label: 'Labor Day',
//     getValue: () => {
//       // (first Monday in September)
//       return getMonthWeekday(8, 1, 1);
//     },
//   },
//   {
//     label: 'Thanksgiving Day',
//     getValue: () => {
//       // (fourth Thursday in November)
//       return getMonthWeekday(10, 4, 4);
//     },
//   },
//   {
//     label: 'Christmas Day',
//     getValue: () => {
//       // (December 25)
//       const today = dayjs();
//       return today.month(11).date(25);
//     },
//   },
// ];

// export default function BasicShortcuts() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <StaticDatePicker
//         slotProps={{
//           shortcuts: {
//             items: shortcutsItems,
//           },
//         }}
//       />
//     </LocalizationProvider>
//   );
// }
//         </div>
//     </div>
//   )
// }

// export default Financial


import { iconsImgs } from "../../utils/images";
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { PickersShortcutsItem } from '@mui/x-date-pickers/PickersShortcuts';

const Calender = () => {
  // Move the function inside the component
  const getMonthWeekday = (
    monthIndex: number,
    weekdayIndex: number,
    dayRank: number
  ) => {
    // Helper to find for example the 3rd Monday in Jun
    const today = dayjs();
    const firstDayOfMonth = today.month(monthIndex).startOf('month');
    const weekDay = firstDayOfMonth.day(); // 0 (Sunday) to 6 (Saturday)

    const deltaToFirstValidWeekDayInMonth =
      (weekDay > weekdayIndex ? 7 : 0) + weekdayIndex - weekDay;
    return firstDayOfMonth.add(
      (dayRank - 1) * 7 + deltaToFirstValidWeekDayInMonth,
      'day',
    );
  };

  // Define the shortcuts inside the component
  const shortcutsItems: PickersShortcutsItem < Dayjs | null>[] = [
    {
      label: "Project orientation",
      getValue: () => {
        // (January 1)
        const today = dayjs();
        return today.month(0).date(1);
      },
    },
    {
      label: 'Phase 1',
      getValue: () => {
        // (third Monday in January)
        return getMonthWeekday(0, 1, 3);
      },
    },
    {
      label: 'phase 2',
      getValue: () => {
        // (July 4)
        const today = dayjs();
        return today.month(6).date(4);
      },
    },
    {
      label: 'Communication Plan',
      getValue: () => {
        // (first Monday in September)
        return getMonthWeekday(8, 1, 1);
      },
    },
    {
      label: 'Project viva',
      getValue: () => {
        // (fourth Thursday in November)
        return getMonthWeekday(10, 4, 4);
      },
    },
    {
      label: 'Final Presentation',
      getValue: () => {
        // (December 25)
        const today = dayjs();
        return today.month(11).date(25);
      },
    },
  ];

  return (
    <div className="subgrid-two-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Project Calender</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="Plus Icon" />
        </button>
      </div>
      <div className="grid-c8-content">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            slotProps={{
              shortcuts: {
                items: shortcutsItems,
              },
            }}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default Calender;
