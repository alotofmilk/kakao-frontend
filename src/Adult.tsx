type AgeType = {
  age: number;
};

const Adult = (props: AgeType) => {
  const { age } = props;
  return <>{age >= 20 ? "성인" : "미성년자"}</>;
};

export default Adult;
