export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("your name")) {
    return (
      "Z&Y"
    );
  }

  if (query.toLowerCase().includes("plus")) {
    var first_half = query.split("plus")[0];
    var second_half = query.split("plus")[1];
    var num1 = Number(first_half.replace(/[^0-9]/g, ''));
    var num2 = Number(second_half.replace(/[^0-9]/g, ''));
    return (num1+num2).toString();
  }

  if (query.toLowerCase().includes("multiplied")) {
    var first_half = query.split("multiplied")[0];
    var second_half = query.split("multiplied")[1];
    var num1 = Number(first_half.replace(/[^0-9]/g, ''));
    var num2 = Number(second_half.replace(/[^0-9]/g, ''));
    return (num1*num2).toString();
  }

  if (query.toLowerCase().includes("minus")) {
    var first_half = query.split("minus")[0];
    var second_half = query.split("minus")[1];
    var num1 = Number(first_half.replace(/[^0-9]/g, ''));
    var num2 = Number(second_half.replace(/[^0-9]/g, ''));
    return (num1-num2).toString();
  }

  if (query.toLowerCase().includes("to the power of")) {
    var first_half = query.split("power")[0];
    var second_half = query.split("power")[1];
    var num1 = Number(first_half.replace(/[^0-9]/g, ''));
    var num2 = Number(second_half.replace(/[^0-9]/g, ''));
    return Math.pow(num1, num2).toString();
  }

  // if (query.toLowerCase().includes("largest")) {
  //   var first_half = query.split(",")[0];
  //   var second_half = query.split(",")[1];
  //   var third_half = query.split(",")[2];
  //   var num1 = Number(first_half.replace(/[^0-9]/g, ''));
  //   var num2 = Number(second_half.replace(/[^0-9]/g, ''));
  //   var num3 = Number(third_half.replace(/[^0-9]/g, ''));
  //   return Math.max(num1,num2,num3).toString();
  // }

  return "";
}
