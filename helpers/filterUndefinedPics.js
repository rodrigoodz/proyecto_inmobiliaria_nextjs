const filterUndefinedPics = (files) => {
  const filesWithoutUndefined = [];
  files.file0 && filesWithoutUndefined.push(files.file0);
  files.file1 && filesWithoutUndefined.push(files.file1);
  files.file2 && filesWithoutUndefined.push(files.file2);
  files.file3 && filesWithoutUndefined.push(files.file3);
  files.file4 && filesWithoutUndefined.push(files.file4);
  files.file5 && filesWithoutUndefined.push(files.file5);

  return filesWithoutUndefined;
};

export default filterUndefinedPics;
