export const renderTitle = (name: string) => {
    const nameArray = name.split('-');
    nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`;
    return nameArray.join(' ');
  };