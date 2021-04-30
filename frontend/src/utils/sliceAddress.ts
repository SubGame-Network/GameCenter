const sliceAddress = (
  address: string | undefined | null,
  frontLength: number = 10,
  endLength: number = 10
) => {
  return address
    ? address
        .slice(0, frontLength)
        .concat("...")
        .concat(address.slice(address.length - endLength, address.length))
    : "unknown";
};

export default sliceAddress;
