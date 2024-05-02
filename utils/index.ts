export function categorizeWeather(code: number, isDay: boolean) {
  if ([1000].includes(code)) {
    return isDay ? "Sunny" : "Clear";
  } else if (
    [
      1003, 1006, 1009, 1030, 1063, 1066, 1069, 1072, 1087, 1114, 1117, 1135,
      1147, 1150, 1153, 1168, 1171, 1180, 1183, 1204, 1207, 1210, 1213, 1216,
      1219, 1222, 1225, 1237, 1240, 1249, 1255, 1258, 1261, 1264, 1273, 1279,
      1282,
    ].includes(code)
  ) {
    return "Clear";
  } else if ([1186, 1189, 1243, 1276].includes(code)) {
    return "Little Bit Rain";
  } else if ([1192, 1195, 1198, 1201, 1246, 1276].includes(code)) {
    return "Heavy Rain";
  } else {
    return "Uncategorized"; // For any codes that don't fit the provided categories
  }
}

export const getDayfromDate = (dayInNumber: number) => {
  if (dayInNumber === 0) {
    return "Mon";
  } else if (dayInNumber === 1) {
    return "Tue";
  } else if (dayInNumber === 2) {
    return "Wed";
  } else if (dayInNumber === 3) {
    return "Thu";
  } else if (dayInNumber === 4) {
    return "Fri";
  } else if (dayInNumber === 5) {
    return "Sat";
  } else if (dayInNumber === 6) {
    return "Sun";
  }
};
