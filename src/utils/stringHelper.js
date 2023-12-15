
export const sanitizeDescription =  (string) => {
    console.log(string.replaceAll("**.**?*", "").replaceAll("[.*?]", ""));
    
    return string;
  }