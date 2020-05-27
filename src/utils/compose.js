const compose = (...funcs) => (comp) => {
  return funcs.reduceRight(
    (wrappedFunc, nextFunc) => nextFunc(wrappedFunc), comp
  );
}

export default compose;